import React, { useState } from 'react';
import { loginUser } from '../services/parseConfig';

interface LoginProps {
  onLogin: (username: string) => void;
  onSwitch: () => void;
}

function Login({ onLogin, onSwitch }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (username && password) {
      try {
        await loginUser(username, password);
        onLogin(username);
      } catch (error: any) {
        setError(error.message || 'Login failed');
      }
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 border border-red-400/30 text-white placeholder-red-200/50 focus:outline-none focus:border-red-400"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 border border-red-400/30 text-white placeholder-red-200/50 focus:outline-none focus:border-red-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
        >
          Login
        </button>
      </form>
      <p className="text-white mt-4 text-center">
        Don't have an account?{' '}
        <button
          onClick={onSwitch}
          className="text-red-400 hover:text-red-300 underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default Login;