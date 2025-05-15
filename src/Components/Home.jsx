import React, { useState } from 'react'
import axios from 'axios'
import GamingConsole from './images/gamingConsole.svg'

const GameControllerIcon = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
    <rect x="5" y="10" width="70" height="40" rx="15" fill="#E5E7EB" stroke="#6B7280" strokeWidth="2"/>
    <rect x="18" y="27" width="8" height="3" rx="1.5" fill="#6B7280"/>
    <rect x="22" y="23" width="3" height="8" rx="1.5" fill="#6B7280"/>
    <circle cx="60" cy="30" r="3" fill="#6B7280"/>
    <circle cx="68" cy="25" r="2" fill="#6B7280"/>
    <circle cx="68" cy="35" r="2" fill="#6B7280"/>
  </svg>
)

const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 14a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V7a4 4 0 10-8 0v7m8 0H8" /></svg>
)

const LockIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m6-6V9a6 6 0 10-12 0v2m12 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2m12 0H6" /></svg>
)

const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);

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

    return (
      <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center mb-6">
          {/* <GameControllerIcon /> */}
          {/* {GamingConsole} */}
          <div>
            {/* {GamingConsole} */}
          </div>
          <h1 className="text-5xl font-extrabold text-gray-700 tracking-tight text-center leading-tight mb-2"> BATTLEGROUND <br/> GAMING<br />ZONE</h1>
        </div>
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 tracking-wide text-center">ADMIN PANEL</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <UserIcon /> */}
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Username"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <LockIcon /> */}
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <label className="flex items-center text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
                />
                Remember me
              </label> */}
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-blue-400 text-white font-bold text-lg rounded-md hover:bg-blue-500 transition duration-200 tracking-wide"
            >
              LOGIN
            </button>
          </form>
          <div className="w-full text-center mt-4">
            <a href="#" className="text-blue-400 hover:underline text-sm">Forgot password?</a>
          </div>
        </div>
      </div>
    )
}

export default Home
