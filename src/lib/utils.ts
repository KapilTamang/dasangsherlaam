import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  const paddedMins = String(mins).padStart(2, "0");
  const paddedSecs = String(secs).padStart(2, "0");
  
  return `${paddedMins}:${secs.toString().padStart(2, "0")}`;
}
