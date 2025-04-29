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
      const response = await axios.get('https://finalbgmi-backend.onrender.com/api/tickets')
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
    <div className="min-h-screen bg-zinc-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-600">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ticket Information Section */}
        <div className="bg-gray-600 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 ">Ticket Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Date</th>
                  <th className="py-2 text-left">Time</th>
                  <th className="py-2 text-left">People</th>
                  <th className="py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket._id} className="border-b hover:bg-gray-50">
                    <td className="py-3">{new Date(ticket.date).toLocaleDateString()}</td>
                    <td className="py-3">{ticket.timeslot}</td>
                    <td className="py-3">{ticket.guest}</td>
                    <td className="py-3">₹{ticket.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          {/* Update Discount Section */}
          <div className="bg-gray-600 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Update Discount Offer</h2>
            <div className="space-y-4">
              <input
                type="number"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                placeholder="Discount offer"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleDiscountUpdate}
                className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Update
              </button>
            </div>
          </div>

          {/* Upcoming Event Section */}
          <div id="upcoming-event-section" className="bg-gray-600 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Event</h2>
            <div className="space-y-4">
              <div
                onClick={() => document.getElementById('eventImage').click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400"
              >
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2">Upload Image</p>
                </div>
                <input
                  id="eventImage"
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Event details"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              />
              <button
                onClick={handleEventSubmit}
                className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
