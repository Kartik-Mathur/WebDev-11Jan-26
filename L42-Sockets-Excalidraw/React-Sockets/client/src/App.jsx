import { useEffect, useState } from "react";
import { socket } from "./socket.js";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [username, setUsername] = useState("User");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleConnect() {
      setIsConnected(true);
    }

    function handleDisconnect() {
      setIsConnected(false);
    }

    function handleMessage(newMessage) {
      setMessages((currentMessages) => [...currentMessages, newMessage]);
    }

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("chat:message", handleMessage);
    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("chat:message", handleMessage);
      socket.disconnect();
    };
  }, []);

  function sendMessage(event) {
    event.preventDefault();

    const cleanMessage = message.trim();
    if (!cleanMessage) return;

    socket.emit("chat:message", {
      username: username.trim() || "Anonymous",
      text: cleanMessage
    });

    setMessage("");
  }

  return (
    <main className="page">
      <section className="chat-card">
        <header className="chat-header">
          <div>
            <h1>Socket.IO Chat</h1>
            <p>Open this page in two tabs and send messages.</p>
          </div>

          <span className={isConnected ? "status online" : "status offline"}>
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </header>

        <label className="field">
          <span>Your name</span>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <div className="messages" aria-live="polite">
          {messages.length === 0 ? (
            <p className="empty">No messages yet.</p>
          ) : (
            messages.map((item) => (
              <article className="message" key={item.id}>
                <div className="message-meta">
                  <strong>{item.username}</strong>
                  <time>
                    {new Date(item.sentAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </time>
                </div>
                <p>{item.text}</p>
              </article>
            ))
          )}
        </div>

        <form className="message-form" onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit" disabled={!isConnected || !message.trim()}>
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
