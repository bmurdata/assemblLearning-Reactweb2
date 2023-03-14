import './App.css';
import {useState} from 'react'
import FlashCard from './components/FlashCard';
import CardDisplay from './components/CardDisplay';
import CardForm from './components/CardForm';
const App = () => {
  
  return (
    <div className="App">
          <div className="header">
            <h1>Assembly Instruction Learner</h1>            
          </div>

        <div className='container'>
          <CardForm />
        </div>
    </div>
  )
}

export default App