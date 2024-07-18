import { SectionLayout } from "@/components/section/SectionLayout";
import Image from "next/image"

export function About() {
  return (
    <SectionLayout>
      <div className="rounded-2xl p-5 backdrop-blur-lg w-full flex flex-col gap-2 shadow-xl">
        <div className="flex flex-col">
          <h2 className="font-semibold text-base">#About Us</h2>
          <p className="text-text2">Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.</p>
        </div>
        <Image alt="About Us Image" width="500" height="500" src="/about-us.png" className="scale-125" />
      </div>
    </SectionLayout>
  )
}
