"use client";

import { useEffect } from "react";

type ScriptSpec = { src: string; module?: boolean };

/**
 * Menjalankan skrip bawaan situs HTML lama setiap halaman dibuka — termasuk saat berpindah halaman
 * lewat <Link> (Next tidak memuat ulang halaman, jadi skrip biasa tidak akan jalan lagi).
 * Skrip dimuat berurutan dan dibersihkan saat halaman ditinggalkan.
 */
export default function PageScripts({ scripts = [], bodyClass }: { scripts?: ScriptSpec[]; bodyClass?: string }) {
  const key = scripts.map((s) => (s.module ? "m:" : "") + s.src).join("|");

  useEffect(() => {
    const prevClass = document.body.className;
    if (bodyClass !== undefined) document.body.className = bodyClass;

    let cancelled = false;
    const added: HTMLScriptElement[] = [];
    (async () => {
      for (const spec of scripts) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const el = document.createElement("script");
          el.src = spec.src;
          if (spec.module) el.type = "module";
          else el.async = false;
          el.onload = () => resolve();
          el.onerror = () => resolve();
          document.body.appendChild(el);
          added.push(el);
        });
      }
    })();

    return () => {
      cancelled = true;
      added.forEach((el) => el.remove());
      if (bodyClass !== undefined) document.body.className = prevClass;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, bodyClass]);

  return null;
}
