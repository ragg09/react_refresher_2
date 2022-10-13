import { useEffect, useState } from "react";

function useFetch(url) {
    //data holder
    const [data, setData] = useState(null);

    //loading indicator
    const [isLoading, setIsLoading] = useState(true);

    //error handler
    const [errorMessage, setErrorMessage] = useState(null);

    //load onload
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(results => {
            setIsLoading(false)
            setData(results);
        })
        .catch(error => {
            setIsLoading(false)
            setErrorMessage('Error Encounter')
        })
    }, [url])


    return {data, isLoading, errorMessage }
}

export default useFetch