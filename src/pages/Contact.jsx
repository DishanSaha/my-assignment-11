import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'


const position = [23.6850, 90.3563]

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Message sent successfully!");
        reset();
    };
    const serviceCenters = useLoaderData();
    const mapRef = useRef();
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-base-200 pt-20 pb-16 px-5 lg:px-20">
                <Toaster />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Have questions or need support? We're here to help anytime.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-lg p-8 text-center border"
                    >
                        <Mail className="w-10 h-10 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">support@textrack.com</p>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-lg p-8 text-center border"
                    >
                        <Phone className="w-10 h-10 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+880 1234 567 890</p>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-lg p-8 text-center border"
                    >
                        <MapPin className="w-10 h-10 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">
                            Dhaka, Bangladesh
                        </p>
                    </motion.div>
                </div>

                {/* Contact Form + Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-lg border"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-primary">Send us a message</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="font-semibold">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="font-semibold">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="font-semibold">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    {...register("message", { required: "Message is required" })}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-xl hover:bg-secondary transition font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="border rounded-3xl shadow-lg overflow-hidden w-full 
                        h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">

                            <MapContainer
                                center={position}
                                zoom={8}
                                scrollWheelZoom={false}
                                className="h-full w-full"
                                ref={mapRef}
                            >
                                <TileLayer
                                    attribution='&copy; OpenStreetMap contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {serviceCenters.map((center, index) => (
                                    <Marker
                                        key={index}
                                        position={[center.latitude, center.longitude]}
                                    >
                                        <Popup>
                                            {center.district} <br />
                                            Service Area : {center.covered_area.join(', ')}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>

                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
}
