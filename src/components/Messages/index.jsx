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

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div className="flex flex-col items-center justify-center grow min-h-0 p-4">
        <div className="w-full max-w-lg">
          <label htmlFor="searchBox" className="text-gray-600 text-lg">
            Pesquisar destinatário
          </label>
          <div className="mt-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="searchBox"
              className="w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10 mx-3 text-gray-600 text-center">
        <h2 className="mb-3">
          Veja mensagens que outros anônimos já enviaram.
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className="p-5 m-2 rounded-md bg-red-800 text-white"
            >
              <p className="mb-3">
                <span className="font-semibold text-lg">Para:</span>{" "}
                {message.addressee}
              </p>
              <p className="mb-3">
                <span className="font-semibold text-lg">Mensagem:</span>{" "}
                {message.message}
              </p>
              <p>
                <span className="font-semibold text-lg">Data:</span>{" "}
                {new Date(message.date).toLocaleDateString("pt-BR")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Messages;
