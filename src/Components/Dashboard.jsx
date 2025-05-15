import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
  // State variables
  const [tickets, setTickets] = useState([])
  const [discountPercentage, setDiscountPercentage] = useState('')
  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventImage, setEventImage] = useState(null)

  // Fetch all tickets
  const fetchTickets = async () => {
    try {
      // const response = await axios.get('https://finalbgmi-backend.onrender.com/api/tickets')
      setTickets(response.data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }

  // Delete a ticket
  const handleDeleteTicket = async (ticketId) => {
    try {
      await axios.delete(`/api/tickets/${ticketId}`)
      setTickets(tickets.filter(ticket => ticket._id !== ticketId))
    } catch (error) {
      console.error('Error deleting ticket:', error)
    }
  }

  // Update discount percentage
  const handleDiscountUpdate = async () => {
    try {
      await axios.post('/api/discount', { percentage: discountPercentage })
      alert('Discount updated successfully!')
    } catch (error) {
      console.error('Error updating discount:', error)
    }
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setEventImage(file)
    }
  }

  // Submit new event
  const handleEventSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('title', eventTitle)
      formData.append('description', eventDescription)
      formData.append('image', eventImage)

      await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      // Reset form
      setEventTitle('')
      setEventDescription('')
      setEventImage(null)
      alert('Event added successfully!')
    } catch (error) {
      console.error('Error adding event:', error)
    }
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ticket Information Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Ticket Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-black">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 text-left font-semibold">Date</th>
                  <th className="py-2 text-left font-semibold">Time</th>
                  <th className="py-2 text-left font-semibold">People</th>
                  <th className="py-2 text-left font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3">{new Date(ticket.date).toLocaleDateString()}</td>
                    <td className="py-3">{ticket.timeslot}</td>
                    <td className="py-3">{ticket.guest}</td>
                    <td className="py-3">${ticket.amount}.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {/* Update Discount Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Update Discount Offer</h2>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              placeholder="Discount offer"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-[#FAF9F6]"
            />
            <button
              onClick={handleDiscountUpdate}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Update
            </button>
          </div>
          {/* Upcoming Event Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Upcoming Event</h2>
            <div
              onClick={() => document.getElementById('eventImage').click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 mb-4"
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-2 text-black">Upload Image</p>
              </div>
              <input
                id="eventImage"
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <input
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Event details"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-[#FAF9F6] mb-4"
            />
            <button
              onClick={handleEventSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
