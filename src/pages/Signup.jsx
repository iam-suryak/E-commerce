import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem(
      "nexora-user",
      JSON.stringify({
        name: form.name,
        email: form.email,
      })
    );

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 700);
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-5 py-16 dark:bg-gray-950">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900 sm:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Create account
          </h1>

          <p className="mt-2 text-gray-500">
            Join the NEXORA community
          </p>
        </div>

        <form onSubmit={submit} className="mt-8">
          <label className="label">Full Name</label>

          <input
            className="input"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          {errors.name && (
            <p className="error">{errors.name}</p>
          )}

          <label className="label mt-5">Email</label>

          <input
            type="email"
            className="input"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          {errors.email && (
            <p className="error">{errors.email}</p>
          )}

          <label className="label mt-5">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input pr-12"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <label className="label mt-5">
            Confirm Password
          </label>

          <input
            type="password"
            className="input"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
          />

          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button className="btn-primary mt-7 w-full">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}