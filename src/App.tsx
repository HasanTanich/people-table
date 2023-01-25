import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
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
      <Header onChangeTitle={onChangeTitle}/>
      <div className="content">
        <h1 className="title">
          {title}
        </h1>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route index element={<Homepage />}/>
          <Route path='people' element={<PeoplePage/>}>
            <Route path=':slug' element={<PeoplePage />}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
