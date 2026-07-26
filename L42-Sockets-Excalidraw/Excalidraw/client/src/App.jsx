import { useEffect, useRef, useState } from "react";
import { socket } from "./socket.js";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const canvasRef = useRef();
  const [drawing, setDrawing] = useState(false);

  const [coordinates, setCoordinates] = useState({
    px: 0,
    py: 0,
    ex: 0,
    ey: 0,
  });
  const [shape, setShape] = useState("square");
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.reset();
    refreshCanvas();
  }, [elements]);

  function drawTempSquare({ sx, sy, height, width }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.strokeRect(sx, sy, width, height);
  }

  function drawTempLine({ sx, sy, ex, ey }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.closePath();
  }

  function drawSquare({ sx, sy, height, width }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeRect(sx, sy, width, height);
  }

  function getCoordinates(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    return {
      x: Math.floor(x),
      y: Math.floor(y),
    };
  }

  useEffect(() => {
    function handleConnect() {
      setIsConnected(true);
    }

    function handleDisconnect() {
      setIsConnected(false);
    }

    function handleNewElements({ newElements }) {
      setElements(newElements);
      console.log(newElements);
    }

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("new:elements", handleNewElements);
    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   socket.emit("update:elements", {
  //     elements,
  //   });
  // }, [elements]);

  function sendMessage(event) {
    event.preventDefault();
  }

  function handleMouseDown(ev) {
    // console.log(ev);
    const { x, y } = getCoordinates(ev);
    // console.log(x, y);
    let newCoordinates = { ...coordinates };
    newCoordinates.px = x;
    newCoordinates.py = y;
    setCoordinates(newCoordinates);
    setDrawing(true);
  }

  function handleMouseUp(ev) {
    setDrawing(false);
    const { x, y } = getCoordinates(ev);

    let sx = Math.min(x, coordinates.px);
    let sy = Math.min(y, coordinates.py);

    if (shape == "square") {
      let width = Math.abs(x - coordinates.px);
      let height = Math.abs(y - coordinates.py);
      setElements([
        ...elements,
        {
          shape: "square",
          sx,
          sy,
          height,
          width,
        },
      ]);
      saveBoard([
        ...elements,
        {
          shape: "square",
          sx,
          sy,
          height,
          width,
        },
      ]);
    } else if (shape == "line") {
      setElements([
        ...elements,
        {
          shape: "line",
          sx: coordinates.px,
          sy: coordinates.py,
          ex: x,
          ey: y,
        },
      ]);
      saveBoard([
        ...elements,
        {
          shape: "line",
          sx: coordinates.px,
          sy: coordinates.py,
          ex: x,
          ey: y,
        },
      ]);
    }
  }

  function refreshCanvas() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.reset();

    elements.forEach((e) => {
      if (e.shape == "square") {
        drawSquare(e);
      } else if (e.shape == "line") {
        drawLine(e);
      }
    });
  }

  function drawLine({ sx, sy, ex, ey }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.closePath();
  }

  function handleMouseMove(ev) {
    if (!drawing) return;
    const { x, y } = getCoordinates(ev);

    let sx = Math.min(x, coordinates.px);
    let sy = Math.min(y, coordinates.py);
    if (shape == "square") {
      let width = Math.abs(x - coordinates.px);
      let height = Math.abs(y - coordinates.py);
      refreshCanvas();
      drawTempSquare({
        sx,
        sy,
        height,
        width,
      });
    } else if (shape == "line") {
      refreshCanvas();
      drawTempLine({
        sx: coordinates.px,
        sy: coordinates.py,
        ex: x,
        ey: y,
      });
    }
  }

  function clearCanvas() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.reset();
    setElements([]);
    saveBoard([]);
  }

  function saveBoard(elements) {
    socket.emit("update:elements", {
      elements,
    });
  }

  return (
    <main>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={() => setShape("square")}>Square</button>
      <button onClick={() => setShape("line")}>Line</button>
      <button onClick={saveBoard}>Save</button>
      <br />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        height={500}
        width={700}
        style={{
          border: "1px solid black",
        }}
      ></canvas>
    </main>
  );
}
