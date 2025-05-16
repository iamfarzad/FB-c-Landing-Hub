
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

// Site Logo Component
const SiteLogo = () => (
  <Link
    href="/"
    aria-label={SITE_NAME}
    className="flex items-center gap-2 text-md font-semibold text-foreground transition-colors"
  >
    <span className="h-2 w-2 bg-primary rounded-full animate-pulse shrink-0"></span>
    <HyperText textClassName="hover:text-primary transition-colors">
      {SITE_NAME.substring(0, SITE_NAME.lastIndexOf('/') + 1)}
      <span className="text-primary">{SITE_NAME.substring(SITE_NAME.lastIndexOf('/') + 1)}</span>
    </HyperText>
  </Link>
);


export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile placeholder
  if (!mounted && typeof window !== "undefined" && window.innerWidth < 768) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between p-4 h-16 bg-background/90 backdrop-blur-md border-b">
        <div className="flex items-center gap-2 text-md font-semibold">
           <span className="h-2 w-2 bg-muted rounded-full"></span>
           <span className="w-20 h-5 bg-muted rounded">F.B/c</span>
        </div>
        <Button variant="ghost" size="icon" disabled>
          <Menu className="size-6" />
        </Button>
      </header>
    );
  }
  
  // Desktop placeholder - only used if !mounted
  if (!mounted && typeof window !== "undefined" && window.innerWidth >= 768) {
     return (
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between p-4 h-16 bg-background/70 backdrop-blur-md">
        {/* Placeholder for SiteLogo */}
        <div className="flex items-center gap-2 text-md font-semibold">
           <span className="h-2 w-2 bg-muted rounded-full"></span>
           <span className="w-20 h-5 bg-muted rounded">F.B/c</span>
        </div>
        {/* Placeholder for Dock */}
        <div className="h-10 w-72 bg-muted rounded-full mx-auto"></div>
        {/* Spacer for balance */}
        <div style={{ visibility: 'hidden' }} className="flex items-center gap-2 text-md font-semibold"> 
          <span className="h-2 w-2 bg-muted rounded-full"></span>
          <span className="w-20 h-5 bg-muted rounded">F.B/c</span>
        </div>
      </header>
     );
  }


  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between p-4 h-16">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <SiteLogo />
        </div>
        
        {mounted && (
          <TooltipProvider delayDuration={0}>
            <Dock
              direction="top"
              magnification={8} 
              distance={40}     
              className="!h-14 py-2 px-3 bg-card/80 backdrop-blur-lg border border-border shadow-md mx-auto"
            >
              {NAV_LINKS.map((item) => (
                <DockIcon key={item.label} className="size-10"> 
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-10 rounded-full", 
                          (pathname === item.href || (pathname === "/" && item.href === "/")) &&
                          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                        )}
                      >
                        <item.icon className="size-5" /> 
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}

              <Separator orientation="vertical" className="h-full mx-0.5" />

              <DockIcon className="size-10">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-10 rounded-full">
                      <SEARCH_ICON className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Search</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>

              <DockIcon className="size-10">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle className="rounded-full size-10" variant="ghost" size="icon"/>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Toggle Theme</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        )}

        {/* Invisible spacer only needed if Dock isn't absolutely positioned or fixed for centering itself */}
        {/* <div style={{ visibility: 'hidden' }} className="flex-shrink-0 w-20"> {/* Adjust width to match SiteLogo roughly */}
          {/* <SiteLogo /> */} {/* Or a div with similar width */}
        {/*</div> */}
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
