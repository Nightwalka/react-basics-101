
import RobotProfileImage from '../assets/bot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  return (
    // ne  kind of if statement
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={RobotProfileImage} className="chat-profile" />}

      <div className="chat-message-text">{message}</div>

      {sender === "user" && <img src={UserProfileImage} className="chat-profile" />}
    </div>
  );
}
