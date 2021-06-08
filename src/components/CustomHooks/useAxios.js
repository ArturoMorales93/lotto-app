/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url, initialState) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = () => {
        
        setLoading(true)        
        axios(url)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        data,
        loading,
        error
    }
}

export default useAxios