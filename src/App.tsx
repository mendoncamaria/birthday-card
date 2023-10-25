// src/App.tsx
import React from 'react';
import './App.css';
import BirthdayCard from './components/card';

const App: React.FC = () => {
  return (
    <div className="App">
      <BirthdayCard />
    </div>
  );
};

export default App;
