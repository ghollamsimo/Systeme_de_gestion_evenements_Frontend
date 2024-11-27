import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                        The Event Website You’ve Dreamed Of{" "}
                        <span
                            className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white"
                        >
              Just In Time
            </span>
                        .
                    </h1>
                    <p className="mx-auto h-fit mb-5 max-w-[528px] text-lg text-gray-600 lg:mb-8">
                        Transform your ideas into reality with a beautifully crafted and
                        engaging event website that stands out.
                    </p>

                </div>
            </div>
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
                alt="Background Pattern 1"
                className="absolute bottom-0 left-0 -z-10 md:bottom-1/2"
            />
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
                alt="Background Pattern 2"
                className="absolute top-0 right-0 -z-10 hidden sm:block"
            />

        </section>
    );
};
