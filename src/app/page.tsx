import { Footer } from "@/components/Footer";
import { Playlist } from "@/components/Playlist";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 font-semibold text-3xl">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <Playlist variant="default" name="Playlist do mor" />
            <Playlist variant="default" name="Nome da Playlist" />
            <Playlist variant="default" name="Nome da Playlist" />
            <Playlist variant="default" name="Nome da Playlist" />
            <Playlist variant="default" name="Nome da Playlist" />
            <Playlist variant="default" name="Nome da Playlist" />
          </div>

          <h2 className="mt-10 font-semibold text-2xl">
            Made For Leonardo Alex Fusinato
          </h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
            <Playlist
              variant="small"
              name="Daily Mix 1"
              authors="Wallows, COIN, girl in red and more"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
