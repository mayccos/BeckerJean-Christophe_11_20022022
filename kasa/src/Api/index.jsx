import { useState, useEffect } from 'react'

export function GetAllDataHousing(url) {
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        if (!url) {
            return setDataLoading(true)
        }

        async function fetchData() {
            try {
                const response = await fetch(url)
                const { data } = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { isDataLoading, error, data }
}

export function GetDataHousingById(url, id) {
    const [isDataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        if (!url) {
            return setDataLoading(true)
        }

        async function fetchData() {
            try {
                const response = await fetch(url)
                const { data } = await response.json()
                setData(data)
            } catch (err) {
                window.location.pathname = '/error'
            } finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }, [url, id])
    return { isDataLoading, data }
}
