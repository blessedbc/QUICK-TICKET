const NewTicketPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
     <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200">
     <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
       Submit a Support Ticket
     </h1>
     <form className="space-y-4 text-gray-700">
      <input
      className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="text"
      name="subject"
      placeholder="Subject"
      required
      />
      <textarea
      className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      name="description"
      placeholder="Describe your issue"
      rows={4}
      required
      />
      <select 
      className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
      name="priority"
      defaultValue="Low"
      >
     <option value="Low">Low Priority</option>
     <option value="Medium">Medium Priority</option>
     <option value="High">High Priority</option>
      </select>
      <button 
      className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
      type="submit"
      >
        Submit
      </button>
     </form>
     </div>
    </div>
  )  
}

export default NewTicketPage;