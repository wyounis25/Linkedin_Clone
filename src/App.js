import './App.css'
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Post/>
      </div>
    </div>
  );
}

export default App;
