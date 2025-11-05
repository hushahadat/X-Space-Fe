"use client";

import { useForm } from "react-hook-form";

export default function AskExpertsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/images/ask-experts-bg.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60 backdrop-blur-sm"></div>

      {/* Glass Form Box */}
      <div className="relative z-10 w-full max-w-xl mx-4 mt-22 mb-16">
        {/* Header Inside Box */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-prata mb-3 ">
            Ask the Experts
          </h1>
          <p className="text-secondary text-base md:text-lg font-light leading-relaxed font-lato">
            From full makeovers to simple design advice, our experts are here to
            guide you at every step.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-xl mx-4 my-16 bg-white/15 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl px-8 py-10 md:px-12 md:py-12 text-white ">
          {/* Subheader */}
          <h3 className="text-xl md:text-4xl text-center font-prata text-white">
            Your Vision, Our Expertise
          </h3>

          <div className="border-t border-gray-200 my-6"></div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 text-gray-100"
          >
            {/* Full Name */}
            <div>
              <input
                {...register("fullName", { required: true })}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white focus:outline-none  focus:ring-[#2F29234D] focus:bg-[#2F29234D]"
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">
                  Full name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white focus:outline-none  focus:ring-[#2F29234D] focus:bg-[#2F29234D]"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">Email is required</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                {...register("phone", { required: true })}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white focus:outline-none  focus:ring-[#2F29234D] focus:bg-[#2F29234D]"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  Phone number is required
                </p>
              )}
            </div>

            {/* Preferred Call Time */}
            <div>
              <select
                {...register("callTime", { required: true })}
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">Select preferred call time</option>
                <option value="Morning">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening">Evening (4 PM - 8 PM)</option>
              </select>
              {errors.callTime && (
                <p className="text-red-400 text-sm mt-1">Select a call time</p>
              )}
            </div>

            {/* I am looking for */}
            <div>
              <label className="block mb-2 text-sm text-white font-lato">
                I am looking for
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Home Design",
                  "Layout Planning",
                  "Design Ideas",
                  "Material Advice",
                  "Cost Guidance",
                  "Furniture & Decor",
                  "Modular Kitchen",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-sm bg-white/20 px-3 py-2 rounded-full cursor-pointer hover:bg-white/30 transition"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      {...register("services")}
                      className="accent-white"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Describe your project, budget, or any design challenges you’re facing."
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#0A1630] text-white py-3 rounded-full font-lato hover:bg-[#142850] transition-all duration-300 shadow-lg"
            >
              Start Your Design Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
