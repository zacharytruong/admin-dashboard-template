'use client';

import { useState } from 'react';

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return {
    isOpen,
    setIsOpen,
    toggle,
  };
}
