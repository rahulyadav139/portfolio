'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/contexts/theme-context';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-muted cursor-pointer"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
