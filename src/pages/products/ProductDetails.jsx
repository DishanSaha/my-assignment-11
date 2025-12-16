import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import UseAuth from "../../hooks/UseAuth";

export default function ProductDetails() {
    const product = useLoaderData();
    // const navigate = useNavigate();
    // const { role } = UseAuth();

    const {
        name,
        image,
        description,
        category,
        price,
        quantity,
        minOrder,
        // paymentOptions,
        // features
    } = product;

    // const canOrder = role !== "admin" && role !== "manager";

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8"
            >
                {/* Image */}
                <img
                    src={image}
                    alt={name}
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />

                {/* Info */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">{name}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>

                    <ul className="space-y-2">
                        <li><b>Category:</b> {category}</li>
                        <li><b>Price:</b> ${price}</li>
                        <li><b>Available:</b> {quantity}</li>
                        <li><b>Minimum Order:</b> {minOrder}</li>
                        {/* <li><b>Payment:</b> {paymentOptions.join(", ")}</li> */}
                    </ul>

                    <div className="mt-4">
                        <h4 className="font-semibold">Features:</h4>
                        <ul className="list-disc ml-5 text-sm text-gray-600">
                            {/* {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))} */}
                        </ul>
                    </div>

                    {/* {canOrder && (
                    <button
                        onClick={() => navigate(`/booking/${product._id}`)}
                        className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:scale-105 transition"
                    >
                        Order / Book Now
                    </button>
                )} */}
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
