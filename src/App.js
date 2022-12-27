import './App.css'
import ChatFeed from './components/ChatFeed.jsx'

import { ChatEngine } from 'react-chat-engine'

function App() {
  return (
    <div className="App">
      <ChatEngine
        height = "100vh"
        projectID = "b1b419eb-8a46-45ea-adac-48a6b427f107"
        userName = "john"
        userSecret = "qwerty"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} /> }
        onNewMessage = { () => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play() }
      />
    </div>
  )
}

export default App;
