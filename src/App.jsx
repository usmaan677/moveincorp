import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ConnextVerification from './components/ConnextVerification'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connext" element={<ConnextVerification />} />
      </Routes>
    </Router>
  )
}

export default App
