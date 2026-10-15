"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" style={{
      backgroundColor: "#0C1012",
      color: "#CBD2CE",
      fontSize: "13px",
      fontWeight: 500,
      padding: "9px 24px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      zIndex: 60,
      letterSpacing: "0.01em",
    }}>
      <span>
        We have changed from <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>bou.co</strong> to{" "}
        <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>wearebou.com</strong>
      </span>
      <button
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#8E9CA3",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          borderRadius: "50%",
          transition: "color 0.2s ease",
        }}
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </aside>
  );
}
