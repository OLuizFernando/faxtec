import { useRef } from "react";
import api from "../../services/api.js";

function Form() {
  const addresseeInput = useRef();
  const messageInput = useRef();

  async function sendMessage() {
    const addressee = addresseeInput.current.value;
    const message = messageInput.current.value;

    const apiResponse = await api.post(
      "/messages",
      {
        addressee,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (apiResponse.status === 201) {
      alert("Mensagem publicada com sucesso!");
      window.location.reload();
    } else {
      alert("Algo deu errado.");
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl mx-10 mb-5 sm:mb-10 md:mb-14 mt-10 sm:mt-14 md:mt-20">
        Publique mensagens <span className="font-semibold">anônimas</span> para o nome que quiser.
      </h1>
      <form className="flex flex-col items-center justify-center grow min-h-0 p-4 mb-5">
        <div className="mb-5 w-full max-w-lg">
          <label htmlFor="addressee" className="text-gray-600 text-lg">
            Destinatário
          </label>
          <div className="mt-2 mb-5">
            <input ref={addresseeInput} type="text" name="addressee" className="w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-md" required />
          </div>

          <label htmlFor="message" className="text-gray-600 text-lg">
            Mensagem
          </label>
          <div className="mt-2">
            <textarea ref={messageInput} name="message" className="w-full h-40 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-md" required />
          </div>
        </div>

        <button onClick={sendMessage} type="button" className="text-white bg-red-800 hover:bg-red-900 hover:cursor-pointer focus:ring-4 focus:ring-red-300 rounded-md px-5 py-2.5 mb-2 focus:outline-none">
          Publicar
        </button>
      </form>
    </>
  );
}

export default Form;
