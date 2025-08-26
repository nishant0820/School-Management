import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionHeader from "./section-header";
import Image from "next/image";
import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Student Information Management",
    description: "Easily manage student records, grades, and attendance.",
    icon: Users,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Academic Excellence Suite",
    description:
      "Comprehensive tools and resources to enhance student learning outcomes.",
    icon: GraduationCap,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Smart Communication Hub",
    description:
      "Streamline communication between teachers, students, and parents.",
    icon: MessageSquare,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Financial Management Center",
    description:
      "Comprehensive tools for managing school finances, including budgeting, invoicing, and reporting.",
    icon: DollarSign,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Staff & HR Management",
    description:
      "Comprehensive tools for managing staff records, payroll, and performance evaluations.",
    icon: ClipboardList,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Transport & Safety Control",
    description:
      "Comprehensive tools for managing student transportation, safety protocols, and emergency response.",
    icon: Bus,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Resource & Faculty Manager",
    description:
      "Efficiently manage school resources, including library materials, laboratory equipment, and faculty assignments.",
    icon: BookOpen,
    image: "/images/placeholder.jpg",
  },
];

export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <SectionHeader
            title="Features"
            heading="All-in-One School Management Platform"
            description="Manage your school with ease and efficiency."
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[0].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[0].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[0].image}
                  width={600}
                  height={400}
                  alt={features[0].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[1].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[1].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[1].image}
                  width={600}
                  height={400}
                  alt={features[1].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[2].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[2].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[2].image}
                  width={600}
                  height={400}
                  alt={features[2].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[3].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[3].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[3].image}
                  width={600}
                  height={400}
                  alt={features[3].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[4].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[4].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[4].image}
                  width={600}
                  height={400}
                  alt={features[4].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[5].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[5].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[5].image}
                  width={600}
                  height={400}
                  alt={features[5].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{features[6].title}</CardTitle>
                <p className="text-muted-foreground">
                  {features[6].description}
                </p>
              </CardHeader>
              <CardContent className="">
                <Image
                  src={features[6].image}
                  width={600}
                  height={400}
                  alt={features[6].title}
                  className="rounded w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
