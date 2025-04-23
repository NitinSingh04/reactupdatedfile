import axios from 'axios'
import React from 'react'

async function Admin() {
  console.log(process.env.Backend_URL)
    await axios.post()
  return (
    <div className='h-screen w-full bg-zinc-200 flex justify-center items-center '>
        
        <div className='h-100 w-100 rounded-md bg-blue-600 p-10 m-10'>
            <div className='h-10 w-90 px-10 mx-10'>Login Page</div>
            <input type="text" className='' placeholder='Name'/>
            <input type="password" name="" id="" className='bg-amber-700 h-10 ' placeholder='password'/>
        </div>
      
    </div>
  )
}

export default Admin
