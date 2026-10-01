import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validate()) return;

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <main className="section">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Let’s talk.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Have a question about our products? Send us a
            message.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-8 dark:bg-gray-900">
            <h2 className="text-2xl font-black">
              Get in touch
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="icon-box">
                  <Mail />
                </div>

                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-500">
                    hello@nexora.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="icon-box">
                  <Phone />
                </div>

                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-500">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="icon-box">
                  <MapPin />
                </div>

                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-gray-500">
                    123 Innovation Street
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitForm}
            className="rounded-3xl border border-gray-200 p-8 dark:border-gray-800"
          >
            <div>
              <label className="label">Name</label>

              <input
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="input"
                placeholder="Your name"
              />

              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>

            <div className="mt-5">
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
            </div>

            <div className="mt-5">
              <label className="label">Message</label>

              <textarea
                rows="6"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="input resize-none"
                placeholder="How can we help?"
              />

              {errors.message && (
                <p className="error">{errors.message}</p>
              )}
            </div>

            <button className="btn-primary mt-6 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}