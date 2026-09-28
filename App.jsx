import { useEffect, useState } from "react";
import AttendanceControls from "./components/AttendanceControls.jsx";
import AttendanceSummary from "./components/AttendanceSummary.jsx";
import LiveClock from "./components/LiveClock.jsx";

const TOTAL = 40;

export default function App() {
  const [present, setPresent] = useState(0);

  const handleAdd = () => setPresent((prev) => Math.min(prev + 1, TOTAL));
  const handleRemove = () => setPresent((prev) => Math.max(prev - 1, 0));
  const handleReset = () => setPresent(0);

  useEffect(() => {
    document.title = `Present: ${present}/${TOTAL}`;
  }, [present]);

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="course">WST 2 · Hands-On Activity 1</p>
          <h1>Attendance Tracker</h1>
          <p className="subtitle">Class size: {TOTAL} students</p>
        </div>
        <LiveClock />
      </header>

      <AttendanceSummary present={present} total={TOTAL} />

      <AttendanceControls
        present={present}
        total={TOTAL}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onReset={handleReset}
      />
    </main>
  );
}
