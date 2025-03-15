import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { LoginUser } from '../actions/Api';
// import 'react-toastify/dist/ReactToastify.css';


interface LoginData {
  email: string;
  password: string;
}

function SignIn() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


  const validateForm = (): boolean => {
    const { email, password } = loginData;
  
    if (!email || !password) {
      toast.error('Email and password are required');
      return false;
    }
  
    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return false;
    }
  
    // Check password length (since password correctness is checked on the server)
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }
  
    return true;
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const { email, password } = loginData;
      const response = await LoginUser(email, password);
      // if (response.status === 201) {
      //   dispatch(logIn(response.data));
      //   toast.success('Login successful!');
      //   if (response.data.user.isAdmin) {
      //     navigate('/admin');
      //   } else {
      //     navigate('/');
      //   }
      // } else {
      //   toast.error(response.response.data?.error || 'Login failed');
      //   navigate('/login');
      // }

      console.log(response)
      if(response.status === 200){
        toast.success('Login successful!');
        navigate('/home');
      }
      else {
        
        // toast.error(response.response.data?.error || 'Login failed');
        toast.error('Login failed');
         navigate('/login');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/3 bg-blue-900 p-8 flex flex-col justify-between text-white text-center">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-2">UNICORE</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">New to Unicore?</h2>
          <p className="text-gray-300">Create an account and explore the platform!</p>
          <button 
            className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-blue-900 transition-colors"
            onClick={() => navigate("/signup") }
          >
            Signup
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
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
          
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 mb-6">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                />
              </div>
            </div>
             {/* Forgot Password Link */}
             <div className="text-right">
              <a href="/forgot-password" className="text-blue-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
      Don't have an account?  
      <span 
        className="text-blue-600 hover:underline cursor-pointer" 
        onClick={() => navigate('/signup')}
      >
        {" "}Sign up
      </span>
    </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
