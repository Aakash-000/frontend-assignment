import Image from "../public/assets/heroimage.png"

const Hero = () => {
    
  return (
    <section className="min-h-screen w-full flex
    lg:flex-row xs: flex-col sm:flex-col bg-herobg
    gap-10 max-container p-16">
    <div className="flex-0.7 flex-col
    justify-start items-start w-full">
    <h1 className="mt-10
    text-5xl max-sm:text-[36px]
    font-extrabold">
    <span className="xl:bg-white xl:whitespace-wrap
    relative z-10 pr-10">FIND PRODUCT OF EVERY TYPE</span>
    <br/>
    </h1>
    <p className="text-slate-gray 
    text-lg leading-8 mt-6 mb-6 
    sm:max-w-sm">
    Discover stylish product arrivals, quality
    comfort, and innovation for your active life.
    </p>
    <button className="hero-button" type="button">Shop Now</button>
    </div>
    <div className="relative">
    <img
    src={Image.src}
    alt="Shoe Collection"
    className= "object-cover object-center"/>
    </div>
    </section>
  )
}

export default Hero