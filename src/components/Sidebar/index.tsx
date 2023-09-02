"use client";

import { useState } from "react";
import { Home, Search, Library } from "lucide-react";
import { PlaylistName } from "./PlaylistName";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  id: number;
  name: string;
  icon: React.ReactElement;
}

const menus: MenuProps[] = [
  {
    id: 1,
    name: "Home",
    icon: <Home />,
  },
  {
    id: 2,
    name: "Search",
    icon: <Search />,
  },
  {
    id: 3,
    name: "Your Library",
    icon: <Library />,
  },
];

interface PlaylistProps {
  id: number;
  name: string;
}

const playLists: PlaylistProps[] = [
  { id: 1, name: "Hot Hits Brasil" },
  { id: 2, name: "Aniver Funk" },
  { id: 3, name: "My Playlist" },
  { id: 4, name: "Top Brasil" },
];

export function Sidebar() {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<number | null>(
    null
  );
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="">
        {menus.map(({ id, name, icon }) => (
          <MenuItem
            key={id}
            name={name}
            icon={icon}
            selected={selectedMenuId === id}
            onSelect={() => setSelectedMenuId(id)}
          />
        ))}
      </nav>
      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        {playLists.map(({ id, name }) => {
          return (
            <PlaylistName
              key={id}
              name={name}
              selected={selectedPlaylistId === id}
              onSelect={() => setSelectedPlaylistId(id)}
            />
          );
        })}
      </nav>
    </aside>
  );
}
