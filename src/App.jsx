import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Reddit from './components/Reddit';
import Joke from './components/Joke';

function App() {
    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);


  return (
    <div>
        <div className="buttons">
            <button 
                onClick={()=>setRedditVisible(prevRedditVisible => !redditVisible)}
            >
                Toggle Reddit
            </button>

            <button 
                onClick={()=>setJokeVisible(prevJokeVisible => !jokeVisible)}
            >
                Toggle Joke
            </button>
        </div>


        <div className="border mt-4">
            {redditVisible && (<Reddit/>)}

            {jokeVisible && (<Joke/>)}
        </div>

        

    </div>
  );
}

export default App;
