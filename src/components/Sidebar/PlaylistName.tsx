interface PlaylistNameProps {
  name: string;
  selected: boolean;
  onSelect: () => void;
}

export function PlaylistName({ name, selected, onSelect }: PlaylistNameProps) {
  return (
    <a
      href="#"
      onClick={onSelect}
      className={`text-sm  hover:text-zinc-100 ${
        selected ? "text-zinc-100" : "text-zinc-400"
      }`}
    >
      {name}
    </a>
  );
}
