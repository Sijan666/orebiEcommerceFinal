import React from 'react';

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col pointer-events-none">
      {/* Top Navigation Bar Skeleton */}
      <div className="w-full h-20 border-b border-gray-100 flex items-center justify-between px-10">
        {/* Logo Placeholder */}
        <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
        
        {/* Menu Links Placeholder */}
        <div className="hidden md:flex space-x-8">
          <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        {/* Empty space for balance */}
        <div className="w-24"></div>
      </div>

      {/* Secondary Bar (Search & Categories) Skeleton */}
      <div className="w-full h-24 border-b border-gray-100 flex items-center justify-between px-10 bg-[#F5F5F3]">
        {/* Shop by Category Placeholder */}
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Search Bar Placeholder */}
        <div className="w-1/3 h-12 bg-white rounded-md animate-pulse"></div>

        {/* Account & Cart Icons Placeholder */}
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-16">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="w-3/4 h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-2/3 h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse mt-4"></div>
          <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>
          
          {/* Button Placeholder */}
          <div className="w-40 h-12 bg-gray-800 rounded animate-pulse mt-8"></div>
        </div>

        {/* Right Side: Image/Composition Placeholder */}
        <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center relative mt-10 md:mt-0">
          <div className="absolute w-3/4 h-full bg-gray-100 rounded-lg animate-pulse transform rotate-3"></div>
          <div className="absolute w-1/2 h-3/4 bg-gray-200 rounded-lg animate-pulse transform -rotate-2"></div>
        </div>
      </div>

      {/* Bottom Features Banner Skeleton */}
      <div className="w-full border-t border-gray-100 py-8 px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Feature 1 */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-28 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;