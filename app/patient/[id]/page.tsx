import Link from 'next/link';
import {
  CLINICAL_DRUGS,
  DISEASE_QUICK_TAGS,
  NEXT_VISIT,
  NOTES,
  OUTSIDE_DRUGS,
  PATIENTS,
  SELECTED_TESTS,
  type Patient,
} from '../../patient-data';

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-[0_18px_40px_rgba(14,116,144,0.08)]">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</div>
      {children}
    </section>
  );
}

function PatientHeader({ patient }: { patient: Patient }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-900 px-6 py-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.25)]">
      <div className="space-y-1">
        <div className="text-2xl font-extrabold tracking-tight">{patient.name}</div>
        <div className="text-sm text-slate-200">{patient.nic}</div>
        <div className="text-sm text-slate-200">{patient.reason}</div>
      </div>
      <div className="flex flex-col items-end gap-2 text-right">
        <div className="text-sm text-slate-200">
          Age <span className="text-xl font-extrabold text-white">{patient.age}</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold shadow-[0_12px_24px_rgba(14,165,233,0.35)]">
          {patient.gender}
        </span>
      </div>
    </div>
  );
}

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const patient = PATIENTS.find((p) => p.id === params.id);

  if (!patient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold text-slate-700">Patient not found.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex justify-end">
          <Link
            href="/"
            aria-label="Close"
            className="group inline-flex size-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_14px_30px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <circle cx="12" cy="12" r="11" className="text-slate-700/30" />
              <path d="M9 9l6 6M15 9l-6 6" />
            </svg>
            <span className="sr-only">Close patient view</span>
          </Link>
        </div>

        <div className="mt-4 space-y-6 rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_22px_48px_rgba(14,116,144,0.12)] ring-1 ring-sky-50/60 backdrop-blur">
          <PatientHeader patient={patient} />

          <Section title="Disease">
            <Pills items={DISEASE_QUICK_TAGS} />
          </Section>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Section title="Clinical Drugs">
              <div className="space-y-2">
                {CLINICAL_DRUGS.map((drug) => (
                  <div
                    key={drug}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-100"
                  >
                    <span>{drug}</span>
                    <span className="rounded-full bg-sky-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_24px_rgba(14,165,233,0.28)]">
                      1 Daily
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Medical Tests">
              <Pills items={SELECTED_TESTS} />
            </Section>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Section title="Outside Drugs">
              <div className="space-y-2">
                {OUTSIDE_DRUGS.map((drug) => (
                  <div
                    key={drug.name}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-100"
                  >
                    <div>
                      <div>{drug.name}</div>
                      <div className="text-xs font-semibold text-slate-500">{drug.dose}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-white">{drug.amount} pcs</span>
                      <span className="rounded-full bg-white px-3 py-1 text-slate-700 ring-1 ring-slate-200">{drug.terms}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Special Notes & Next Visit">
              <div className="space-y-2 text-sm font-semibold text-slate-700">
                <div className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-100">Notes: {NOTES}</div>
                <div className="rounded-xl bg-slate-900 px-4 py-3 text-white shadow-[0_14px_32px_rgba(15,23,42,0.25)]">
                  Next Visit Date
                  <div className="text-lg font-extrabold">{NEXT_VISIT}</div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
