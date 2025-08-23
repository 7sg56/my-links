"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface MinimalCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tryNowLink?: string;
  className?: string;
}

export const MinimalCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tryNowLink = "#",
  className,
}: MinimalCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-md bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-600/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-neutral-500/60",
        className
      )}
    >
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-300 text-sm mb-6">
          {description}
        </p>
        
        {/* Image */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Bottom Actions */}
        <div className="flex items-center justify-end">
          <a
            href={tryNowLink}
            className="text-white text-sm hover:text-neutral-300 transition-colors flex items-center gap-1"
          >
            Try it now
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Component = () => {
    return (
      <div className="flex flex-row md:flex-row items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto px-4 py-8">
        <MinimalCard
          title="Resume"
          description="Professional experience and skills overview"
          imageSrc="/placehold.svg"
          imageAlt="Resume preview"
          tryNowLink="/resume"
        />
        
        <MinimalCard
          title="Portfolio"
          description="Showcase of creative projects and work"
          imageSrc="/placehold.svg"
          imageAlt="Portfolio preview"
          tryNowLink="/portfolio"
        />
      </div>
    );
  };