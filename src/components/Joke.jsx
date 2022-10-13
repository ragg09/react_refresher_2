import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

export default function Joke() {

     //you alias variable
     const {data: jokes, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/jokes/random');


    // //data holder
    // const [jokes, setJokes] = useState('');

    // //loading indicator
    // const [isLoading, setIsLoading] = useState(true);
 
    // //error handler
    // const [errorMessage, setErrorMessage] = useState(null);
 
    // //load onload
    // useEffect(()=>{
    //     fetch('https://official-joke-api.appspot.com/jokes/random')
    //     .then(response => response.json())
    //     .then(results => {
    //         console.log(results);
    //         setJokes(results.setup + " : " + results.punchline );
    //         setIsLoading(false)
    //     })
    //     .catch(error => {
    //         setIsLoading(false)
    //         setErrorMessage('Error Encounter')
    //     })
    // }, [])



    return (
        <>
            <div className='mb-5'>Fetch Reddit API</div>

            {isLoading && <p>Loading . . .</p>}

            <div className="mt-3">
                {jokes && <h1>{jokes.setup + " : " + jokes.punchline}</h1>}
            </div>

            {errorMessage && <div>{errorMessage}</div>}
        
        </>
    )
}
