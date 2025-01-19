"use client";

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate an API call for newsletter subscription
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Failed to subscribe:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
      <p className="text-gray-300 mb-4">
        Stay updated with our latest developments and healthcare insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-novitrail-orange"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-novitrail-orange text-white py-2 px-4 rounded hover:bg-novitrail-orange/90 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
