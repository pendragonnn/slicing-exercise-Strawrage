import { DM_Sans } from "next/font/google";
import Header from "./components/Header";

const DM = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen bg-gradient-to-r from-[#5B41FB] from-10% via-[#4456F8] via-30% to-[#53ACFF] to-90% ${DM.className}`}
    >
      <Header />
    </main>
  );
}
