"use client";

import { useDonate } from "./DonateContext";

export default function DonateButton({ monthly = false, onClick, children, ...props }) {
  const { openDonate } = useDonate();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openDonate({ monthly });
      }}
    >
      {children}
    </button>
  );
}
