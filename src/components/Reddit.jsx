import React, {  } from 'react'
import { useQuery } from 'react-query'
import useFetch from '../hooks/useFetch'

export default function Reddit() {

     //react query | instead of calling every single time, data will be saved in cache for better response time
     const {
        data: posts, 
        isLoading, 
        isError,
        error,
        isSuccess,
    } = useQuery('posts', fetchPosts,{
        retry: false,
    });

    function fetchPosts() {
        return fetch('https://wwxw.reddit.com/r/aww.json').then(response => response.json());
    }



    // //custom hook
    // //you alias variable
    // const {
    //     data: posts, 
    //     isLoading, 
    //     errorMessage
    // } = useFetch('https://www.reddit.com/r/aww.json');

    // //data holder
    // const [posts, setPosts] = useState([]);

    // //loading indicator
    // const [isLoading, setIsLoading] = useState(true);

    // //error handler
    // const [errorMessage, setErrorMessage] = useState(null);

    // //load onload
    // useEffect(()=>{
    //     fetch('https://www.reddit.com/r/aww.json')
    //     .then(response => response.json())
    //     .then(results => {
    //         console.log(results.data.children);
    //         setPosts(results.data.children);
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
                {isSuccess && (
                    <ul>
                        {posts.data.children.map(post => (
                            <li key={post.data.id}>
                                <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank"
                                rel='noreferrer'
                                >{post.data.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {isError && <div>{error.message}</div>}
        
        </>
    )
}
