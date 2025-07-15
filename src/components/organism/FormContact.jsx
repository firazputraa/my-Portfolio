import InputField from "../molecules/InputField";
import TextareaField from "../molecules/TextareaField";
import Button from "../atoms/Button"; // Pastikan Button diimpor
import React, {useState} from "react";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pesan: ''
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('https://backend-portfolio-production-e8df.up.railway.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if(response.ok){
        setStatus('success');
        console.log('Message sent:', result.data);
        setFormData({name: '', email: '', pesan: ''}); // Reset form on success
      } else {
        setStatus('error');
        setError(result.message || 'An error occurred while sending the message.');
        console.error('Error from backend:', result);
      }
    } catch (error) {
      setStatus('error');
      setError('Failed to connect to the server. Please try again later.');
      console.error('Error when submitting the form:', error);
    }
  }

  return(
    <section id="contact" className="py-16 bg-sky-800"> {/* Section wrapper for padding and background */}
      <div className="max-w-xl mx-auto px-4"> {/* Centering and max width for the form container */}
        <form onSubmit={handleSubmit} className="bg-white/10 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-sky-700"> {/* Main form styling */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-8 text-center leading-tight">
            Your message means a lot to me
          </h2>

          <InputField
            id='name'
            label='Your Name'
            type="text"
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name..."
          />
          <InputField
            id='email'
            label='Your Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email..."
          />
          <TextareaField
            id='pesan'
            label='Your message'
            name='pesan' // Ensure 'name' prop is passed for TextareaField
            value={formData.pesan}
            onChange={handleChange}
            placeholder="Enter your Message for me..."
            rows={6}
          />

          {/* Status messages */}
          {status === 'loading' && (
            <p className="text-white text-center mt-4 text-lg font-medium animate-pulse">Sending message...</p>
          )}
          {status === 'success' && (
            <p className="text-green-400 text-center mt-4 text-lg font-medium">Message sent successfully! Thank you.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center mt-4 text-lg font-medium">{error}</p>
          )}

          <Button
            type="submit" // Set type="submit" for the button
            disabled={status === 'loading'} // Disable button when sending
            // Tailwind classes for the Button component
            styles="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition duration-300 ease-in-out mt-8 text-lg uppercase tracking-wider"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default FormContact;