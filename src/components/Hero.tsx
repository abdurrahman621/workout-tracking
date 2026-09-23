import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-[#222630] px-4 py-8 lg:px-12 lg:py-10]">
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20 ">

                <div className="max-w-2xl">

                    <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                        Workout Library
                    </p>

                    <h1 className="text-2xl font-black uppercase  tracking-tight text-white sm:text-6xl lg:text-3xl">
                        Train With Intent. Log
                        <br />
                        <span className="text-[#ccff00]">
                            Every Set.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <div className="mt-9">
                        <Link
                            href="#library"
                            className="group inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-[#101010] transition-all duration-300 hover:gap-5 hover:bg-white"
                        >
                            <span>Browse Workouts</span>

                        </Link>
                    </div>

                </div>

                <div className="relative flex justify-end w-full max-w-xl lg:ml-auto">


                    <div className=" ">

                        <Image
                            src="/banner.png"
                            alt="Athlete training in the gym"
                            width={334}
                            height={334}

                        />



                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;