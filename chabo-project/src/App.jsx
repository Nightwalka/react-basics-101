import { useState, } from "react";
import { Chatbot } from "supersimpledev";
import "./App.css";
import RobotProfileImage from './assets/bot.png';
import UserProfileImage from './assets/user.png';
import { ChatInput } from './components/ChatInput';
import ChatMessages from "./components/ChatMessages";




function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello how can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "whats the date ",
      sender: "user",
      id: "id3",
    },
    {
      message: "Aug 20",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
