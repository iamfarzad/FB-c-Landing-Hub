
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";

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
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

// Assuming Dock and DockIcon will be available here after running the npx command:
// npx shadcn@latest add "https://magicui.design/r/dock"
// If these components are not found, you'll need to ensure they are correctly installed.
import { Dock, DockIcon } from "@/registry/magicui/dock"; 
// Fallback if Dock components are not found (remove this if Dock is installed)
// const Dock = ({ children, className }: { children: React.ReactNode, className?: string }) => <div className={cn("flex gap-2 p-2 bg-background/50 border rounded-lg fixed bottom-4 left-1/2 -translate-x-1/2", className)}>{children}</div>;
// const DockIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => <div className={cn("p-2", className)}>{children}</div>;


export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme(); // Get theme for ModeToggle icon, if needed directly here, though ModeToggle handles it.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Site Logo/Name component for the Dock
  const SiteLogo = () => (
    <DockIcon>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/"
            aria-label={SITE_NAME}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-10 rounded-full flex items-center justify-center gap-1.5 text-base font-semibold" // Adjusted size
            )}
          >
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse shrink-0"></span> {/* Adjusted dot size */}
            {SITE_NAME}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{SITE_NAME} - Home</p>
        </TooltipContent>
      </Tooltip>
    </DockIcon>
  );

  if (!mounted) {
    // To prevent hydration mismatch with theme-dependent icons or logic
    // You could render a placeholder or null
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
        <div className="flex h-14 items-center gap-2 rounded-full border bg-background/70 px-3 py-2 backdrop-blur-md dark:bg-neutral-900/70">
          {/* Placeholder structure to avoid layout shifts */}
          <div className="size-10 rounded-full bg-muted/50 animate-pulse"></div>
          <Separator orientation="vertical" className="h-full hidden sm:block mx-1" />
          {NAV_LINKS.slice(0,3).map((item) => (
             <div key={item.label} className="size-10 rounded-full bg-muted/50 animate-pulse"></div>
          ))}
           <Separator orientation="vertical" className="h-full hidden sm:block mx-1" />
           <div className="size-10 rounded-full bg-muted/50 animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"> {/* Positioned at top center */}
      <TooltipProvider>
        <Dock direction="top" className="!h-14 py-2"> {/* Dock direction top, adjusted height and padding */}
          <SiteLogo />
          
          <Separator orientation="vertical" className="h-full hidden sm:block mx-1" />

          {NAV_LINKS.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full", // Adjusted icon container size
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="size-5" /> {/* Icon size */}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom"> {/* Tooltip below */}
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-full hidden sm:block mx-1" />
          
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* ModeToggle itself applies size-icon. Wrapper DockIcon gives hover/magnification. */}
                <ModeToggle className="rounded-full size-10" variant="ghost" size="icon"/>
              </TooltipTrigger>
              <TooltipContent side="bottom"> {/* Tooltip below */}
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </header>
  );
}
