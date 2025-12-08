// import React, { useEffect } from "react";
import { motion } from "framer-motion";
export default function HeroBanner() {
    // useEffect(() => {
    //     const img = new Image();
    //     img.src = 'https://i.ibb.co.com/3mzzHrRy/2303-i039-019-F-m004-c9-sustainable-clothes-slow-fashion-isometric.jpg'
    // }, [])

    return (
        <section className="relative my-10 bg-primary/80">
            <div className="max-w-7xl mx-auto px-4 py-16 lg:py-0 h-full flex flex-col lg:flex-row items-center lg:items-stretch gap-8">

                {/* Left Side: Content */}
                <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10">
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Streamline Your Garments Production
                    </motion.h1>

                    {/* Animated Paragraph */}
                    <motion.p
                        className="text-lg md:text-xl text-white mb-8 max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        Track orders, manage inventory, and optimize production workflow with TexTrack – your ultimate Garments Order & Production Tracker System.
                    </motion.p>

                    {/* Animated Buttons */}
                    <motion.div
                        className="flex justify-center lg:justify-start gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <motion.a
                            href="/products"
                            className="bg-[#7700fe] hover:bg-[#4E56C0] text-white font-semibold px-6 py-3 rounded-md transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Products
                        </motion.a>
                        <motion.a
                            href="/contact"
                            className="bg-transparent border-2 border-[#7700fe] text-[#7700fe] hover:bg-[#7700fe] hover:text-white font-semibold px-6 py-3 rounded-md transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Product
                        </motion.a>
                    </motion.div>
                </div>


                {/* VIDEO SECTION */}
                <div className=" md:flex items-center justify-center p-6 order-1 md:order-2">
                    <motion.video
                        src="/src/assets/i3Yn4O089ntH173iD4.mp4"
                        autoPlay
                        loop
                        muted
                        className="rounded-3xl w-full lg:h-[500px] h-[300px] object-cover shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                </div>

            </div>
        </section>

    );
}
