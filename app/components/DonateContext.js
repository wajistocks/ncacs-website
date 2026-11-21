"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const ZELLE_EMAIL = "ngembaassociationcos@gmail.com";
const CASHTAG = "$ngembacos";
const CASHAPP_URL = "https://cash.app/$ngembacos";
const ACCOUNT_NAME = "Ngemba Cultural Association of Colorado Springs";
const MONTHLY_NOTE =
  "To give monthly, set up a recurring payment in your bank app or Cash App.";

const DonateContext = createContext({ openDonate: () => {} });

export function useDonate() {
  return useContext(DonateContext);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy approach
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function CopyField({ label, value }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <div className="give-copy">
      <code className="give-copy-value" aria-label={label}>{value}</code>
      <button
        type="button"
        className="btn btn-gold give-copy-btn"
        onClick={async () => setStatus((await copyText(value)) ? "copied" : "failed")}
      >
        {status === "copied" ? "✓ Copied" : status === "failed" ? "Copy failed" : "Copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "copied" ? `${label} copied to clipboard` : ""}
      </span>
    </div>
  );
}

function WaysToGiveModal({ monthly, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return (
    <div className="give-modal-backdrop" onClick={onClose}>
      <div
        ref={dialogRef}
        className="give-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="give-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="give-modal-handle" aria-hidden="true" />
        <button
          ref={closeRef}
          type="button"
          className="give-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <span className="eyebrow">Support NCACS</span>
        <h2 id="give-modal-title">Ways to Give</h2>
        <p className="give-modal-account">
          Account name: <strong>{ACCOUNT_NAME}</strong>
        </p>

        {monthly && <p className="give-modal-note">{MONTHLY_NOTE}</p>}

        <section className="give-option">
          <h3>Zelle</h3>
          <CopyField label="Zelle email" value={ZELLE_EMAIL} />
          <ol className="give-steps">
            <li>Open your bank app and choose Zelle.</li>
            <li>Send to <strong>{ZELLE_EMAIL}</strong>.</li>
            <li>Add &ldquo;Donation&rdquo; in the memo.</li>
          </ol>
        </section>

        <section className="give-option">
          <h3>Cash App</h3>
          <CopyField label="Cash App tag" value={CASHTAG} />
          <a
            href={CASHAPP_URL}
            className="btn btn-outline give-cashapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Cash App
          </a>
        </section>

        <p className="give-modal-thanks">Thank you for supporting NCACS.</p>
      </div>
    </div>
  );
}

export function DonateProvider({ children }) {
  const [state, setState] = useState({ open: false, monthly: false });

  const openDonate = useCallback((opts = {}) => {
    setState({ open: true, monthly: !!opts.monthly });
  }, []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  return (
    <DonateContext.Provider value={{ openDonate }}>
      {children}
      {state.open && <WaysToGiveModal monthly={state.monthly} onClose={close} />}
    </DonateContext.Provider>
  );
}
