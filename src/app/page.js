import Image from "next/image";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Learn from "@/components/Learn";
import Apply from "@/components/Apply";

export default function App() {
  return (
    <main className="relative text-white">
      <Header/>
      <Home/>
      <Info/>
      <Learn/>
      <Apply/>
    </main>
  );
}
