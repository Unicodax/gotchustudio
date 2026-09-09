import { CheckCircle2 } from "lucide-react";

export default function FormStatus({ onReset }) {
  return (
    <div className="rounded-lg border border-hairline bg-white p-10 text-center" role="status">
      <CheckCircle2 size={40} className="mx-auto text-confirm" aria-hidden="true" />
      <h2 className="mt-5 text-2xl font-display font-semibold text-ink">Thanks — that's on its way.</h2>
      <p className="mt-3 text-muted max-w-sm mx-auto leading-relaxed">
        We've got your project details. Someone from the team will get back to you within one
        business day.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-medium text-signal hover:text-signal-dark transition-colors"
      >
        Send another enquiry
      </button>
    </div>
  );
}
