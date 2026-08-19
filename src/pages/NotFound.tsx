import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center"
    >
      <p
        aria-hidden="true"
        className="text-8xl font-bold tracking-tighter text-accent/20 sm:text-9xl"
      >
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110"
        aria-label="Go back to the home page"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>
    </motion.div>
  );
}
