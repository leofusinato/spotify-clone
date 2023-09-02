interface MenuItemProps {
  name: string;
  icon: React.ReactElement;
  selected: boolean;
  onSelect: () => void;
}

export function MenuItem({ name, icon, selected, onSelect }: MenuItemProps) {
  return (
    <a
      href="#"
      onClick={onSelect}
      className={`flex items-center text-sm font-semibold text-zinc-200 gap-3 ${
        selected ? "bg-white/20 rounded p-2" : "p-2"
      }`}
    >
      {icon}
      {name}
    </a>
  );
}
