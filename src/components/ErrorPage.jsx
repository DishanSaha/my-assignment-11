import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">

            {/* VIDEO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                <video
                    src="/src/assets/BO1aV5W3EM9gU32P47.mp4"
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl w-full lg:h-[400px] h-[300px] object-cover shadow-lg"
                />
            </motion.div>

            <p className="text-2xl md:text-xl text-gray-600 mt-3">
                Oops! The page you're looking for doesn't exist.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-3">
                {/* Go Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-primary w-full md:w-auto"
                >
                    Go Back
                </button>

                {/* Go Home */}
                <Link
                    to="/"
                    className="btn btn-secondary w-full md:w-auto"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
