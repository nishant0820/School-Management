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
export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
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
  const initialImage = initialData?.imageUrl || "/placeholder.svg";
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
        href="/students"
        parent=""
        title="Student"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Category Title"
                name="title"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Category Title"
                name="title"
              />
            </div>
            <div className="grid gap-3">
              <TextArea
                register={register}
                errors={errors}
                label="Description"
                name="description"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            <ImageInput
              title="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/categories"
        editingId={editingId}
        loading={loading}
        title="Category"
        parent=""
      />
    </form>
  );
}
