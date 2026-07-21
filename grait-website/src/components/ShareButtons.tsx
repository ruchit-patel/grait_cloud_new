"use client";

import { useState } from "react";

export default function ShareButtons({
  title,
  label = "Share this release",
}: {
  title: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined" ? window.location.href : "https://graitcloud.com";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9V9Z" />
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25H8.07l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      ),
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-semibold text-[#0d1f3c] mr-1">{label}</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0d1f3c] text-white hover:bg-[#0099CC] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            {link.icon}
          </svg>
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="relative w-9 h-9 flex items-center justify-center rounded-md bg-[#0d1f3c] text-white hover:bg-[#0099CC] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6.5 15 5a4 4 0 0 1 5.66 5.66l-2.5 2.5a4 4 0 0 1-5.66 0M10.5 17.5 9 19a4 4 0 0 1-5.66-5.66l2.5-2.5a4 4 0 0 1 5.66 0"
          />
        </svg>
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#0d1f3c] px-2 py-1 text-[11px] text-white">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
