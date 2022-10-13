import React, { useEffect, useState } from 'react'

export default function Reddit() {

    //data holder
    const [posts, setPosts] = useState([]);

    //loading indicator
    const [isLoading, setIsLoading] = useState(true);

    //error handler
    const [errorMessage, setErrorMessage] = useState(null);

    //load onload
    useEffect(()=>{
        fetch('https://www.reddit.com/r/aww.json')
        .then(response => response.json())
        .then(results => {
            console.log(results.data.children);
            setPosts(results.data.children);
            setIsLoading(false)
        })
        .catch(error => {
            setIsLoading(false)
            setErrorMessage('Error Encounter')
        })
    }, [])

    return (
        <>
            <div className='mb-5'>Fetch Reddit API</div>

            {isLoading && <p>Loading . . .</p>}

            <div className="mt-3">
                {posts && (
                    <ul>
                        {posts.map(post => (
                            <li key={post.data.id}>
                                <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank"
                                rel='noreferrer'
                                >{post.data.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {errorMessage && <div>{errorMessage}</div>}
        
        </>
    )
}