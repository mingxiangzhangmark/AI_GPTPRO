import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AppStartPage from './components/AppStartPage'
import LearnMore from './components/LearnMore'
import ChatPage from './components/ChatPage';

function App() {


  return (
    <>
     {/* <AppStartPage /> */}
     <Router>
      <Routes>
        <Route path="/" element={<AppStartPage />} />
        <Route path="/learn-more" element={< LearnMore/>} />
        <Route path="/chat" element={<ChatPage/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
