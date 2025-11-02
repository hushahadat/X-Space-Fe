"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import StepRenderer from "./StepRenderer";
import steps from "./steps.json";

export default function OnboardingModal({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  //   const [isOpen, setIsOpen] = useState(false);
  const methods = useForm({ mode: "onBlur" });

  const step = steps[stepIndex];
  const totalSteps = steps.length;

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (!isValid) return;
    if (stepIndex < totalSteps - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrev = () => stepIndex > 0 && setStepIndex(stepIndex - 1);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center min-h-screen justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-xl p-6 md:p-10 w-[90%] max-w-4xl  shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 245, 242, 0.95) 0%, rgba(243, 206, 198, 0.95) 60%, rgba(237, 190, 180, 0.95) 100%)",
                backdropFilter: "blur(60px)",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                <div
                  className="bg-[#D47A70] h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((stepIndex + 1) / totalSteps) * 100}%`,
                  }}
                />
              </div>

              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(() => alert("Form submitted"))}
                >
                  <StepRenderer step={step} />

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={stepIndex === 0}
                      className="text-gray-600 hover:text-black disabled:opacity-50 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#D47A70] text-white px-6 py-2 rounded-full hover:bg-opacity-90 cursor-pointer"
                    >
                      {stepIndex === totalSteps - 1 ? "Finish" : stepIndex === 0 ? 'Get Started' : "Next"}
                    </button>
                  </div>
                </form>
              </FormProvider>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
