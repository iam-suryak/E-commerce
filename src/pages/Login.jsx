import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();

    const [showpassword, setShowpassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must contain at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const submit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        localStorage.setItem("nexora-user", form.email);

        toast.success("Login successful!");

        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    return (
        <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-5 py-16 dark:bg-gray-950">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900 sm:p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-black">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Login to your NEXORA account
                    </p>
                </div>

                <form onSubmit={submit} className="mt-8">
                    <label className="label">Email</label>

                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value,
                            })
                        }
                        className="input"
                        placeholder="you@example.com"
                    />

                    {errors.email && (
                        <p className="error">{errors.email}</p>
                    )}

                    <label className="label mt-5">Password</label>

                    <div className="relative">
                        <input
                            type={showpassword ? "text" : "password"}
                            value={form.password}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    password: e.target.value,
                                })
                            }
                            className="input pr-12"
                            placeholder="••••••••"
                        />

                        <button
                            type="button"
                            onClick={() => setShowpassword(!showpassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {showpassword ? (
                                <EyeOff size={19} />
                            ) : (
                                <Eye size={19} />
                            )}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="error">
                            {errors.password}
                        </p>
                    )}

                    <button className="btn-primary mt-7 w-full">
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-bold text-primary"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}