import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../actions/Api';
import { toast } from 'react-hot-toast';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = (formData: FormData) => {
    const { fullName, email, password, confirmPassword } = formData;
  
  
    if (!fullName.trim()) {
      return 'Full Name is required';
    }
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      return 'Full Name should only contain letters and spaces';
    }
    if (fullName.trim().length < 3) {
      return 'Full Name must be at least 3 characters long';
    }
  
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (password.trim().length === 0) {
      return 'Password cannot consist only of spaces';
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
  
    // Confirm Password Validation
    if (!confirmPassword) {
      return 'Confirm Password is required';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
  
    return ''; // No errors
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
     toast.error(validationError);
     return;
    }
    try {
      const res = await RegisterUser(
        formData.fullName,
        formData.email,
        formData.password,
       
      );
      if(res.status === 201) {
        toast.success('Registration successful!');
        navigate('/login')
      } else { 
        // toast.error(res.response.data?.error || 'Registration failed');
        toast.error( 'Registration failed');
        console.log(res)
              
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');

    }
    // TODO: Add your registration API call here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex items-center justify-center h-screen bg-gray-100"></div>
      <div className="w-1/3 bg-blue-900 p-8 flex flex-col justify-between text-white text-center">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-2">UNICORE</h1>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Already have an account?</h2>
          <p className="text-gray-300">Login and make new experience with this web application!</p>
          <button 
            className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-900 transition-colors"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400"
            alt="Person working"
            className="rounded-lg opacity-50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-gray-100 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to Signup page</h2>
          
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 mb-6">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;