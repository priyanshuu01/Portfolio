// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   return (
//     <form className="space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
//           <input
//             name="firstName"
//             value={form.firstName}
//             onChange={handleChange}
//             type="text"
//             className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
//             placeholder="John"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
//           <input
//             name="lastName"
//             value={form.lastName}
//             onChange={handleChange}
//             type="text"
//             className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
//             placeholder="Doe"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           type="email"
//           className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
//           placeholder="john@example.com"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           rows={4}
//           className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
//           placeholder="Tell me about your project..."
//         />
//       </div>
//       <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
//     </form>
//   )
// }


'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form className="max-w-2xl mx-auto bg-white/5 p-6 rounded-2xl shadow-lg space-y-6 border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-2 text-center">Send a Message</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            type="text"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Tell me about your project..."
        />
      </div>

      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base font-medium py-2 rounded-xl transition duration-200">
        Send Message
      </Button>
    </form>
  )
}
