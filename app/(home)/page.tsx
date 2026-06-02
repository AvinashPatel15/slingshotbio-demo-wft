import { Suspense } from "react";
import HomeClient from "@/components/home/home-client";

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </main>
      }
    >
      <HomeClient />
    </Suspense>
  );
}

