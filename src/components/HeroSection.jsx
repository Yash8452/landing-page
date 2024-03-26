import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="w-full h-[90vh]  flex items-center justify-center gap-5">
      <div className=" flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl text-orange-600">Lorem.</p>
        <p className="text-4xl font-bold animate-pulse md:text-7xl">
          Lorem, ipsum dolor.
        </p>
        <p className="mt-4 p-2 md:pl-40 md:pr-40 text-center max-w-4xl text-base text-gray-600 md:text-xl italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quos distinctio beatae! Exercitationem totam pariatur aut iure sed
          unde sit ab molestiae suscipit deserunt. Temporibus perspiciatis
          accusamus totam facilis recusandae!
        </p>
        <button className="flex rounded hover:animate-bounce items-center justify-center gap-2 text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
          <span>Get Started</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
export default HeroSection;
