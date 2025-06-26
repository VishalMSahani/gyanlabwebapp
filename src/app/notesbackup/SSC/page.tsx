import SSCSection from "@/components/notesBackup/SSCSection";
import { notesData } from "@/data/notesData";

export default function SSCNotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 font-sans">
      <section className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">SSC (10th) Notes</h1>
        <p className="text-secondary text-base sm:text-lg">Download and view subject-wise notes for SSC (10th): English, Maths, Science, History, and Geography. All notes are organized for easy access and mobile-friendly viewing.</p>
      </section>
      <SSCSection notesData={notesData.SSC} />
    </div>
  );
} 