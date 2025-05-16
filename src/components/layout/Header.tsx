
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME, SEARCH_ICON } from '@/lib/constants';
import { Dock, DockIcon } from "@/registry/magicui/dock";
// HyperText is no longer used for the logo text, but might be used elsewhere or if user reverts
import { HyperText } from "@/registry/magicui/hyper-text"; 
import { Menu } from "lucide-react";

// Site Logo Component - positioned on the far left
const SiteLogo = () => (
  <Link
    href="/"
    aria-label={SITE_NAME} // SITE_NAME is "F.B/c", this remains for accessibility
    className="flex items-center gap-2 text-md font-semibold text-foreground hover:text-primary transition-colors"
  >
    {/* Pulsing Orange Dot */}
    <span className="h-2 w-2 bg-primary rounded-full animate-pulse shrink-0"></span>
    {/* Changed text as per user instruction */}
    <span className="text-md font-semibold">Glowing node here</span>
  </Link>
);


export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Basic placeholder for mobile to avoid layout shifts if !mounted
  if (!mounted && typeof window !== "undefined" && window.innerWidth < 768) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 h-16 bg-background/90 backdrop-blur-md border-b">
        <div className="flex items-center gap-2 text-md font-semibold">
           <span className="h-2 w-2 bg-muted rounded-full"></span>
           {/* Adjusted placeholder text to match new logo text */}
           <span className="w-32 h-5 bg-muted rounded"></span> {/* Approx width for "Glowing node here" */}
        </div>
        <Button variant="ghost" size="icon" disabled>
          <Menu className="size-6" />
        </Button>
      </header>
    );
  }
  
  // Placeholder for desktop if !mounted (Dock might cause issues server-side)
  if (!mounted && typeof window !== "undefined" && window.innerWidth >= 768) {
     return (
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between p-4 h-16 bg-background/70 backdrop-blur-md">
        <div className="flex items-center gap-2 text-md font-semibold">
           <span className="h-2 w-2 bg-muted rounded-full"></span>
           <span className="w-32 h-5 bg-muted rounded"></span>
        </div>
        <div className="h-10 w-72 bg-muted rounded-full"></div> {/* Approx width for dock */}
        {/* Spacer for desktop placeholder */}
        <div style={{ visibility: 'hidden' }} className="flex items-center gap-2 text-md font-semibold"> 
          <span className="h-2 w-2 bg-muted rounded-full"></span>
          <span className="w-32 h-5 bg-muted rounded"></span>
        </div>
      </header>
     );
  }


  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between p-4 h-16">
        <div className="flex-shrink-0">
          <SiteLogo />
        </div>
        
        {mounted && ( // Only render Dock on client after mount
          <TooltipProvider delayDuration={0}>
            <Dock
              direction="top"
              magnification={8} 
              distance={40}     
              className="!h-12 py-1 px-2 bg-card/80 backdrop-blur-lg border border-border shadow-md mx-auto" 
            >
              {NAV_LINKS.map((item) => (
                <DockIcon key={item.label} className="size-9"> 
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-8 rounded-full", 
                          (pathname === item.href || (pathname === "/" && item.href === "/")) &&
                          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                        )}
                      >
                        <item.icon className="size-4" /> 
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}

              <Separator orientation="vertical" className="h-full mx-0.5" />

              <DockIcon className="size-9">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8 rounded-full">
                      <SEARCH_ICON className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Search</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>

              <DockIcon className="size-9">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle className="rounded-full size-8" variant="ghost" size="icon"/>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Toggle Theme</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        )}

        {/* Invisible spacer to balance the logo and help center the dock */}
        {/* It should roughly match the visual width of the SiteLogo */}
        <div style={{ visibility: 'hidden' }} className="flex-shrink-0">
            <SiteLogo />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 h-16 bg-background/90 backdrop-blur-md border-b">
        <SiteLogo /> {/* Also updated for mobile view consistency */}
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>
    </>
  );
}

