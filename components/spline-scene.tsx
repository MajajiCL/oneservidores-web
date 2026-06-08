"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js";

// Augment JSX intrinsic elements for the <spline-viewer> web component
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          "loading-anim-type"?: string;
          "events-target"?: string;
          background?: string;
          ref?: React.Ref<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

export function SplineScene() {
  const [loaded, setLoaded] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    // Inject the spline-viewer web component script once
    const existing = document.querySelector(`script[data-spline-viewer]`);
    if (existing) {
      setScriptReady(true);
      return;
    }
    const s = document.createElement("script");
    s.type = "module";
    s.src = VIEWER_SRC;
    s.dataset.splineViewer = "1";
    s.onload = () => setScriptReady(true);
    document.head.appendChild(s);
  }, []);

  return (
    <div className="relative w-full">
      {/* Backdrop blob matching aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,120,0,0.22), transparent 70%)"
          }}
        />
      </div>

      <div className="relative h-[460px] lg:h-[560px] w-full overflow-hidden rounded-3xl">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent">
            <div
              className="h-28 w-28 rounded-3xl bg-gradient-to-br from-brand to-brand-600 animate-pulseGlow"
              aria-hidden
            />
          </div>
        )}

        {scriptReady && (
          <spline-viewer
            url={site.splineSceneUrl}
            loading-anim-type="none"
            style={{ width: "100%", height: "100%", background: "transparent" }}
            onLoad={() => setLoaded(true)}
          />
        )}

        {/* Cover Spline watermark in bottom-right */}
        <div className="pointer-events-none absolute bottom-2 right-2 h-9 w-32 bg-white/95 rounded" />
      </div>

      {/* Ground shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-6 w-[60%] rounded-full opacity-40 blur-md"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,120,0,0.4), transparent 80%)"
        }}
      />
    </div>
  );
}
