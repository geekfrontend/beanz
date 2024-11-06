"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  InfoIcon,
  PaperclipIcon,
  Camera,
  ImageIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "./ThemeToggle";
import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "#",
      icon: PaperclipIcon,
      label: "Camera/Image",
      isButton: true,
    },
    { href: "/about", icon: InfoIcon, label: "About" },
  ],
};

const AppBar = () => {
  const router = useRouter();
  const [showCameraGalleryIcons, setShowCameraGalleryIcons] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCameraImageClick = () => {
    setShowCameraGalleryIcons(!showCameraGalleryIcons);
    console.log("Camera/Image button clicked");
  };

  const handleCameraClick = () => {
    console.log("Camera button clicked");
    router.push("/camera");
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);

      localStorage.setItem("imagePreview", fileUrl);

      router.push("/detection");
    }
  };

  return (
    <div className="fixed bottom-3 w-full max-w-[480px] mx-auto">
      {showCameraGalleryIcons ? (
        <div className="w-full -mb-5 ">
          <div className="max-w-32 flex items-center justify-center space-x-2 bg-background  py-1.5 mx-auto p-[4px] rounded-[12px] border">
            <span className="cursor-pointer p-2 rounded-3xl">
              <Camera onClick={handleCameraClick} size={28} strokeWidth={2.5} />
            </span>
            <span className="cursor-pointer  p-2 rounded-3xl">
              <ImageIcon onClick={openFileInput} size={28} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      ) : null}

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  {item.isButton ? (
                    <button
                      onClick={handleCameraImageClick}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default AppBar;
