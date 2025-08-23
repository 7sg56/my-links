"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconBrandX,
  IconMail
} from "@tabler/icons-react";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems: DockItem[] = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      href: "https://github.com/7sg56",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/7sg56",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-5 w-5" />,
      href: "https://instagram.com/s0urishg",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-5 w-5" />,
      href: "https://twitter.com/sourishghosh777",
    },
    {
      title: "Email",
      icon: <IconMail className="h-5 w-5" />,
      href: "mailto:sghosh.ile.7@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-600/40 shadow-xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {dockItems.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                "bg-slate-700/40 border border-slate-600/30",
                "hover:bg-slate-600/60 hover:border-slate-500/50",
                "text-slate-300 hover:text-white"
              )}
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                y: hoveredIndex === index ? -8 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-slate-800/90 text-white rounded-md whitespace-nowrap opacity-0 pointer-events-none"
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? -4 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {item.title}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};
