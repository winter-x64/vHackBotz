import Image from "next/image";
import VHZLOGO from "@/public/vhackbotz.svg";

export default function Loader() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-transparent dark:bg-transparent">
      <div className="h-32 w-32 rounded-full bg-white p-4 shadow-lg dark:bg-white flex items-center justify-center animate-pulse transition-all ease-out">
        <div className="relative h-24 w-24">
          <Image
            src={VHZLOGO}
            alt="vHackBotz Logo"
            className="object-contain"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </main>
  );
}
