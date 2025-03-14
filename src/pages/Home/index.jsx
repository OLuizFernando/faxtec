import Form from "../../components/Form";
import Messages from "../../components/Messages";

function Home() {
  return (
    <>
      <Form />
      <div className="flex items-center justify-center">
        <Messages />
      </div>
    </>
  );
}

export default Home;
