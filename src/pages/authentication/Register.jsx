import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";


export default function RegisterPage() {
    const {
        register,
        // handleSubmit,
        formState: { errors },

    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    // Submit Handler
    // const onSubmit = (data) => {
    //     console.log(data);

    //     toast.success("Registration Successful!", {
    //         position: "top-center",
    //     });

    //     reset();
    // };

    return (
        <>
            <Toaster />
            <div className="bg-primary h-[850px]">
                {/* Logo */}
                <Link to="/">
                    <div className="lg:p-5 p-3 bg-base-200 flex items-center gap-1">
                        <span className="text-2xl text-primary font-bold tracking-tight">
                            <span className="text-secondary text-3xl">T</span>ex
                            <span className="text-secondary">T</span>rack
                        </span>
                    </div>
                </Link>

                {/* Grid Layout */}
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                    {/* LEFT — Register Form */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="flex items-center justify-center px-4 order-2 md:order-1">
                        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-3xl font-bold text-center mb-6">Register Now</h2>

                            <form className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block mb-1 font-semibold">Name</label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

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

                                {/* Photo */}
                                <div>
                                    <label className="block mb-1 font-semibold">Photo</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register("photo", { required: "Photo is required" })}
                                        className="w-full p-3 border rounded-xl bg-gray-50 cursor-pointer"
                                    />
                                    {errors.photo && (
                                        <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                                    )}
                                </div>

                                {/* Role */}
                                <div>
                                    <label className="block mb-1 font-semibold">Role</label>
                                    <select
                                        {...register("role", { required: "Select a role" })}
                                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="manager">Manager</option>
                                        <option value="operator">Operator</option>
                                        <option value="viewer">Viewer</option>
                                    </select>
                                    {errors.role && (
                                        <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                                    )}
                                </div>

                                {/* Hidden Status */}
                                <input type="hidden" value="pending" {...register("status")} />

                                {/* Password */}
                                <div>
                                    <label className="block mb-1 font-semibold">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters",
                                                },
                                                validate: {
                                                    hasUpper: v => /[A-Z]/.test(v) || "Must include uppercase letter",
                                                    hasLower: v => /[a-z]/.test(v) || "Must include lowercase letter",
                                                }
                                            })}
                                        />

                                        {/* Eye Icon */}
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

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-secondary transition"
                                >
                                    Register
                                </button>
                            </form>

                            {/* Login Link */}
                            <p className="text-center text-gray-500 mt-5">
                                Already have an account?
                                <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — Video Section */}
                    <div className="hidden md:flex items-center justify-center p-6 order-1 md:order-2">
                        <motion.video
                            src="/src/assets/z23k2bLpY84Otrux5D.mp4"
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

            </div>
        </>
    );
}
