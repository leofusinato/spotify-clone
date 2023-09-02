import Image from "next/image";
import { Play } from "lucide-react";

interface DefaultPlaylistProps {
  variant: "default";
  name: string;
  authors?: never;
}

interface SmallPlayistProps {
  variant: "small";
  name: string;
  authors: string;
}

type PlaylistProps = DefaultPlaylistProps | SmallPlayistProps;

export function Playlist({ name, variant, authors }: PlaylistProps) {
  if (variant === "default") {
    return (
      <a
        href="#"
        className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
      >
        <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum" />
        <strong>{name}</strong>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 pl-1 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    );
  }

  if (variant === "small") {
    return (
      <a
        href="#"
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-full"
          src="/album.jpg"
          width={120}
          height={120}
          alt="Capa do álbum"
        />
        <strong className="font-semibold">{name}</strong>
        <span className="text-sm text-zinc-400">{authors}</span>
      </a>
    );
  }
}
