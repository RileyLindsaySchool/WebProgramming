import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/Card";
import OtherCard from "./components/OtherCard";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Card />
      <OtherCard />
    </div>
  );
}
 
export default App;
