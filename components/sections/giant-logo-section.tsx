import Image from "next/image"

export default function GiantLogoSection() {
  return (
    <section className="w-full pb-12 pt-0 flex justify-center items-center bg-white overflow-hidden">
      <div className="relative w-full max-w-[100vw] md:max-w-[70vw] px-4">
        <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-white to-transparent z-10" />
        <Image
          src="/BAM LOGO1.svg"
          alt="Boston Asset Manager Logo"
          width={1080}
          height={460}
          className="w-full h-auto object-contain opacity-70"
          priority
        />
      </div>
    </section>
  )
}
