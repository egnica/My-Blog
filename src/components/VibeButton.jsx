"use client";

import Fade from "./Fade";
import { useState } from "react";

export default function VibeButton({ trans }) {
  const [click, setClick] = useState(false);

  const isObject = trans && typeof trans === "object";
  const audioSrc = typeof trans === "string" ? trans : trans?.src;
  const externalHref = isObject ? trans.href : null;
  const label = isObject ? trans.label : null;

  if (!audioSrc && !externalHref) return null;

  return (
    <>
      <div style={{ display: "grid", placeContent: "center" }}>
        <br />
        <div
          style={{ padding: "20px 40px" }}
          className="button"
          onClick={() => setClick(!click)}
        >
          Get The Vibe Right
        </div>
        <br />
      </div>

      <div style={{ display: "grid", placeContent: "center" }}>
        <Fade transfer={click}>
          {audioSrc ? (
            <audio controls>
              <source src={audioSrc} />
            </audio>
          ) : (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label || "Open the vibe"}
            </a>
          )}
        </Fade>
      </div>

      <br />
    </>
  );
}
