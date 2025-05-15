
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
// Ensure this path is correct after running:
// npx shadcn@latest add "https://magicui.design/r/dock"
// If these components are not found, you'll need to ensure they are correctly installed.
import { Dock, DockIcon } from "@/registry/magicui/dock"; 
import { Menu } from "lucide-react"; // For mobile menu icon

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Site Logo Component
  const SiteLogo = () => (
    <Link
      href="/"
      aria-label={SITE_NAME}
      className="flex items-center gap-2 text-md font-semibold text-foreground hover:text-primary transition-colors" // Changed to text-md
    >
      <span className="h-2 w-2 bg-primary rounded-full animate-pulse shrink-0"></span> {/* Changed to h-2 w-2 */}
      {SITE_NAME}
    </Link>
  );

  if (!mounted) {
    // Basic placeholder to avoid layout shifts, especially for fixed elements
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-16 bg-background/70 backdrop-blur-md">
        <div className="flex items-center gap-2 text-md font-semibold"> {/* Matched SiteLogo style */}
           <span className="h-2 w-2 bg-muted rounded-full"></span> {/* Matched SiteLogo style */}
           <span className="w-16 h-5 bg-muted rounded"></span> {/* Adjusted placeholder height */}
        </div>
        {/* Placeholder for dock - kept as is, actual dock is complex */}
        <div className="h-10 w-48 bg-muted rounded-full"></div> 
      </header>
    );
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between p-4">
        <SiteLogo />
        <TooltipProvider delayDuration={0}>
          <Dock 
            direction="top" 
            className="!h-14 py-2 px-3 bg-card/80 backdrop-blur-lg border border-border shadow-md" // No mx-auto, direction="top" handles centering
            magnification={8} // Reduced magnification
            distance={40}      // Distance for magnification effect
          >
            {NAV_LINKS.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-8 rounded-full", // Adjusted icon container size
                        (pathname === item.href || (pathname === "/" && item.href === "/")) && 
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      )}
                    >
                      <item.icon className="size-4" /> {/* Icon size */}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            
            <Separator orientation="vertical" className="h-full mx-1" />
            
            <DockIcon>
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

            <DockIcon>
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
        {/* Invisible spacer to balance the justify-between for the Dock */}
        <div style={{ visibility: 'hidden' }} className="flex-shrink-0"> {/* Ensures it doesn't grow/shrink */}
          <SiteLogo />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 h-16 bg-background/90 backdrop-blur-md border-b">
        <SiteLogo />
        {/* Placeholder for mobile menu toggle - functionality can be added later */}
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>
    </>
  );
}
