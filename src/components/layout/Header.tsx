
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME, SEARCH_ICON as SearchIcon, THEME_ICON as ThemeIcon } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Moon } from 'lucide-react'; // Ensure Moon is imported
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Render a basic header or null until mounted to avoid hydration mismatch for theme-dependent icons
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Placeholder until theme is known */}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center" aria-label={SITE_NAME}>
          <span className="h-2.5 w-2.5 bg-primary rounded-full mr-2 animate-pulse"></span>
          <span className="font-semibold text-lg tracking-tight">{SITE_NAME}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-5 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary pb-1',
                pathname === link.href ? 'text-primary border-b-2 border-primary' : 'text-foreground/70 hover:text-foreground/90'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Actions: Search and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground/70 hover:text-primary">
                <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme} className="text-foreground/70 hover:text-primary">
                {theme === 'dark' ? <ThemeIcon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme} className="text-foreground/70 hover:text-primary">
            {theme === 'dark' ? <ThemeIcon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="p-6 border-b">
                <Link href="/" className="flex items-center" aria-label={SITE_NAME}>
                  <span className="h-2.5 w-2.5 bg-primary rounded-full mr-2"></span>
                  <span className="font-semibold text-xl">{SITE_NAME}</span>
                </Link>
              </div>
              <nav className="flex flex-col space-y-1 p-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'px-3 py-2.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground flex items-center text-base',
                        pathname === link.href ? 'bg-accent text-accent-foreground font-medium' : 'text-foreground'
                      )}
                    >
                      <link.icon className="mr-3 h-5 w-5 text-primary" />
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
