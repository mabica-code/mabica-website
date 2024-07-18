import { SectionLayout } from "@/components/section/SectionLayout";
import Image from "next/image"

export function Banner() {
  return (
    <SectionLayout>
      <Image className="rounded-xl" alt="Banner" width="1200" height="600" src="/banner.png"/>
    </SectionLayout>
  )
}
