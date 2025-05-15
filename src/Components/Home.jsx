import { div } from 'framer-motion/client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const Home = () => {
    // const [formData, setFormData] = useState({ username: '', pass: '' })
    // const [isSubmitted, setIsSubmitted] = useState(false)
    // const [FullName,setFullName]=useState()



    // const handleSubmit=(e)=>{
    //     e.prevenDefault()
    //     console.log("form sublitted:", fromData)
    //     setIsSubmitted(true)
    // }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://finalbgmi-backend.onrender.com/api/admin/login', formData);
            console.log('Form submitted:', response.data);
            // Handle successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // const handleChange=(e)=>{
    //     setFormData({...formData,[e.target.name]:e.target.value})
    // }
  return (
    <div>
    

    
        <div className="min-h-screen w-full bg-blue-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Battleground Gaming Zone</h1>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900">Login</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-10 px-3 py-2 border border-gray-300 bg-black rounded-md"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-10 px-3 py-2 border bg-black  border-gray-300 rounded-md"
                            placeholder="Password"
                            required
                        />
                        
                    </div>

                    <button id='subbm'
                        type="submit"
                        className="w-full h-10 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    </div>
  //  <div className="h-screen w-full bg-zinc-100 flex justify-center items-center">
  //   <div className='h-100 w-70 bg-blue-300 rounded-2xl'>
  //     <div id="hlg" className='h-10 w-20 flex justify-center items-center'>
  //       <h1>Login page</h1>
  //     </div>
  //     <form action="">
  //       <h1>Username:</h1>
  //       <input type="text" placeholder='username' className='border-2 border-amber-50 h-10' />
  //       <h1>password</h1>
  //       <input type="password"  placeholder='password' className='border-2 h-10'/>
  //       <input type="submit" placeholder='submit' className='border-2 w-50 h-10 ' />
  //     </form>

  //   </div>
  
    
  //  </div>
  )
}

export default Home
