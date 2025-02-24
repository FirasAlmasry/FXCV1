import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Services from "@/components/main/Services";
import RecentProjects from "@/components/main/RecentProjects";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <Services />
        <Encryption />
        <RecentProjects />
        <div className="relative px-10" id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}
