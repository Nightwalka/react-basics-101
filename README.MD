# React Chatbot Project

A simple interactive chatbot built with React and Vite that demonstrates core React concepts including component composition, state management, and props drilling.

## Features

- Real-time chat interface
- Separate components for messages and input
- Responsive design with CSS flexbox
- User and bot message differentiation with avatars
- Automatic bot responses to user messages

## Project Structure

```
chatbot-project/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx     # Input component with send button
│   │   ├── ChatMessage.jsx   # Individual message display
│   │   └── ChatMessages.jsx  # Message list container
│   ├── assets/
│   │   ├── bot.png          # Bot avatar
│   │   └── user.png         # User avatar
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
└── package.json             # Project dependencies
```

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Core Components

- **App**: Main container and state manager
- **ChatMessages**: Renders the message list using map()
- **ChatMessage**: Displays individual messages with sender avatars
- **ChatInput**: Handles user input and message sending

## Technologies Used

- React 18
- Vite
- CSS Modules
- ES6+ JavaScript

## Key React Concepts Demonstrated

- Component composition
- State management with useState
- Props drilling
- Conditional rendering
- List rendering with keys
- Event handling
- Controlled components

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT