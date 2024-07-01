import React from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Payment from './components/Payment';
import Footer from './components/Footer';
import StepsContainer from './components/StepsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StepsContainer />
      <div className="container">
        <Summary />
        <Payment />
      </div>
      <Footer />
    </div>
  );
}

export default App;

