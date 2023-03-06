import "./index.css";
import Header from "../header/Header";
import MessageList from "../messageList/MessageList";
import TweetButton from "../tweetButton/TweetButton";

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <MessageList />
      <TweetButton />
    </div>
  );
};

export default Content;
