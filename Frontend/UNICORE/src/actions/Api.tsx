import axios, { AxiosResponse, AxiosError } from "axios";
const API_URL = "http://localhost:3000";

//Register

interface RegisterResponse {
    status: number;
    data?: any;
    response?: { data?: { error?: string } };
  }

  export const RegisterUser = async (
    fullName: string,
    email: string,
    password: string,
    
  ): Promise<RegisterResponse> => {
    try {
        console.log("entering the api in frontent")
      const response = await axios.post(`${API_URL}/auth/register`, {
        fullName,
        email,
        password,
        
      });
  
      return response; // Success response
    } catch (error: any) {
      return error; // Return error response
    }
  };

  //Login

  
interface LoginResponse {
    status: number;
    data?: any;
    response?: { data?: { error?: string } };
  }
  
  export const LoginUser = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
  
      return response; // Success response
    } catch (error: AxiosError | any) {
      return error; // Return error response
    }
  };