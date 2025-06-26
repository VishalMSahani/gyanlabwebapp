import HSCSection from "@/components/notesBackup/HSCSection";
import { notesData } from "@/data/notesData";

export default function HSCNotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-sans">
      <section className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">HSC (12th Science) Notes</h1>
        <p className="text-secondary text-base sm:text-lg">Download and view subject-wise notes for HSC (12th Science): Physics, Chemistry, Maths, and Biology. All notes are organized for easy access and mobile-friendly viewing.</p>
      </section>
      <HSCSection notesData={notesData.HSC} />
    </div>
  );
} 