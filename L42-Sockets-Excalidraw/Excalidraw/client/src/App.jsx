import { useEffect, useRef, useState } from "react";
// import { socket } from "./socket.js";

export default function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const canvasRef = useRef();
  const [drawing, setDrawing] = useState(false);
  let px, py, ex, ey;
  const [shape, setShape] = useState("square");
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.reset();
    elements.forEach((e) => {
      if (e.shape == "square") {
        drawSquare(e);
      } else if (e.shape == "line") {
        drawLine(e);
      }
    });
  }, [elements]);

  function drawTempSquare({ sx, sy, height, width }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.strokeRect(sx, sy, width, height);
  }

  function drawSquare({ sx, sy, height, width }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeRect(sx, sy, width, height);
  }

  // function drawLine(a, b, c, d) {}

  function getCoordinates(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    return {
      x: Math.floor(x),
      y: Math.floor(y),
    };
  }

  // useEffect(() => {
  //   function handleConnect() {
  //     setIsConnected(true);
  //   }

  //   function handleDisconnect() {
  //     setIsConnected(false);
  //   }

  //   socket.on("connect", handleConnect);
  //   socket.on("disconnect", handleDisconnect);
  //   socket.connect();

  //   return () => {
  //     socket.off("connect", handleConnect);
  //     socket.off("disconnect", handleDisconnect);
  //     socket.disconnect();
  //   };
  // }, []);

  function sendMessage(event) {
    event.preventDefault();
  }

  function handleMouseDown(ev) {
    
    console.log(ev);
    const { x, y } = getCoordinates(ev);
    console.log(x, y);
    px = x;
    py = y;
  }

  function handleMouseUp(ev) {
    const { x, y } = getCoordinates(ev);

    let sx = Math.min(x, px);
    let sy = Math.min(y, py);

    if (shape == "square") {
      let width = Math.abs(x - px);
      let height = Math.abs(y - py);
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
    } else if (shape == "line") {
      setElements([
        ...elements,
        {
          shape: "line",
          sx: px,
          sy: py,
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
      }
    });
  }

  function drawLine({ sx, sy, ex, ey }) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }

  function handleMouseMove(ev) {

    const { x, y } = getCoordinates(ev);

    let sx = Math.min(x, px);
    let sy = Math.min(y, py);
    if (shape == "square") {
      let width = Math.abs(x - px);
      let height = Math.abs(y - py);
      refreshCanvas();
      drawTempSquare({
        sx,
        sy,
        height,
        width,
      });
    }
  }

  function clearCanvas() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.reset();
    setElements([]);
  }

  return (
    <main>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={() => setShape("square")}>Square</button>
      <button onClick={() => setShape("line")}>Line</button>
      <br />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        // onMouseLeave={}
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
