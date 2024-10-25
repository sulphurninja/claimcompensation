import Link from "next/link";

// components/Hero.jsx
export default function Hero() {
    return (
        <section className="bg-white -100">
            <div className="container mx-auto flex flex-col items-center text-center py-16">
                <div className="md:flex justify-between">
                    <div>
                        <h1 className="text-4xl md:mt-12 font-bold text-[#8e6a17]">Claim Your Medical Compensation</h1>
                        <h1 className="text-2xl mt-4 font-bold text-gray-800"> What is Mass Tort Action?</h1>

                        <p className="text-sm mt-4 text-start ml-8 text-gray-400">Simply put, when a lawsuit involves multiple plaintiffs against one or more defendants, it is known as a mass tort action. In other words, a mass tort is civil litigation that consists of a single accidental or intentional action that causes many people to sustain injuries. The biggest benefit of joining a mass tort claim is that it increases your chances of recovering damages from entities such as product and pharmaceutical manufacturers. Mass tort actions are different from class actions because each plaintiff’s case will be reviewed individually.</p>

                        <div className="mt-8 space-x-4">
                            <Link href='/get-help'>
                                <button className="bg-[#8e6a17] text-white py-2 px-6 rounded-lg">Learn More</button>
                            </Link>
                            <Link href='/contact-us'>
                                <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg">Contact Us</button>
                            </Link>
                        </div>
                    </div>

                    <img src="/girl.avif" className="h-96 md:ml-56 ml-8" />
                </div>

                <div className="flex justify-start">



                </div>
            </div>
        </section>
    );
}
