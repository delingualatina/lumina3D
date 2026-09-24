"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "floating" | "minimal" | "outline";
  contentName?: string;
  showIcon?: boolean;
}

export default function WhatsAppButton({
  text = "Pedir por WhatsApp",
  message,
  className = "",
  iconClassName = "w-5 h-5 fill-white",
  size = "md",
  variant = "primary",
  contentName = "Atelier Lamp Inquiry",
  showIcon = true,
}: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl(message);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Meta Pixel event tracking (fbq)
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      try {
        window.fbq("track", "Contact", {
          content_name: contentName,
          content_category: "WhatsApp Conversion",
        });
      } catch (err) {
        console.error("Meta Pixel tracking error:", err);
      }
    }

    // 2. GTM / DataLayer push
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "whatsapp_contact_click",
        content_name: contentName,
      });
    }
  };

  const sizeClasses = {
    sm: "py-2 px-3 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-4 px-7 text-base",
  }[size];

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        data-meta-track="whatsapp-floating-click"
        data-content-name={contentName}
        className={`relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)] transition-all hover:scale-110 active:scale-95 ${className}`}
        aria-label={text}
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        data-meta-track="whatsapp-outline-click"
        data-content-name={contentName}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold transition-all ${sizeClasses} ${className}`}
      >
        {showIcon && <MessageCircle className="w-4 h-4 fill-current" />}
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-meta-track="whatsapp-button-click"
      data-content-name={contentName}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.01] active:scale-[0.98] ${sizeClasses} ${className}`}
    >
      {showIcon && <MessageCircle className={iconClassName} />}
      <span>{text}</span>
    </a>
  );
}
