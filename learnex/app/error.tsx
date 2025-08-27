"use client"

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardContent className="text-center pt-12 pb-8 px-8">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            500 - Internal Server Error
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Something went wrong on our end. We're working to fix the issue. Please try again later.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleRefresh}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            
            <Link href="/">
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>

        <CardFooter className="bg-gray-50 text-center py-4 rounded-b-lg">
          <p className="text-sm text-gray-500 w-full">
            © {new Date().getFullYear()} LearneX. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};