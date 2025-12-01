"use client";

import React from "react";

export default function LiquidGlass({
  children,
  className = "",
}: {
  // Accept any children to be compatible with motion values
  children: any;
  className?: string;
}) {
  return (
    <div className={`liquid-glass-card ${className}`}>
      <div className="card-content">{children}</div>
    </div>
  );
}
