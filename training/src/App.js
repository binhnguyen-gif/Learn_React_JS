import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import Welcome from './components/Welcome'
// import Welcome from './Welcome'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Navbar home="Trang chủ" plan="Danh mục" about="Server" />
      <Content />
    </div>
  );
}

export default App;
