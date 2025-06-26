import FYJCSection from "@/components/notesBackup/FYJCSection";
import { notesData } from "@/data/notesData";

export default function FYJCNotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-sans">
      <section className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">FYJC (11th Science) Notes</h1>
        <p className="text-secondary text-base sm:text-lg">Download and view subject-wise notes for FYJC (11th Science): Physics, Chemistry, Maths, and Biology. All notes are organized for easy access and mobile-friendly viewing.</p>
      </section>
      <FYJCSection notesData={notesData.FYJC} />
    </div>
  );
} 