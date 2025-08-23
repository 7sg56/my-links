"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface MinimalCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tryNowLink?: string;
  signUpLink?: string;
  className?: string;
}

export const MinimalCard = ({
  title,
  description,
  image,
  imageAlt,
  tryNowLink = "#",
  signUpLink = "#",
  className,
}: MinimalCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden",
        className
      )}
    >
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-400 text-sm mb-6">
          {description}
        </p>
        
        {/* Image */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Bottom Actions */}
        <div className="flex items-center justify-between">
          <a
            href={tryNowLink}
            className="text-white text-sm hover:text-neutral-300 transition-colors flex items-center gap-1"
          >
            Try now
            <ArrowRight className="w-3 h-3" />
          </a>
          
          <a
            href={signUpLink}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
