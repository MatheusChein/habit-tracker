import React from 'react';

import { Home } from './pages/Home'
import { HabitPage } from './pages/HabitPage'

import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/habitpage" component={HabitPage} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
