import './App.css'
import { Route, Routes } from "react-router";
import LandingPage from './LandingPage';
import CharacterCard from './exercises/1-character-card/CharacterCard';
import CookBook from './exercises/2-links-cookbook/Cookbook';
import CharacterCardAns from './answers/1-character-card/CharacterCard';
import LinksCookbookAns from './answers/2-cookbook/Cookbook';

function App() {
  // !! [DO NOT TOUCH] !!
  // Refer to the spec for which files you should use for the exercises

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/exercise1/" element={<CharacterCard/>}/>
      <Route path="/exercise2/" element={<CookBook/>}/>
      <Route path="/answers/exercise1/" element={<CharacterCardAns/>}/>
      <Route path="/answers/exercise2/" element={<LinksCookbookAns/>}/>
    </Routes>
  )
}

export default App
