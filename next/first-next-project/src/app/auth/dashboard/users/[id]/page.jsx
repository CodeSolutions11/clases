import React from 'react'
import axios from 'axios'
import Button from '@/components/button'

const loadUser = async user_id =>{
    const {data} = await axios.get(`http://localhost:3000/api/users/${user_id}`)

    return data
}

const UserPage = async ({params}) => {

    console.log(params.id)

    const user = await loadUser(params.id)

    console.log(user)

  return (
    <div>
        <h1>{user.name}</h1>
        <Button user_id={params.id}/>
    </div>
  )
}

export default UserPage