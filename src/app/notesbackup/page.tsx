import Link from "next/link";
import { GraduationCap, FlaskConical, Book } from "lucide-react";

const standards = [
  {
    name: "HSC (12th Science)",
    path: "/notes/HSC",
    description: "Physics, Chemistry, Maths, Biology notes for 12th Science.",
    icon: GraduationCap,
  },
  {
    name: "FYJC (11th Science)",
    path: "/notes/FYJC",
    description: "Physics, Chemistry, Maths, Biology notes for 11th Science.",
    icon: FlaskConical,
  },
  {
    name: "SSC (10th)",
    path: "/notes/SSC",
    description: "English, Maths, Science, History, Geography notes for 10th.",
    icon: Book,
  },
];

export default function NotesLandingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 font-sans">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight text-primary">Notes by Standard</h1>
        <p className="text-lg mb-6 text-secondary">Select your standard to view and download subject-wise notes. All notes are organized for easy access and mobile-friendly viewing.</p>
      </section>
      <div className="flex flex-col gap-8">
        {standards.map((std, idx) => {
          const Icon = std.icon;
          const isEven = idx % 2 === 1;
          return (
            <Link
              key={std.name}
              href={std.path}
              className={`group flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl p-6 bg-primary/10 hover:bg-primary/20 border border-primary/20 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isEven ? 'sm:flex-row-reverse' : ''}`}
              tabIndex={0}
            >
              <div className="flex-1 text-center sm:text-left">
                <div className="text-2xl font-bold mb-1 text-primary">{std.name}</div>
                <div className="text-base text-secondary">{std.description}</div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all">
                <Icon className="w-10 h-10 text-primary" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 