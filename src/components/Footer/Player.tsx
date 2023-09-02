"use client";

import {
  Play,
  Pause,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
} from "lucide-react";
import { useState } from "react";

export function Player() {
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [isRepeated, setIsRepeated] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Shuffle
          size={20}
          className={isShuffled ? "text-green-400" : "text-zinc-200"}
          onClick={() => setIsShuffled((state) => !state)}
        />
        <SkipBack size={20} className="text-zinc-200" />
        <button
          onClick={() => setIsPaused((state) => !state)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black "
        >
          {!isPaused ? (
            <Pause fill="black" size={20} />
          ) : (
            <Play fill="black" className="pl-1" size={20} />
          )}
        </button>
        <SkipForward size={20} className="text-zinc-200" />
        <Repeat
          size={20}
          className={isRepeated ? "text-green-400" : "text-zinc-200"}
          onClick={() => setIsRepeated((state) => !state)}
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-400">2:14</span>
      </div>
    </div>
  );
}
