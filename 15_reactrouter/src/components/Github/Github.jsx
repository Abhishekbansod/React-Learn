import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // first way
    // fetching the data using useEffect hook from github API
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Abhishekbansod`).then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data);
            
    //         setData(data)
    //     })
    // }, [])


    // second way to fetch data
    const data  = useLoaderData()

    return (
        <div className='bg-gray-700 p-5 text-white font-semibold text-2xl 
    text-center flex gap-2 justify-evenly'>
            <img src={data.avatar_url} width="300px" alt="image" className='rounded-full' />
            <div className='flex flex-col items-start gap-8'>
                <h1>UserName : {data.name} </h1>
                <h1>UserId : {data.id} </h1>
                <h1>Position : {data.bio} </h1>
                <h1>Company : {data.company} </h1>
                <h1>Location : {data.location} </h1>
            </div>

        </div>
    )
}

// second way to fetch the data in react-router-dom
// below method will return the json data to useLoaderData() hook
export async function getGithubData(){
    let response = await fetch(`https://api.github.com/users/Abhishekbansod`)
    return response.json()
}



export default Github
