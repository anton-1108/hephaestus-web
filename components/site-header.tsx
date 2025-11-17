"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <span className="text-xl font-bold text-primary-foreground">
                H
              </span>
            </div>
            <span>Hephaestus</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/our-products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Products
            </Link>
            <Link href="/about-us" className="">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
