import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password email:', email);
    // Handle password reset logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/3 bg-blue-900 p-8 flex flex-col justify-between text-white text-center">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-2">UNICORE</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Forgot Password ?</h2>
          <p className="text-gray-300">          Enter your registered email address. We will send a code to reset your password.
</p>
         
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
          <h2 className="text-2xl font-bold text-center mb-6">Forgot password?</h2>
          

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
           
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Done
            </button>
            <div className="text-right">
              <a href="/login" className="text-blue-600 hover:underline text-sm">
                Back to Signin
              </a>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
