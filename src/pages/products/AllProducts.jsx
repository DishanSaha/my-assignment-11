import React from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AllProducts() {
    const productsData = useLoaderData(); // assumes loader returns an array of products
    console.log(productsData);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 p-5 lg:p-20">
                <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {productsData && productsData.length > 0 ? (
                        productsData.map((product) => (
                            <motion.div
                                key={product._id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col cursor-pointer"
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-5 flex flex-col flex-1">
                                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-500 mb-1">{product.category}</p>
                                    <p className="text-green-600 font-semibold mb-1">${product.price}</p>
                                    <p className="text-gray-600 mb-4">Available: {product.quantity}</p>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="mt-auto text-center py-2 bg-primary text-white rounded-xl hover:bg-secondary transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">
                            No products found.
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}









