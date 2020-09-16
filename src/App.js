import React from 'react';
// import './App.css';

// Components
import { Header } from './components/Header';
import { Button } from './components/Buttons';
// import SideNav from './components/Drawer';

function App() {
  return (
    <div className="App">
      <Header lname="Simic"/>
      {/* <SideNav /> */}
      <Button />
    </div>
  );
}

export default App;
