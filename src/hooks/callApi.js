import { useState, useEffect } from 'react';
import axios from 'axios';
export default function callApi(url) {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
   const fetchData=async(url)=>{
    try {
        const response = await axios.get(url)
        console.log('response fetching data : ', response);
        
        setData(response.data)
    } catch (error) {
        console.error('Error fetching data : ', error)
    }
   }
    fetchData(url)
     
},[])

return { data, loading, error };
}
