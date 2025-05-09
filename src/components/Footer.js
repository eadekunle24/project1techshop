import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-center text-secondary py-4">
      <small>&copy; {new Date().getFullYear()} ByteFix Tech Repairs. All rights reserved.</small>
    </footer>
  );
}
