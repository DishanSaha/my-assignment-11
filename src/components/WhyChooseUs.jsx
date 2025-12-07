// File: HomeSections.js
import React from "react";
import { motion } from "framer-motion";

export default function HomeSections() {
    return (
        <div className="w-full">

            {/* Why Choose Us Section */}
            <section className="bg-primary text-white py-20 px-5 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-yellow-500 inline-block pb-2">
                        Why Choose Us
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        We provide industrial-level garment production tracking that ensures
                        efficiency, timely delivery, and complete transparency in every stage
                        of manufacturing.
                    </p>
                    <ul className="space-y-3 md:space-y-5 list-disc list-inside text-gray-300">
                        <li>End-to-end production tracking</li>
                        <li>Real-time order monitoring</li>
                        <li>Optimized workflow management</li>
                        <li>High-quality garment output</li>
                    </ul>
                </motion.div>
            </section>

        </div>
    );
}
