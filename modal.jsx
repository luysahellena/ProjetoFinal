// index.js
import React from 'react';
import ReactDOM from 'react-dom';

// Define the JSX code
const ChatHeader = ({ userName }) => {
  return (
    <div>
      <h2>Louys Beer's & Cheers Chat</h2>
      <p>Welcome, {userName}</p>
    </div>
  );
};

const ChatInput = () => {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    console.log(`Sending message: ${message}`);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

const ChatMessage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

const ChatMessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = React.useState([]);
  const [userName, setUserName] = React.useState('');

  return (
    <div>
      <ChatHeader userName={userName} />
      <ChatMessageList messages={messages} />
      <ChatInput />
    </div>
  );
};

// Render the App component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);