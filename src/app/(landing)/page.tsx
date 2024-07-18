import { Hero } from "./_components/Hero";
import { Banner } from "./_components/Banner";
import { About } from "./_components/About";
import { Gallery } from "./_components/Gallery";
import { Team } from "./_components/Team";
import { Donate } from "./_components/Donate";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Banner />
      <About />
      <Gallery />
      <Team />
      <Donate />
    </>
  )
}
