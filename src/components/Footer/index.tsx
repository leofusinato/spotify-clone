import Image from "next/image";

import { Player } from "./Player";
import { Actions } from "./Actions";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" width={56} height={56} alt="Capa do álbum" />
        <div className="flex flex-col">
          <a href="#" className="font-normal hover:underline">
            Rope
          </a>
          <a href="#" className="text-xs text-zinc-400 hover:underline">
            Foo Fighters
          </a>
        </div>
      </div>
      <Player />
      <Actions />
    </footer>
  );
}
