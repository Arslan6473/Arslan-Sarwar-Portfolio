import { useState } from 'react';
import Reveal from './Reveal'

export default function Contactme() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState)
   
  };

  return (
    <div id="contactme" className="isolate bg-[#1c1c1c] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Contact Me</h2>
        </Reveal>
      </div>
      <Reveal>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-300">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#3aa370] placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3aa370] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-300">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#3aa370] placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3aa370] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#3aa370] placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3aa370] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#3aa370] placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3aa370] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#3fcf8e] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3aa370] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Let's talk
          </button>
        </div>
      </form>
      </Reveal>
    
    </div>
  );
}
