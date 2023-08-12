import Hero from "@/components/Hero";
import Approach from "@/components/Sections/Approach";
import NewsLetter from "@/components/Sections/NewsLetter";
import Services from "@/components/Sections/Services";
import WorkDone from "@/components/Sections/WorkDone";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Approach />
      <WorkDone />
      <NewsLetter />
    </div>
  );
}
