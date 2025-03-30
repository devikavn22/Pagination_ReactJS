import { useEffect, useState } from "react"

export const useFetch=(API_URL)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        const fetchData=async()=>{
            try{
                setLoading(true);
                const response=await fetch(API_URL);
                const results=await response.json();
                setData(results.products);
            }
            catch(err){
                setError("Failed To fetch data.. , Please Try Again");
                console.error(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[API_URL]);

    return {data,loading,error};

}