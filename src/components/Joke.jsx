import React from 'react'
import { useQuery } from 'react-query';
import useFetch from '../hooks/useFetch';

export default function Joke() {


    //react query | instead of calling every single time, data will be saved in cache for better response time
    
    const {
        data: joke, 
        isLoading, 
        isError,
        error,
        isSuccess,
    } = useQuery('joke', fetchJokes, {
        staleTime: 5000,//staleTime is like a delay or how long cache will lasts
        refetchOnWindowFocus : true, //boolean true default, refresh data depends on setting
        retry: false,

    });

    function fetchJokes() {
        return fetch('https://official-joke-api.appspot.com/jokes/random').then(response => response.json());
    }



    //  //you alias variable
    //  const {data: jokes, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/jokes/random');


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
                {isSuccess && <h1>{joke.setup + " : " + joke.punchline}</h1>}
            </div>

            {isError && <div>{error.message}</div>}
        
        </>
    )
}
