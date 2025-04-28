import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from "./components/Chat"
import  GenerateImage from "./components/GenerateImage"
import Home from "./components/Home"



function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/Chat" element={<Chat/>}  />
        <Route path="/GenerateImage" element={<GenerateImage/>}  />
      </Routes>

    </div>
  );
}

export default App;
