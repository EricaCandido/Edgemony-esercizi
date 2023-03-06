import "./index.css";
import MessageItem from "../messageItem/MessageItem";
import messageList from "../../mocks/messageList";

const MessageList = () => {
  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} />
      ))}
    </div>
  );
};

export default MessageList;
