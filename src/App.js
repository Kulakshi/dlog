import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import StartForm from './pages/StartForm';
import Form from "./pages/Form";

function App() {
  return (
    <div className="App h-screen w-screen bg-blue-400 flex flex-col overflow-hidden">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartForm />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
