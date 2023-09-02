"use client";

import {
  Mic2,
  LayoutList,
  Laptop2,
  Volume1,
  VolumeX,
  Maximize2,
} from "lucide-react";
import { useState } from "react";

export function Actions() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className="flex items-center gap-2">
        <div onClick={() => setIsMuted((state) => !state)}>
          {!isMuted ? <Volume1 size={20} /> : <VolumeX size={20} />}
        </div>
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div
            className={`bg-zinc-200  h-1 rounded-full ${
              isMuted ? "w-0" : "w-10"
            }`}
          ></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  );
}
