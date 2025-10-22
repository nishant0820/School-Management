"use client";

import * as React from 'react';
import { Search, Mail, Phone, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: "Getting started with Learnex",
        excerpt: "Learn how to set up your account and navigate the platform.",
        category: "Basics",
    },
    {
        id: 2,
        title: "Account Management",
        excerpt: "Learn how to manage your account settings and preferences.",
        category: "Account",
    },
    {
        id: 3,
        title: "Troubleshooting Common Issues",
        excerpt: "Find solutions to common problems users face.",
        category: "Support",
    }
];

const faqs = [
    {
        question: "How do I reset my password?",
        answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email.",
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support by emailing support@learnex.com.",
    }
];

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Help Articles</h2>
                <div className="relative mb-6">
                    <Search className='absolute left-3 top-1/2 transform-translate-y-1/2 text-muted-foreground h-4 w-4' />
                    <Input className='pl-10' placeholder='Seach articles...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <Link href="#" key={article.id}>
                            <Card className='hover:bg-muted/50 transition-colors'>
                                <CardHeader>
                                    <CardTitle className='text-lg'>{article.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mb-16 bg-blue-50 p-8 rounded-lg">
                <div className="text-center mb-8">
                    <h3 className="text-blue-500 font-medium mb-2">FREQUENTLY ASKED QUESTIONS</h3>
                    <h2 className="text-3xl font-bold">You ask? We <span className="italic">answer</span></h2>
                </div>
                <Accordion type="single" collapsible></Accordion>
            </section>
        </div>
    )
}