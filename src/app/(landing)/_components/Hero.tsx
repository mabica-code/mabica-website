import { SectionLayout } from "@/components/section/SectionLayout";

export function Hero() {
  return (
    <SectionLayout className="flex pt-28 justify-center items-center flex-col gap-1">
      <h1 className="text-lg text-center font-semibold">Lazy to read? Just Listen, <br/> Stories Await.</h1>
      <p className="text-text2 font-base text-center mb-2">Listening to stories as a practical way to enjoy the world of literature. Discover adventure through the sound of words.</p>
      <button className="text-primary shadow hover:shadow-md duration-300 bg-background rounded-full px-4 py-1 font-medium">Start Our Story</button>
    </SectionLayout>
  )
}
