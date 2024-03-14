import Image from "next/image";

import { TestAI } from "./testai";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TestAI />
    </main>
  );
}
