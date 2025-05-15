
"use client";

import Link from "next/link";
import React from "react";
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
              "size-12 rounded-full flex items-center justify-center gap-1.5 text-lg font-semibold"
            )}
          >
            <span className="h-2.5 w-2.5 bg-primary rounded-full animate-pulse shrink-0"></span>
            {SITE_NAME}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{SITE_NAME} - Home</p>
        </TooltipContent>
      </Tooltip>
    </DockIcon>
  );

  return (
    <header className="fixed bottom-0 left-0 right-0 flex justify-center z-50 mb-4"> {/* Positioned at bottom center */}
      <TooltipProvider>
        <Dock direction="middle">
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
                      "size-12 rounded-full",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-full hidden sm:block mx-1" />
          
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Ensure ModeToggle props are compatible or adjust as needed */}
                <ModeToggle className="rounded-full size-12" variant="outline" size="icon"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </header>
  );
}
