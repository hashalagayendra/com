import React from "react";

export default function BouLogo({ className = "", height = 34 }: { className?: string; height?: number }) {
  // Exact geometry of the iconic Bou lowercase mark
  return (
    <svg
      height={height}
      viewBox="0 0 110 38"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bou Logo"
    >
      {/* 'b' letterform */}
      <rect x="2" y="2" width="10" height="34" rx="5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12C14.5 9.5 18 8 22 8C29.732 8 36 14.268 36 22C36 29.732 29.732 36 22 36C18 36 14.5 34.5 12 32V32C12 28 12 20 12 12ZM22 17C19.2386 17 17 19.2386 17 22C17 24.7614 19.2386 27 22 27C24.7614 27 27 24.7614 27 22C27 19.2386 24.7614 17 22 17Z"
      />
      {/* 'o' letterform */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56 8C63.732 8 70 14.268 70 22C70 29.732 63.732 36 56 36C48.268 36 42 29.732 42 22C42 14.268 48.268 8 56 8ZM56 17C53.2386 17 51 19.2386 51 22C51 24.7614 53.2386 27 56 27C58.7614 27 61 24.7614 61 22C61 19.2386 58.7614 17 56 17Z"
      />
      {/* 'u' letterform with signature rounded scoop */}
      <path
        d="M76 9C78.7614 9 81 11.2386 81 14V23C81 25.2091 82.7909 27 85 27C87.2091 27 89 25.2091 89 23V14C89 11.2386 91.2386 9 94 9C96.7614 9 99 11.2386 99 14V23C99 30.1797 93.1797 36 86 36C78.8203 36 73 30.1797 73 23V14C73 11.2386 75.2386 9 76 9Z"
      />
      {/* 'u' subtle lower accent/curl that matches Bou's custom bespoke typography */}
      <circle cx="102" cy="31" r="3.5" />
    </svg>
  );
}
