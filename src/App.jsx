import './App.css'
import { Route, Routes } from "react-router";
import LandingPage from './LandingPage';
import CharacterCard from './exercises/1-character-card/CharacterCard';
import LinksCookbook from './exercises/2-links-cookbook/LinksCookbook';

function App() {
  // !! [DO NOT TOUCH] !!
  // Refer to the spec for which files you should use for the exercises

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/exercise1/" element={<CharacterCard/>}/>
      <Route path="/exercise2/" element={<LinksCookbook/>}/>
      <Route path="/answers/exercise1/" element={<CharacterCard/>}/>
      <Route path="/answers/exercise2/" element={<LinksCookbook/>}/>
    </Routes>
  )
}

export default App
