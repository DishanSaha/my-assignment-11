import React from 'react'
import { motion } from "framer-motion";
export default function FactoryWorkflow() {
    return (
        <div>

            {/* Factory Production Workflow Overview Section */}
            <section className="bg-gray-100 text-gray-900 py-20 px-5 md:px-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-primary inline-block pb-2">
                        Factory Production Workflow Overview
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-10">
                        Our production workflow is designed for maximum efficiency, covering
                        all steps from cutting, sewing, finishing, and quality control.
                    </p>

                    {/* Workflow Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Order Received" },
                            { step: "02", title: "Cutting & Preparation" },
                            { step: "03", title: "Sewing & Assembly" },
                            { step: "04", title: "Finishing & Delivery" },
                        ].map((item) => (
                            <motion.div
                                key={item.step}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:bg-primary/40"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-3xl font-bold text-secondary mb-3">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
