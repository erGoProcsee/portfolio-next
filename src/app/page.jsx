import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col">
    {/* img container */}
    <div className="h-1/2 relative">
      <Image src="/hero.png" alt="" fill className="object-contain" />
    </div>
    {/* txt container */}
    <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
      {/* title */}
      <h1 className="text-4xl font-bold">
        Craftin
      </h1>
      {/* description */}
      <p className="">
        cogito ergo sum
      </p>
    </div>
  </div>;
};

export default Homepage;
