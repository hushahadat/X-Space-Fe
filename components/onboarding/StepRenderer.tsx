/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";

export default function StepRenderer({ step }: any) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch(step.name);
  const [selected, setSelected] = useState(selectedValue);
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  /** -------------------------------
   *  STEP TYPE: INTRO / SUCCESS
   *  ------------------------------- */
  if (step.type === "intro" || step.type === "success") {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-prata mb-3 text-gray-900">{step.title}</h2>
        <p className="text-gray-600 font-lato text-l">{step.description}</p>
        {step.image && (
          <div className="relative w-full aspect-video md:aspect-21/9 mt-6">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    );
  }

  /** -------------------------------
   *  STEP TYPE: IMAGE SELECT (Scrollable)
   *  ------------------------------- */
  if (step.type === "imageSelect") {
    return (
      <div className="flex flex-col max-h-[70vh] md:max-h-[75vh]">
        <h2 className="text-2xl md:text-3xl font-prata mb-4 flex-shrink-0">
          {step.title}
        </h2>

        {/* Scrollable content area */}
        <div className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent flex-1">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {step.options.map((option: any, idx: number) => (
              <div
                key={idx}
                className={clsx(
                  "rounded-xl overflow-hidden border-2 cursor-pointer transition-all hover:scale-105",
                  selected === option.label
                    ? "border-[#D47A70]"
                    : "border-transparent"
                )}
                onClick={() => {
                  setSelected(option.label);
                  setValue(step.name, option.label);
                }}
              >
                <div className="relative h-28 md:h-40 w-full">
                  <Image
                    src={option.image}
                    alt={option.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className={clsx(
                    "text-center py-2 text-sm md:text-base font-lato",
                    selected === option.label
                      ? "text-[#D47A70] font-semibold"
                      : "text-gray-700"
                  )}
                >
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {errors[step.name] && (
          <p className="text-red-500 text-sm mt-2 flex-shrink-0">
            Please select one option
          </p>
        )}
      </div>
    );
  }

  /** -------------------------------
   *  NEW STEP TYPE: NESTED RADIO
   *  ------------------------------- */
  if (step.type === "nestedRadio") {
    return (
      <div className="mb-4 text-primary">
        <h2 className="text-2xl md:text-3xl font-prata mb-4">{step.title}</h2>
        {step.description && (
          <p className="text-primary mb-6">{step.description}</p>
        )}

        <div className="space-y-4">
          {step.options.map((main: any) => (
            <div
              key={main.value}
              className={clsx(
                "border rounded-lg p-4 transition-all",
                selectedMain === main.value
                  ? "border-[#D47A70] bg-[#fff8f8]"
                  : "border-gray-300 hover:border-gray-400"
              )}
            >
              {/* Main Radio */}
              <label className="flex items-center space-x-2 cursor-pointer text-primary">
                <input
                  type="radio"
                  {...register(step.name, { required: true })}
                  value={main.value}
                  checked={selectedMain === main.value}
                  onChange={() => {
                    setSelectedMain(main.value);
                    setSelectedSub(null);
                    setInputValue("");
                    setValue(step.name, main.value);
                  }}
                />
                <span className="font-lato">{main.label}</span>
              </label>

              {/* Sub Options  */}
              {selectedMain === main.value && main.subOptions && (
                <div className="pl-6 mt-3 space-y-2">
                  {main.subOptions.map((sub: any) => (
                    <div key={sub.value}>
                      <label className="flex items-center space-x-2 cursor-pointer ">
                        <input
                          type="radio"
                          {...register(`${step.name}_sub`, { required: true })}
                          value={sub.value}
                          checked={selectedSub === sub.value}
                          onChange={() => {
                            setSelectedSub(sub.value);
                            setValue(`${step.name}_sub`, sub.value);
                          }}
                        />
                        <span className="font-lato">{sub.label}</span>
                      </label>

                      {/* Input field for sub-option */}
                      {selectedSub === sub.value && sub.inputField && (
                        <div className="mt-2">
                          <label className="block text-sm mb-1">
                            {sub.inputField.label}
                          </label>
                          <input
                            type="text"
                            placeholder={sub.inputField.placeholder}
                            {...register(`${step.name}_size`, {
                              required: true,
                            })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#D47A70]"
                            value={inputValue}
                            onChange={(e) => {
                              setInputValue(e.target.value);
                              setValue(`${step.name}_size`, e.target.value);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Input  */}
              {selectedMain === main.value &&
                !main.subOptions &&
                main.inputField && (
                  <div className="pl-6 mt-3">
                    <label className="block text-sm mb-1 text-primary">
                      {main.inputField.label}
                    </label>
                    <input
                      type="text"
                      placeholder={main.inputField.placeholder}
                      {...register(`${step.name}_size`, { required: true })}
                      className="w-full border text-primary border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#D47A70]"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setValue(`${step.name}_size`, e.target.value);
                      }}
                    />
                  </div>
                )}
            </div>
          ))}
        </div>

        {errors[step.name] && (
          <p className="text-red-500 text-sm mt-2">Please select one</p>
        )}
      </div>
    );
  }

  /** -------------------------------
   *  DEFAULT: TEXT, EMAIL, RADIO, TEXTAREA
   *  ------------------------------- */
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-prata mb-4 text-primary">
        {step.title}
      </h2>
      {step.description && (
        <p className="text-primary mb-6">{step.description}</p>
      )}
      {step.fields?.map((field: any) => {
        switch (field.type) {
          case "text":
          case "email":
            return (
              <div key={field.name} className="mb-4">
                <label className="block text-sm mb-1 text-primary">
                  {field.label}
                </label>
                <input
                  {...register(field.name, { required: field.required })}
                  type={field.type}
                  className="w-full border border-gray-400 rounded-md  p-2 focus:ring-2 focus:ring-[#D47A70]"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">Required</p>
                )}
              </div>
            );
          case "radio":
            return (
              <div key={field.name} className="mb-4">
                {field.options.map((option: string) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 mb-1"
                  >
                    <input
                      {...register(field.name, { required: field.required })}
                      type="radio"
                      value={option}
                    />
                    <span className="text-primary">{option}</span>
                  </label>
                ))}
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">Select one</p>
                )}
              </div>
            );
          case "textarea":
            return (
              <div key={field.name} className="mb-4">
                <label className="block text-sm mb-1 text-primary">
                  {field.label}
                </label>
                <textarea
                  {...register(field.name)}
                  rows={3}
                  className="w-full border border-gray-400 rounded-md p-2"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
