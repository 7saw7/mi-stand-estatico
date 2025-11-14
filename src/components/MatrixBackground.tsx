// src/app/components/MatrixBackground.tsx
"use client";

import { memo } from "react";
import styles from "./Header.module.css";

const COLUMN_COUNT = 60;
const MATRIX_TEXT = "01<>[]{}$#/*=+ΔΛ{};:".repeat(40);

const COLUMNS = Array.from({ length: COLUMN_COUNT }).map((_, i) => ({
  id: i,
  left: (i / COLUMN_COUNT) * 100,
  duration: 3 + (i % 6) * 0.4,
  delay: (i % 12) * -0.25,
}));

function MatrixBackgroundBase() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {COLUMNS.map((col) => (
        <div
          key={col.id}
          className={styles["matrix-column"]} // 👈 IMPORTANTE: mismo nombre que en el CSS
          style={{
            left: `${col.left}%`,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {MATRIX_TEXT}
        </div>
      ))}
    </div>
  );
}

export const MatrixBackground = memo(MatrixBackgroundBase);
