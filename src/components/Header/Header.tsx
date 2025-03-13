import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { HomeIcon, ProjectsIcon, BlogIcon, AboutIcon } from './Icons';

interface HeaderProps {
  currentPage?: 'home' | 'projects' | 'blog' | 'about';
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  return (
    <header className="w-full py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Cursor MPC
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="/" 
            className={`flex items-center space-x-1 ${
              currentPage === 'home' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </a>
          
          <a 
            href="/projects" 
            className={`flex items-center space-x-1 ${
              currentPage === 'projects' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <ProjectsIcon className="w-4 h-4" />
            <span>Projects</span>
          </a>
          
          <a 
            href="/blog" 
            className={`flex items-center space-x-1 ${
              currentPage === 'blog' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <BlogIcon className="w-4 h-4" />
            <span>Blog</span>
          </a>
          
          <a 
            href="/about" 
            className={`flex items-center space-x-1 ${
              currentPage === 'about' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            <AboutIcon className="w-4 h-4" />
            <span>About</span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;