// TODO 2: Receive the callbacks from App through props:
//         ({ present, total, onAdd, onRemove, onReset })
// This component must NOT have its own state. It only calls the functions it receives.
export default function AttendanceControls({ present, total }) {
  return (
    <section className="controls" aria-label="Attendance controls">
      {/* TODO 2: add onClick={onAdd} and disable the button when present >= total */}
      <button className="btn btn-primary">+ Present</button>

      {/* TODO 2: add onClick={onRemove} and disable the button when present <= 0 */}
      <button className="btn">− Present</button>

      {/* BONUS: add onClick={onReset} */}
      <button className="btn btn-reset">Reset</button>
    </section>
  );
}
