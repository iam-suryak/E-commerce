import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Lightbulb,
  Users,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We create technology that solves real everyday problems.",
    },
    {
      icon: Heart,
      title: "Customer First",
      text: "Every product is designed around the people who use it.",
    },
    {
      icon: Award,
      title: "Quality",
      text: "We focus on reliable products with thoughtful design.",
    },
    {
      icon: Users,
      title: "Community",
      text: "We believe technology should connect people.",
    },
  ];

  return (
    <main>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container-custom py-24 text-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            About NEXORA
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black sm:text-6xl">
            Technology for the way you live.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            We believe great technology should be powerful,
            accessible and simple to use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
            alt="Team"
            className="h-[450px] w-full rounded-3xl object-cover"
          />

          <div>
            <p className="font-bold uppercase tracking-widest text-primary">
              Our story
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Built for everyday moments.
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              NEXORA is a fictional consumer technology brand
              focused on making smart devices more approachable.
              From audio products to wearable technology, our
              goal is to combine useful features with clean,
              modern design.
            </p>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
              We are constantly exploring new ways to make
              technology more enjoyable, reliable and accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black">
              What we believe
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 dark:bg-gray-900"
                >
                  <Icon className="text-primary" size={32} />

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}