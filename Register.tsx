import React, { useState } from 'react';

interface RegisterProps {
  onRegister: (username: string) => void;
  onSwitch: () => void;
}

function Register({ onRegister, onSwitch }: RegisterProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password === confirmPassword) {
      onRegister(username);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 border border-red-400/30 text-white placeholder-red-200/50 focus:outline-none focus:border-red-400"
            placeholder="Choose a username"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 border border-red-400/30 text-white placeholder-red-200/50 focus:outline-none focus:border-red-400"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 border border-red-400/30 text-white placeholder-red-200/50 focus:outline-none focus:border-red-400"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
      <p className="text-white mt-4 text-center">
        Already have an account?{' '}
        <button
          onClick={onSwitch}
          className="text-red-400 hover:text-red-300 underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;