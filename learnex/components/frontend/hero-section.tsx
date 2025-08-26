import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import SmallTitle from './small-title';

export default function SiteHeader () {
  return (
  <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Welcome Badge */}
        <SmallTitle title='Welcome to LearneX' />

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Simplify Your School Management with LearneX
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          LearneX empowers schools to streamline their operations with precision and ease, all within a unified and intuitive platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="rounded-full h-12 px-6 text-base"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full h-12 px-6 text-base"
          >
            See features
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};