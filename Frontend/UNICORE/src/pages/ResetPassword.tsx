import React, { useState } from "react";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("New password set:", newPassword);
    // Handle password update logic (API call, etc.)
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/3 bg-blue-900 p-8 flex flex-col justify-between text-white text-center">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-2">UNICORE</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Set New Password</h2>
          <p className="text-gray-300">
            Enter a new password to reset your account credentials.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400"
            alt="Security"
            className="rounded-lg opacity-50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-gray-100 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-md transition-colors ${
                newPassword && confirmPassword
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!newPassword || !confirmPassword}
            >
              Update Password
            </button>

            <div className="text-right">
              <a href="/signin" className="text-blue-600 hover:underline text-sm">
                Back to Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
