import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
        //Fetching data from a "false" database.
        useEffect(() => {
            const abortCont = new AbortController();

            fetch(url, { signal: abortCont.signal })
            .then(res => {
                //Tesing if the response we get is valid data or an error from the server.
                //If the data is not valid, throw an error.
                if(!res.ok) {
                    throw Error('Could not fetch the data from that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            //Catcing errors like the app can't connect to database.
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

            return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;