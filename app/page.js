"use client"
import Body from "@/components/body/body";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="!bg-white !text-black">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
