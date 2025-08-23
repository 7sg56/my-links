"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group text-sm",
        variant === "primary" && [
          "bg-gradient-to-r from-slate-800/80 to-blue-900/80",
          "border border-slate-600/60",
          "text-white",
          "hover:border-blue-500/60",
          "hover:shadow-xl",
          "backdrop-blur-sm",
        ],
        variant === "secondary" && [
          "bg-transparent",
          "border border-slate-600/60",
          "text-slate-300",
          "hover:border-blue-500/60",
          "hover:text-white",
          "hover:bg-slate-800/20",
        ],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

export const PortfolioButton = () => {
  return (
    <Button href="/portfolio" variant="primary">
      View Portfolio
    </Button>
  );
};

export const ResumeButton = () => {
  return (
    <Button href="/resume" variant="secondary">
      View Resume
    </Button>
  );
};

export const ButtonGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
      <PortfolioButton />
      <ResumeButton />
    </div>
  );
};
