import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import PeoplePage from './pages/People/PeoplePage/PeoplePage';

function App() {
  const [title, setTitle] = useState('Home Page');
  const onChangeTitle = (t : string) =>{
    setTitle(t);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header onChangeTitle={onChangeTitle}/>
        <div className="content">
          <h1 className="title">
            {title}
          </h1>
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/people' element={<PeoplePage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
