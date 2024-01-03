import Speech from "./Speech";
import History from "./History";

export default function ChatRoom() {
  return (
    <div className="m-5">
      <Speech />
      <div className="mt-5">
        <History />
      </div>
    </div>
  );
}
