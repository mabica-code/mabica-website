import { SectionLayout } from "@/components/section/SectionLayout";

export function Donate() {
  return (
    <SectionLayout>
      <div className="flex justify-center items-center flex-col gap-1 bg-primary py-10 rounded-xl">
        <button className="text-primary shadow hover:shadow-md duration-300 bg-background font-medium rounded-full px-4 py-1">Donation</button>
        <h2 className="font-semibold text-base">Your Donation, Our Future.</h2>
      </div>
    </SectionLayout>
  )
}
