
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
import { HyperText } from "@/registry/magicui/hyper-text";
import { Menu } from "lucide-react"; 

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
      className="flex items-center gap-2 text-md font-semibold text-foreground hover:text-primary transition-colors"
    >
      <span className="h-2 w-2 bg-primary rounded-full animate-pulse shrink-0"></span>
      <HyperText className="text-md font-semibold" textClassName="flex">
        F.B/<span className="text-primary">c</span>
      </HyperText>
    </Link>
  );

  if (!mounted) {
    // Basic placeholder to avoid layout shifts
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 h-16 bg-background/70 backdrop-blur-md">
        <div className="flex items-center gap-2 text-md font-semibold">
           <span className="h-2 w-2 bg-muted rounded-full"></span>
           <span className="w-16 h-5 bg-muted rounded"></span>
        </div>
        <div className="h-10 w-48 bg-muted rounded-full"></div> 
        <div style={{ visibility: 'hidden' }} className="flex-shrink-0">
            <div className="flex items-center gap-2 text-md font-semibold">
               <span className="h-2 w-2 bg-muted rounded-full"></span>
               <span className="w-16 h-5 bg-muted rounded"></span>
            </div>
        </div>
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
            className="!h-14 py-2 px-3 bg-card/80 backdrop-blur-lg border border-border shadow-md"
            magnification={8} 
            distance={40}      
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
        <div style={{ visibility: 'hidden' }} className="flex-shrink-0">
          <SiteLogo />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 h-16 bg-background/90 backdrop-blur-md border-b">
        <SiteLogo />
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>
    </>
  );
}
