import { useEffect, useState } from "react";
import api from "../../services/api.js";

function Messages() {
  const [messages, setMessages] = useState([]);

  async function getMessages() {
    const apiResponse = await api.get("/messages");
    setMessages(apiResponse.data.sort(() => Math.random() - 0.5));
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {messages.map((message) => (
        <div key={message.id} className="p-5 m-2 rounded-md bg-red-800 text-white">
          <p className="mb-3">
            <span className="font-semibold text-lg">Para:</span> {message.addressee}
          </p>
          <p className="mb-3">
            <span className="font-semibold text-lg">Mensagem:</span> {message.message}
          </p>
          <p>
            <span className="font-semibold text-lg">Data:</span> {new Date(message.date).toLocaleDateString("pt-BR")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Messages;
