import "./index.css";

const MessageItem = ({ messageData }) => {
  return (
    <div className="MessageItem">
      <img
        className="profile-pic"
        src={messageData.photo}
        alt="photo profile"
      />
      <div className="text-container">
        <span className="userName">{messageData.userName}</span>
        <span className="email">{`@${messageData.email}`}</span>
        <p className="tweet">{messageData.body}</p>
        <div className="reactions">
          <img
            src="https://img.icons8.com/ios/256/speech-bubble.png"
            alt="comment-icon"
          />
          <img
            src="https://img.icons8.com/material-rounded/256/retweet.png"
            alt="retweet-icon"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/hearts.png"
            alt="like-icon"
          />
          <img
            src="https://img.icons8.com/ios/256/upload.png"
            alt="upload-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
