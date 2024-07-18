import { SectionLayout } from "./SectionLayout";
import Image from "next/image"

export function Footer() {
  return (
    <SectionLayout>
      <footer className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">

          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-8">
                <Image src="logo.svg" alt="Logo" width="64" height="64" className="w-full aspect-square" />
              </div>
              <span className="text-text2 font-semibold">Mabica Creative Studio</span>
            </div>
            <p className="text-text2">Lazy to read? Just Listen, <br /> Stories Await.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-medium">Social Media</h3>
              <ul className="text-text2">
                <li>Tiktok</li>
                <li>Instagram</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Contact</h3>
              <ul className="text-text2">
                <li>+62 9876 765 542</li>
                <li>mabica.creative@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>


      <div className="flex flex-col gap-2 justify-between items-center">
        <p className="text-text2">© 2024 Mabica Group. All Rights Reserved.</p>
        <button className="text-primary shadow w-full hover:shadow-md duration-300 bg-background rounded-full px-4 py-1 font-medium">Start Our Story</button>
      </div>
    </footer>
    </SectionLayout >
  )
}
