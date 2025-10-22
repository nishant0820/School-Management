"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, FolderPlus, Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Button } from "@/components/ui/button";

export type ClassProps = {
  name: string;
};

export default function StreamForm({
  userId,
  initialContent,
  editingId,
}: {
  userId?: string;
  initialContent?: string;
  editingId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClassProps>({
    defaultValues: {
      name: initialContent || "",
    },
  });

  const [loading, setloading] = useState(false);

  async function saveFolder(data: ClassProps) {
    //data.userId = userId || "";
    try {
      setloading(true);
      if (editingId) {
        //await updateFolderById(editingId, data);
        //setloading(false);
        //toast.success("Updated Successfully");
      } else {
        //await createFolder(data);
        //setloading(false);
        //toast.success("Created Successfully");
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <div className="py-1">
        <Dialog>
          <DialogTrigger asChild>
            {editingId ? (
              <button title="Edit Class" className="text-blue-600">
                <Pencil className="w-4 h-4" />
              </button>
            ) : (
              <Button variant="outline" size="sm" className="h-8">
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            )}
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Stream" : "Add New Stream"}
              </DialogTitle>
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveFolder)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label=""
                      name="name"
                      icon={Check}
                    />
                  </div>
                </div>
                <div className="py-3">
                  <SubmitButton
                    title={editingId ? "Update" : "Add"}
                    loading={loading}
                  />
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
