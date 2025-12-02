import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { KnowledgeModal } from './KnowledgeModal';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-4 px-2 md:px-0">
        <Outlet />
      </main>
      <Footer />
      <KnowledgeModal />
    </div>
  );
};