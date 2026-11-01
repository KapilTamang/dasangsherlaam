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

/**
 * Format milliseconds into readable time units.
 * Supports ms, s, m, h, and d.
 */
export const formatAnalyticsTime = (ms: number): string => {
  if (!Number.isFinite(ms)) return "0ms";

  const format = (value: number) =>
    value.toFixed(1).replace(/\.0$/, "");

  if (ms < 1000) return `${ms}ms`;

  if (ms < 60_000) {
    return `${format(ms / 1000)}s`;
  }

  if (ms < 3_600_000) {
    return `${format(ms / 60_000)}m`;
  }

  if (ms < 86_400_000) {
    return `${format(ms / 3_600_000)}h`;
  }

  return `${format(ms / 86_400_000)}d`;
};

/**
 * Format large numbers into K, M, and B.
 */
export const formatNumber = (num: number): string => {
  if (!Number.isFinite(num)) return "0";

  const abs = Math.abs(num);
  const format = (value: number) =>
    value.toFixed(1).replace(/\.0$/, "");

  if (abs >= 1_000_000_000) {
    return `${format(num / 1_000_000_000)}B`;
  }

  if (abs >= 1_000_000) {
    return `${format(num / 1_000_000)}M`;
  }

  if (abs >= 1_000) {
    return `${format(num / 1_000)}K`;
  }

  return String(num);
};
