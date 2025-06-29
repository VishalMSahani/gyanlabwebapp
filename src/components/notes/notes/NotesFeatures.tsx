
const NotesFeatures = () => {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-secondary mb-4 text-center">
        What You&apos;ll Find
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4">
          <div className="text-blue-600 text-2xl mb-2">📚</div>
          <h3 className="font-medium text-primary mb-1">Comprehensive Notes</h3>
          <p className="text-sm text-primary/60">Complete topic coverage for all subjects</p>
        </div>
        <div className="p-4">
          <div className="text-green-600 text-2xl mb-2">📥</div>
          <h3 className="font-medium text-primary mb-1">Easy Downloads</h3>
          <p className="text-sm text-primary/60">PDF format for offline studying</p>
        </div>
        <div className="p-4">
          <div className="text-purple-600 text-2xl mb-2">🎯</div>
          <h3 className="font-medium text-primary mb-1">Exam Focused</h3>
          <p className="text-sm text-primary/60">Aligned with latest curriculum</p>
        </div>
      </div>
    </div>
  );
};

export default NotesFeatures;
