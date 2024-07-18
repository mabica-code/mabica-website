type props = {
  children: React.ReactNode;
  className?: string;
  paddingY?: string
}

export function SectionLayout({children, className, paddingY = "py-10"}: props) {
  return (
    <section className={`${className} max-w-screen-2xl relative mx-auto px-[7%] ${paddingY}`} >
      {children}
    </section >
  )
}
