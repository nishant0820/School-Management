"use client";

import * as React from "react";
import { ChevronLeft, GraduationCap, Users, Search, Plus, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ClassItem {
    id:number
    name:string
    sections:number
    totalStudents:number
}

interface Section {
    name: string
    students: number
    classTeacher: string
}

interface SectionsData {
    [key: number]: Section[]
}

const classes: ClassItem[] = [
    { id: 1, name: "Class 5", sections: 3, totalStudents: 120 },
    { id: 2, name: "Class 6", sections: 2, totalStudents: 80 },
    { id: 3, name: "Class 7", sections: 4, totalStudents: 160 },
    { id: 4, name: "Class 8", sections: 3, totalStudents: 115 },
    { id: 5, name: "Class 9", sections: 2, totalStudents: 75 },
]

const sections: SectionsData = {
    1: [
        { name: "5A", students: 40, classTeacher: "Mr. John Doe" },
        { name: "5B", students: 38, classTeacher: "Ms. Jane Smith" },
        { name: "5C", students: 42, classTeacher: "Mr. Richard Roe" },
    ],
}

export default function ClassListing() {
    const [selectedClass, setSelectedClass] = React.useState<number>(1)

    return (
        <div className="grid lg:grid-cols-[280px_1fr] h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] gap-2 p-4 pt-2">
            {/* Left Sidebar */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 px-4 py-2">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6" />
                        <h2 className="text-xl font-semibold">Classes</h2>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <Input type="search" placeholder="Search classes..." className="h-9" />
                </div>
                <ScrollArea className="flex-1">
                    <div className="px-2 space-y-3">
                        {classes.map((classItem) => (
                            <button key={classItem.id} onClick={() => setSelectedClass(classItem.id)} className={cn("flex flex-col w-full items-start gap-1 rounded-lg px-3 py-2 text-left text-sm transition-colors", selectedClass === classItem.id ? "bg-accent text-accent-foreground" : "hover:bg-muted text-muted-foreground")}>
                                <div className="flex w-full items-center justify-between">
                                    <span className="font-medium">{classItem.name}</span>
                                    <span className="text-xs">{classItem.sections}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Users className="h-3 w-3" />
                                    {classItem.totalStudents} Students
                                </div>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-2 rounded-lg border bg-card">
                <div className="flex items-center gap-2 px-4 py-2 border-b">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Go Back</span>
                    </Button>
                    <div>
                        <h2 className="text-lg font-semibold">
                            {classes.find((c) => c.id === selectedClass)?.name}
                        </h2>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>Classes</span>
                            <span>/</span>
                            <span>{classes.find((c) => c.id === selectedClass)?.name}</span>
                        </div>
                        <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">Add Class</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add Class</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </div>
                </div>
                <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sections[selectedClass]?.map((section) => (
                        <Card key={section.name}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{section.name}</CardTitle>
                                <CardDescription>Class Teacher: {section.classTeacher}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    {section.students} students
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}