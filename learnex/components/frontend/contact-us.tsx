"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/SubmitButton";
import { Send } from "lucide-react";
import TextArea from "../FormInputs/TextAreaInput";
import PhoneInput from "../FormInputs/PhoneInput";
import TextInput from "../FormInputs/TextInput";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl text-center font-semibold">
              Tell us about your institution and requirements
            </h3>
            <p className="text-muted-foreground text-sm text-center px-4 py-2 mb-4 max-w-xl mx-auto">Our team will reach you within 24 hours to schedule a personalized demo and discuss your specific needs</p>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Full Name"
                register={register}
                name="name"
                errors={errors}
                placeholder="John Doe"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="johndoe@gmail.com"
                />
                <PhoneInput
                  label="Phone"
                  register={register}
                  name="phone"
                  errors={errors}
                  placeholder="+1234567890"
                  toolTipText="Enter your phone number with country code"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Name"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="D.M.S.S.S."
                />
                <TextInput
                  label="Country"
                  register={register}
                  name="country"
                  errors={errors}
                  placeholder="India"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/Social Media Website"
                  register={register}
                  name="schoolPage"
                  errors={errors}
                  placeholder="https://www.google.com/"
                />
                <TextInput
                  label="No of Students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="100"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Your Role"
                  register={register}
                  name="role"
                  errors={errors}
                  placeholder="Principal"
                />
                <TextInput
                  label="Product Interest(Which features are you looking for?)"
                  register={register}
                  name="productInterest"
                  errors={errors}
                  placeholder="Premium"
                />
              </div>

              <TextArea
                label="Your Role"
                register={register}
                name="role"
                errors={errors}
              />
              <TextInput
                label="How did you hear about us?"
                register={register}
                name="referral"
                errors={errors}
                placeholder="Instagram"
              />

              <SubmitButton
                title="Submit"
                loading={isLoading}
                loadingTitle="Sending please wait..."
                buttonIcon={Send}
              />
            </form>
          </div>
        </div>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-xl">Contact to our team</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis
              of the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
