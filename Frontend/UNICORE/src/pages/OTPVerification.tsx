import React, { useState, useEffect } from "react";

function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30); // 1-second timer
  const [resendAvailable, setResendAvailable] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(interval);
    } else {
      setResendAvailable(true); // Show "Resend OTP" when timer reaches 0
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // Add OTP verification logic here
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]); // Clear OTP
    setTimer(30); // Reset Timer to 1 second
    setResendAvailable(false);
    console.log("Resend OTP Triggered");
    // Add logic to request a new OTP
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/3 bg-blue-900 p-8 flex flex-col justify-between text-white text-center">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-2">UNICORE</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">OTP Verification</h2>
          <p className="text-gray-300">
            We have sent a 6-digit verification code to your registered email.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400"
            alt="Verification"
            className="rounded-lg opacity-50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-gray-100 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center space-x-3">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ))}
            </div>

            {/* Timer and Resend OTP */}
            {resendAvailable ? (
              <button
                type="button"
                onClick={handleResend}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Resend OTP
              </button>
            ) : (
              <p className="text-center text-gray-600">Resend OTP in {timer}s</p>
            )}

            {/* Hide "Done" button when Resend OTP is available */}
            {!resendAvailable && (
              <button
                type="submit"
                disabled={otp.some((digit) => digit === "")}
                className={`w-full px-4 py-2 rounded-md transition-colors ${
                  otp.some((digit) => digit === "")
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 text-white hover:bg-indigo-600"
                }`}
              >
                Done
              </button>
            )}

            <div className="text-right">
              <a href="/forgot-password" className="text-blue-600 hover:underline text-sm">
                Back to Forgot Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
