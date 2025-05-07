import React, { useState ,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


export const Github = () => {

    const data=useLoaderData()

  
    
  return (
   <>
    <div className='bg-yellow-100 text-2xl'>Github Followers:  {data.followers}</div>
    <img className='h-100 my-7 mx-auto' src={data.avatar_url} alt="img" />
   </>
  )
}

export const gitHubInfo =async () =>{
 const response =await fetch("https://api.github.com/users/StymRwt")
 return response.json()
}
