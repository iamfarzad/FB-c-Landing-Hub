'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME, SEARCH_ICON as SearchIcon, THEME_ICON as ThemeIcon } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Moon } from 'lucide-react'; // Import Moon for dark theme toggle

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center" aria-label={SITE_NAME}>
          {/* Orange circular logo */}
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
            FB
          </div>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
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
        
        <div className="hidden md:flex items-center space-x-2 ml-auto">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground/70 hover:text-primary">
                <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-foreground/70 hover:text-primary">
                {theme === 'dark' ? <ThemeIcon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center" aria-label={SITE_NAME}>
                  <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    FB
                  </div>
                  <span className="ml-3 font-semibold text-lg">{SITE_NAME}</span>
                </Link>
              </div>
              <nav className="flex flex-col space-y-2 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground flex items-center text-base',
                        pathname === link.href ? 'bg-accent text-accent-foreground font-medium' : 'text-foreground'
                      )}
                    >
                      <link.icon className="mr-3 h-5 w-5 text-primary" />
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
               <div className="mt-8 px-4 border-t pt-4">
                 <Button variant="ghost" className="w-full justify-start text-base" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <ThemeIcon className="mr-3 h-5 w-5 text-primary" /> : <Moon className="mr-3 h-5 w-5 text-primary" />}
                    Toggle Theme
                </Button>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
