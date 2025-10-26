"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeginYourDesignJourney() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full h-auto md:h-[106vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/design-journey.jpg"
          alt="Design Journey Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1220E6] via-[#0B1220B3] to-transparent"></div>
      </div>

      {/* Form Content */}
      <div className="relative z-10 text-white  px-6 md:px-16 max-w-2xl py-20">
        <h2 className="text-4xl md:text-5xl font-prata mb-3 leading-tight">
          Begin Your Design <br /> Journey Today
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-md font-lato">
          Explore ideas, estimate costs, and connect with the right
          professionals—all in one place.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm mb-2 text-gray-200  font-lato">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/40 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-200 font-lato">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/40 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-200 font-lato">
              Tell us what you&apos;re looking for
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your project, budget, or any design challenges you’re facing."
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-[#16243C] text-secondary rounded-full py-3 mt-2 text-lg transition-all cursor-pointer font-lato"
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}
