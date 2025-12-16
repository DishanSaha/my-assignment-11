
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxios from "../../hooks/UseAxios";

export default function Login() {
    const { signInUser, signInGoogle } = UseAuth();
    const axiosSecure = UseAxios();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(async (result) => {
                const user = result.user;
                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome back to TexTrack",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                // firebase jwt token--
                const token = await user.getIdToken()

                // console.log("JWT Token:", token);

                // Send to the backend”
                const userInfo = {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    role: "buyer",
                    status: "pending",
                }

                // Send user info to backend
                const res = await axiosSecure.post("/users", userInfo, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log("User data stored:", res.data);

                // Navigate after login
                navigate(location.state?.from || "/");

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Login Failed!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonText: "Okay"
                })
            })
    }

    const handleSubmitLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Forgot password----

    return (
        <>
            <Link to='/'>
                <div className="lg:p-5 p-3 bg-base-200 flex items-center gap-1 ">
                    {/* Logo Text */}
                    <span className="text-2xl text-primary font-bold tracking-tight">
                        <span className="text-secondary text-3xl">T</span>ex<span className="text-secondary">T</span>rack
                    </span>
                </div>
            </Link>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-primary">
                <Toaster />

                {/* LOGIN FORM */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex items-center justify-center px-4 order-2 md:order-1">
                    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                        <form
                            onSubmit={handleSubmit(handleSubmitLogin)}
                            className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block mb-1 font-semibold">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-1 font-semibold">Password</label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", { required: "Password is required" })}
                                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    />

                                    {/* Eye Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-end -mt-3">
                                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-secondary transition"
                            >
                                Login
                            </button>
                        </form>

                        {/* OR DIVIDER */}
                        <div className="flex items-center my-4">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="px-2 text-gray-500">Or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                className="w-5 h-5"
                                alt="google"
                            />
                            Login with Google
                        </button>

                        {/* Register Link */}
                        <p className="text-center text-gray-500 mt-5">
                            Don't have an account?{" "}
                            <a href="/register" className="text-blue-600 font-semibold hover:underline">
                                Register
                            </a>
                        </p>
                    </div>
                </motion.div>

                {/* VIDEO SECTION */}
                <div className="hidden md:flex items-center justify-center p-6 order-1 md:order-2">
                    <motion.video
                        src="/src/assets/gs19VLk69nt8X6nc5t.mp4"
                        autoPlay
                        loop
                        muted
                        className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                </div>
            </div>
        </>
    );
}
