import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GithubeWithLoader() {

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Githube Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default GithubeWithLoader

export const githubeInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
