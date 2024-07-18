import { SectionLayout } from "@/components/section/SectionLayout";
import Image from "next/image"

type buttonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "secondary" | "primary"
}

function Button({ children, className, type = "secondary" }: buttonProps) {
  return (
    <button className={`${className} ${type === "primary" && "text-background bg-primary font-semibold"} font-medium shadow hover:shadow-md duration-300 rounded-full px-4 py-1`}>
      {children}
    </button>
  )
}

type cardProps = {
  paragraph: string
  heading: string
  src: string
  ongoing?: boolean
}

function Card({ heading, paragraph, src, ongoing = false }: cardProps) {
  return (
    <div>
      <div className="w-full bg-red-200 rounded-xl overflow-hidden relative shadow hover:shadow-lg duration-300">
        <span className="rounded-full bg-background text-text px-4 py-1 absolute bottom-2 left-2">{ongoing ? "Ongoing" : "Complete"}</span>
        <Image src={src} alt={heading} width="100" height="150" className="w-full h-full" />
      </div>
      <div>
        <h3 className="font-semibold">{heading}</h3>
        <p className="text-text2">{paragraph}</p>
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-base">#Gallery</h2>
        <div className="flex flex-wrap gap-2">
          <Button type="primary">All</Button>
          <Button>Audiobook</Button>
          <Button>Music</Button>
          <Button>Image</Button>
        </div>
        <div className="grid gap-2 grid-cols-2">
          <Card heading="The Worl of Cemy" paragraph="Lorem ipsum solor sit amer" src="/audiobook.png" />
          <Card heading="The Worl of Cemy" paragraph="Lorem ipsum solor sit amer" src="/audiobook.png" />
          <Card heading="The Worl of Cemy" paragraph="Lorem ipsum solor sit amer" src="/audiobook.png" />
          <Card heading="The Worl of Cemy" paragraph="Lorem ipsum solor sit amer" src="/audiobook.png" />
          <Card heading="The Worl of Cemy" paragraph="Lorem ipsum solor sit amer" src="/audiobook.png" />
        </div>
      </div>
    </SectionLayout>
  )
}
