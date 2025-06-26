'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'contact@rahulyadav.dev',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-4"
        >
          ← Back
        </Link>
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">/Get in touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 hover:border-gray-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 hover:border-gray-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 hover:border-gray-300"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-6 py-3 rounded-md transition-colors ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
          <div className="p-15 pt-0">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/send-email.png"
                alt="Contact illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
