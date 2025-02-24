import { useState } from "react";

function Home() {
  return (
    <form className="flex flex-col items-center justify-center grow min-h-0">
      <div className="mb-5">
        <label htmlFor="addressee" className="text-gray-600 text-lg">
          Destinatário
        </label>
        <div className="mt-2 mb-5">
          <input type="text" name="addressee" className="w-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-md" required />
        </div>
        <label htmlFor="message" className="text-gray-600 text-lg">
          Mensagem
        </label>
        <div className="mt-2">
          <textarea name="message" className="w-xl h-40 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 text-md" required />
        </div>
      </div>
      <button type="submit" className="text-white bg-red-800 hover:bg-red-900 hover:cursor-pointer focus:ring-4 focus:ring-red-300 rounded-md px-5 py-2.5 me-2 mb-2 focus:outline-none">
        Enviar
      </button>
    </form>
  );
}

export default Home;
