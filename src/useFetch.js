import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data,  setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortcont = new AbortController()
        setTimeout(() => {
            fetch(url, { signal: abortcont.signal })
            .then(res => { 
                if(!res.ok){
                    throw("Couldn't fetch the data")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setisPending(false)
                setError(null) 
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("aborted fetch")
                }
                else{
                    setError(err.message) 
                    setisPending(false)
                }
                
            })
        }, 0)
        return () => {
            abortcont.abort()
        }
    }, [url])

    return {data, isPending, error}
}

export default useFetch;
