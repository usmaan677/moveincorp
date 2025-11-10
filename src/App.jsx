import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ConnextVerification from './components/ConnextVerification'
import Team from './components/Team'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connext" element={<ConnextVerification />} />
      </Routes>
    </Router>
  )
}

export default App
