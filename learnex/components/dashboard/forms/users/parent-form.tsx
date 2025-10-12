"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import countries from "@/countries";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};
export type StudentProps = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};
export default function ParentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const relationships = [
    {
      label: "Mother",
      value: "Mother",
    },
    {
      label: "Father",
      value: "Father",
    },
    {
      label: "Guardian",
      value: "Guardian",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const [selectedRelationship, setSelectedRelationship] = useState<any>(
    relationships[1]
  );

  const titles = [
    {
      label: "Mr.",
      value: "Mr",
    },
    {
      label: "Mrs.",
      value: "Mrs",
    },
    {
      label: "Dr.",
      value: "Dr",
    },
  ];
  const [selectedTitle, setSelectedTitle] = useState<any>(null);

  const contactMethods = [
    {
      label: "Phone",
      value: "Phone",
    },
    {
      label: "Email",
      value: "Email",
    },
    {
      label: "Whatsapp",
      value: "Whatsapp",
    },
  ];
  const [selectedMethod, setSelectedMethod] = useState<any>(null);

  const streams = [
    {
      label: "Stream 1",
      value: "stream1",
    },
    {
      label: "Stream 2",
      value: "stream2",
    },
  ];
  const [selectedStream, setSelectedStream] = useState<any>(null);

  const genders = [
    {
      label: "MALE",
      value: "male",
    },
    {
      label: "FEMALE",
      value: "female",
    },
  ];
  const [selectedGender, setSelectedGender] = useState<any>(null);

  const religions = [
    {
      label: "Roman Catholic",
      value: "Catholic",
    },
    {
      label: "Anglican",
      value: "Anglican",
    },
    {
      label: "Islam",
      value: "Islam",
    },
  ];
  const [selectedReligion, setSelectedReligion] = useState<any>(null);

  const initialCountryCode = "IN";
  const initialCountry = countries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [selectedNationality, setSelectedNationality] =
    useState<any>(initialCountry);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);
      if (editingId) {
        //await updateCategoryById(editingId, data);
        //setLoading(false);
        // Toast
        //toast.success("Updated Successfully!");
        //reset
        //reset();
        //route
        //router.push("/dashboard/categories");
        //setImageUrl("/placeholder.svg");
      } else {
        //await createCategory(data);
        //setLoading(false);
        // Toast
        //toast.success("Successfully Created!");
        //reset
        //reset();
        //setImageUrl("/placeholder.svg");
        //route
        //router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <FormHeader
        href="/parents"
        parent="users"
        title="Parent"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Title"
                options={titles}
                option={selectedTitle}
                setOption={setSelectedTitle}
              />
              <TextInput
                register={register}
                errors={errors}
                label="First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
                name="lastName"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Relationship"
                options={relationships}
                option={selectedRelationship}
                setOption={setSelectedRelationship}
              />
              <TextInput
                register={register}
                errors={errors}
                label="National ID / Passport"
                name="NIN"
              />
              <FormSelectInput
                label="Gender"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
                isSearchable={false}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Phone"
                name="phone"
                type="tel"
              />
              <FormSelectInput
                label="Nationality"
                options={countries}
                option={selectedNationality}
                setOption={setSelectedNationality}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Whatsapp No"
                name="whatsappNo"
                type="tel"
              />
              <FormSelectInput
                    label="Contact Method"
                    options={contactMethods}
                    option={selectedMethod}
                    setOption={setSelectedMethod}
                  />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="">
                <div className="grid gap-3">
                  <PasswordInput
                    register={register}
                    errors={errors}
                    label="Parent Portal Password"
                    name="password"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Occupation"
                    name="occupation"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Address"
                    name="address"
                  />
                </div>
              </div>
              <div className="grid">
                <ImageInput
                  title="Parent Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="parentProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/parents"
        editingId={editingId}
        loading={loading}
        title="Parent"
        parent="users"
      />
    </form>
  );
}
