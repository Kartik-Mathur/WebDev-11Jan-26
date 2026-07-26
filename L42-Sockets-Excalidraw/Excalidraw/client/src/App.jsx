import { useEffect, useRef, useState } from "react";
import { socket } from "./socket.js";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const canvasRef = useRef();
  const [drawing, setDrawing] = useState(false);
  let px, py, ex, ey;
  const [shape, setShape] = useState("square");

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

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.disconnect();
    };
  }, []);

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
    console.log(ev);
    const { x, y } = getCoordinates(ev);
    console.log(x, y);
    ex = x;
    ey = y;

    if (shape == "square") {
      const ctx = canvasRef.current.getContext("2d");
      ctx.strokeRect(px, py, ex, ey);
    }
  }

  return (
    <main>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        // onMouseMove={}
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
