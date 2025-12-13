import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-base-200 pt-20 pb-16 px-5 lg:px-20">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        About Us
                    </h1>
                    <p className="text-gray-600 text-lg">
                        We provide next-generation digital solutions for garment factories to track,
                        monitor, and optimize their daily production workflow efficiently.
                    </p>
                </motion.div>

                {/* Mission + Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-3xl shadow-xl p-8 border"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to simplify factory management by providing a powerful,
                            user-friendly platform that helps small and medium garment factories keep
                            track of orders, production, inventory, and delivery schedules—all in one place.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-3xl shadow-xl p-8 border"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We aim to become an industry-leading platform that revolutionizes garment
                            production through automation, real-time data tracking, and industrial-level accuracy.
                        </p>
                    </motion.div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                        Why Choose Us?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-3xl border shadow-lg text-center"
                        >
                            <h3 className="text-xl font-semibold mb-3">Industrial Accuracy</h3>
                            <p className="text-gray-600">
                                Every data point is tracked in real-time with factory-grade precision.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-3xl border shadow-lg text-center"
                        >
                            <h3 className="text-xl font-semibold mb-3">Smart Management</h3>
                            <p className="text-gray-600">
                                Manage orders, inventory & production workflow from one smart dashboard.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0 }}
                            className="bg-white p-8 rounded-3xl border shadow-lg text-center"
                        >
                            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our team provides constant support for smooth production operations.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Image / Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <img
                        src="https://i.ibb.co/3mzzHrRy/2303-i039-019-F-m004-c9-sustainable-clothes-slow-fashion-isometric.jpg"
                        alt="Garments illustration"
                        className="rounded-3xl shadow-xl w-full max-w-3xl object-cover"
                    />
                </motion.div>

            </div>
            <Footer />
        </>
    );
}
