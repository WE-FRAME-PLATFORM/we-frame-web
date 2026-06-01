'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieGrid from '@/components/MovieGrid';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        isLoggedIn={isLoggedIn}
      />
      
      <main>
        <Hero />
        <MovieGrid />
      </main>

      <Footer />

      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)}
          onSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal 
          onClose={() => setShowRegister(false)}
          onSuccess={() => {
            setIsLoggedIn(true);
            setShowRegister(false);
          }}
        />
      )}
    </div>
  );
}
