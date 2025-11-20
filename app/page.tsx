'use client';

import React, { useMemo, useState } from 'react';

type IconRenderer = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface Patient {
  id: string;
  name: string;
  nic: string;
  time: string;
  reason: string;
  age: number;
  gender: 'Male' | 'Female';
  relationship: string;
  phone: string;
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const SearchIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <circle cx={11} cy={11} r={7} />
    <path d="M16.5 16.5L21 21" />
  </svg>
);

const MicIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M12 15a3 3 0 003-3V8a3 3 0 10-6 0v4a3 3 0 003 3z" />
    <path d="M6.5 11a5.5 5.5 0 0011 0M12 15.5V19M9.5 19h5" />
  </svg>
);

const PhoneIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M6 3h2l1 5-2 2a11 11 0 005 5l2-2 5 1v2a2 2 0 01-2 2 16 16 0 01-16-16 2 2 0 012-2z" />
  </svg>
);

const NavUserIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <circle cx={12} cy={7} r={3.5} />
    <path d="M6 20c.6-3.2 3.1-5.5 6-5.5s5.4 2.3 6 5.5" />
    <path d="M9 14h6" />
  </svg>
);

const AssistantIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M4 10.5l2.2-4.5h11.6l2.2 4.5" />
    <path d="M6.5 10.5v4.8a5.5 5.5 0 0011 0v-4.8" />
    <path d="M12 9v2.3M10.7 10.2h2.6" />
  </svg>
);

const PatientsIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M6 7h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
    <path d="M9 4h6l1 3H8l1-3z" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

const StatsIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M5 20h14" />
    <path d="M8 16V9" />
    <path d="M12 16V6" />
    <path d="M16 16v-4" />
  </svg>
);

const InventoryIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M3 7v10l9 4 9-4V7" />
    <path d="M12 11v10" />
  </svg>
);

const ChatIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M6 6h12a3 3 0 013 3v5a3 3 0 01-3 3h-2.5L12 20.5 10.5 17H6a3 3 0 01-3-3V9a3 3 0 013-3z" />
    <path d="M9 11h6M9 14h4" />
  </svg>
);

const LogoutIcon: IconRenderer = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M15 7l5 5-5 5" />
    <path d="M10 12h10" />
    <path d="M4 5v14" />
  </svg>
);

const SHADOWS = {
  card: 'shadow-[0_18px_42px_rgba(28,63,99,0.08)]',
  inset: 'shadow-[inset_0_1px_0_rgba(15,23,42,0.06)]',
  primaryGlow: 'shadow-[0_12px_24px_rgba(14,165,233,0.25)]',
  tooltip: 'shadow-[0_12px_24px_rgba(15,23,42,0.18)]',
  roseTooltip: 'shadow-[0_12px_24px_rgba(244,63,94,0.25)]',
} as const;

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-[26px] border border-white/70 bg-white/85 backdrop-blur-xl ring-1 ring-white/60 ${SHADOWS.card} ${className}`}
  >
    {children}
  </div>
);

export default function MedLinkDoctorDashboard() {
  const patients = useMemo<Patient[]>(
    () => [
      {
        id: 'p1',
        name: 'J Sugathadasa',
        nic: 'NIC 61524862V',
        time: '5.00 PM',
        reason: 'Fever',
        age: 70,
        gender: 'Male',
        relationship: 'Father',
        phone: '077 308 30 49',
      },
      {
        id: 'p2',
        name: 'Dr Aparajitha',
        nic: 'NIC 64524862V',
        time: '5.10 PM',
        reason: 'Cardiac',
        age: 62,
        gender: 'Female',
        relationship: 'Aunt',
        phone: '077 308 30 49',
      },
      {
        id: 'p3',
        name: 'Jayadevapura',
        nic: 'NIC 78522862V',
        time: '5.20 PM',
        reason: 'Stomach',
        age: 68,
        gender: 'Male',
        relationship: 'Brother',
        phone: '077 308 30 49',
      },
      {
        id: 'p4',
        name: 'Neethu Sittronra',
        nic: 'NIC 71524862V',
        time: '5.30 PM',
        reason: 'Fever',
        age: 63,
        gender: 'Female',
        relationship: 'Sister',
        phone: '077 308 30 49',
      },
      {
        id: 'p5',
        name: 'Rao U Vemmayanighe',
        nic: 'NIC 77524862V',
        time: '5.40 PM',
        reason: 'Headache',
        age: 76,
        gender: 'Male',
        relationship: 'Father',
        phone: '077 308 30 49',
      },
      {
        id: 'p6',
        name: 'Mahinda Rajapakshe',
        nic: 'NIC 716189026',
        time: '5.50 PM',
        reason: 'Headache',
        age: 66,
        gender: 'Male',
        relationship: 'Father',
        phone: '077 308 30 49',
      },
    ],
    []
  );

  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string>('p6');
  const [gender, setGender] = useState<'Male' | 'Female'>(patients[5]?.gender ?? 'Male');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nic.toLowerCase().includes(q) ||
        p.reason.toLowerCase().includes(q) ||
        p.relationship.toLowerCase().includes(q)
    );
  }, [patients, search]);

  const selected = useMemo(() => patients.find((p) => p.id === selectedId) ?? patients[0], [patients, selectedId]);

  const clinicalRows = useMemo(
    () => [
      { drug: 'Ibuprofen', dose: '250MG', terms: '1 DAILY', amount: 2 },
      { drug: 'Naproxen', dose: '250MG', terms: '1 DAILY', amount: 2 },
      { drug: 'Acetaminophen', dose: '250MG', terms: '2 Hourly', amount: 3 },
    ],
    []
  );

  const outsideRows = useMemo(() => [{ drug: 'Paracetamol', dose: '250MG', terms: 'Hourly', amount: 2 }], []);
  const medicalTests = useMemo(() => ['F.B.C', 'Colestrol', 'Head MRI'], []);
  const clinicalQuick = useMemo(() => ['Ibuprofen', 'Naproxen'], []);

  return (
    <div className="relative flex min-h-screen w-full bg-gradient-to-br from-[#e9f4ff] via-[#f7fbff] to-[#eef3ff] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_25%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.1),transparent_35%)]" />

      <div className="relative flex min-h-screen flex-1 flex-col px-5 py-6 lg:px-8">
        <main className="mx-auto flex w-full max-w-[1700px] flex-1 overflow-hidden">
          <div className="grid h-full w-full grid-cols-12 gap-6">
            {/* Left column */}
            <div className="col-span-8 space-y-5 overflow-hidden">
              <Card className="p-6">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-[15px] font-semibold text-slate-600">{selected.relationship}</div>
                        <div className="text-3xl font-semibold text-slate-900">{selected.name}</div>
                        <div className="text-sm text-slate-500">{selected.nic}</div>
                      </div>
                      <button className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-white">
                        History
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-slate-100">
                        <span>Age</span>
                        <span className="text-xl text-slate-900">{selected.age}</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sky-700 ring-1 ring-sky-200">
                        Gender {gender}
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
                        <PhoneIcon className="size-3.5 text-slate-500" /> {selected.phone}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_25px_40px_rgba(15,23,42,0.35)]">
                    <svg {...iconProps} className="size-9">
                      <circle cx={12} cy={8} r={3.5} />
                      <path d="M7 19.5c.7-3.3 3.1-5.5 5-5.5s4.3 2.2 5 5.5" />
                      <path d="M9.5 13h5" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-4">
                  <div className="col-span-8">
                    <div className="rounded-3xl bg-slate-50/60 p-4 ring-1 ring-white/70">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span className="text-base text-slate-900">Diagnosis</span>
                        <span className="text-xs text-slate-500">Search Diagnosis</span>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="relative flex-1">
                          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                          <input
                            placeholder="Search Diagnosis"
                            className={`w-full rounded-2xl border border-transparent bg-white px-10 py-3 text-sm text-slate-900 ${SHADOWS.inset} outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100`}
                          />
                          <MicIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                        </div>
                        <button className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600">
                          Diagnosis
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4">
                    <div className="h-full rounded-3xl bg-white/90 p-4 ring-1 ring-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                        <div className="flex items-center justify-between">
                          <div className="text-base font-semibold text-slate-900">Medical Test</div>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500">3 Tests</span>
                        </div>
                      <div className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                        {medicalTests.map((test) => (
                          <span key={test} className="inline-flex items-center rounded-xl bg-slate-50 px-3 py-2 shadow-sm ring-1 ring-slate-100">
                            {test}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3">
                        <label className="text-xs font-semibold text-slate-500">Pre saved medical test</label>
                        <div className="relative mt-2">
                          <input
                            placeholder="Search medical test"
                            className={`w-full rounded-xl border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 ${SHADOWS.inset} outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-100`}
                          />
                          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8 space-y-5">
                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold text-slate-900">Clinical Drugs</div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">3 items</span>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
                      <div className="grid grid-cols-4 gap-2 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <div>Drug Name</div>
                        <div>Dose</div>
                        <div>Terms</div>
                        <div>Amount</div>
                      </div>
                      <div className="divide-y divide-slate-100 text-sm text-slate-900">
                        {clinicalRows.map((row) => (
                          <div key={row.drug} className="grid grid-cols-4 gap-2 bg-white px-4 py-3">
                            <div>{row.drug}</div>
                            <div>{row.dose}</div>
                            <div>{row.terms}</div>
                            <div>{row.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold text-slate-900">Outside Drugs</div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">1 item</span>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
                      <div className="grid grid-cols-4 gap-2 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <div>Drug Name</div>
                        <div>Dose</div>
                        <div>Terms</div>
                        <div>Amount</div>
                      </div>
                      <div className="divide-y divide-slate-100 text-sm text-slate-900">
                        {outsideRows.map((row) => (
                          <div key={row.drug} className="grid grid-cols-4 gap-2 bg-white px-4 py-3">
                            <div>{row.drug}</div>
                            <div>{row.dose}</div>
                            <div>{row.terms}</div>
                            <div>{row.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-span-4 space-y-5">
                  <div className="h-full rounded-3xl bg-white/90 p-5 ring-1 ring-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    <div className="space-y-3 text-sm font-semibold text-slate-700">
                      {clinicalQuick.map((item) => (
                        <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 shadow-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        <span>↪</span> Use same drugs
                      </button>
                      <p className="mt-2 text-center text-xs text-slate-500">Clinical Drugs From previous history</p>
                    </div>
                  </div>

                  <div className="h-full rounded-3xl bg-white/90 p-5 ring-1 ring-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    <div className="text-sm font-semibold text-slate-500">Outside Drugs</div>
                    <div className="text-2xl font-semibold text-slate-900">Paracetamol</div>
                    <div className="mt-1 text-sm text-slate-500">250MG · Hourly</div>
                    <div className="mt-6">
                      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        <span>↪</span> Use same drugs
                      </button>
                      <p className="mt-2 text-center text-xs text-slate-500">Outside Drugs From previous history</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="flex items-center gap-3 rounded-[40px] px-6 py-4">
                <div className="text-2xl font-semibold text-slate-900">Next Visit Date</div>
                <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Two Weeks</button>
                <button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">Three Weeks</button>
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
                  05 November 2025
                </div>
                <button className="ml-auto rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-600">
                  Confirm
                </button>
              </Card>
            </div>

            {/* Right column */}
            <div className="col-span-4 flex h-full min-h-0 flex-col overflow-hidden pl-1">
              <Card className="flex h-full min-h-0 flex-col p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold text-slate-900">Prescription</div>
                    <p className="text-xs text-slate-500">Patient List</p>
                  </div>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">History</button>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50/70 px-3 py-3 ring-1 ring-white/60">
                  <div className="relative flex-1">
                    <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    <input
                      placeholder="Search by Patient Name, NIC"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className={`w-full rounded-xl border border-transparent bg-white px-9 py-2.5 pr-12 text-sm text-slate-900 ${SHADOWS.inset} outline-none transition focus:border-sky-200 focus:ring-2 focus:ring-sky-100`}
                    />
                    <MicIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                  </div>
                  <button
                    className={`grid size-11 place-items-center rounded-full bg-sky-500 text-white ${SHADOWS.primaryGlow} transition hover:bg-sky-600 active:translate-y-px`}
                    type="button"
                    aria-label="Search"
                  >
                    <SearchIcon className="size-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm font-semibold text-slate-900">
                  <span>Patient List</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex size-2 rounded-full bg-emerald-400" /> {filtered.length.toString().padStart(2, '0')} Active
                  </span>
                </div>

                <div className="mt-3 flex-1 space-y-3 overflow-y-auto pr-1 text-sm leading-tight">
                  {filtered.map((p) => {
                    const isSelected = selectedId === p.id;
                    return (
                      <div
                        key={p.id}
                        className={`relative cursor-pointer rounded-2xl border bg-white/95 backdrop-blur-sm transition ${
                          isSelected
                            ? 'border-sky-200 ring-1 ring-sky-200 shadow-[0_20px_46px_rgba(14,116,144,0.18)]'
                            : 'border-slate-100 ring-1 ring-slate-100 shadow-[0_14px_34px_rgba(14,116,144,0.12)] hover:-translate-y-0.5'
                        }`}
                        onClick={() => {
                          setSelectedId(p.id);
                          setGender(p.gender);
                        }}
                      >
                        <div
                          className={`flex items-start gap-3 px-4 py-3 ${
                            isSelected ? 'bg-sky-50/70' : 'bg-white'
                          }`}
                        >
                          <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-base font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.28)]">
                            {p.name.charAt(0)}
                          </div>
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <div className="truncate text-base font-semibold text-slate-900">{p.name}</div>
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
                                  isSelected ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-700'
                                }`}
                              >
                                {p.reason}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                              <span>{p.nic}</span>
                              <span className="text-slate-300">•</span>
                              <span>{p.relationship}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-600">
                              <span className="rounded-full bg-white px-3 py-1 text-slate-600 ring-1 ring-slate-200">{p.age} age</span>
                              <span className="rounded-full bg-white px-3 py-1 text-slate-600 ring-1 ring-slate-200">{p.time}</span>
                            </div>
                          </div>
                          {isSelected ? (
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
                              Current Patient ✓
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>

      <aside className="sticky top-0 flex h-screen w-24 flex-col items-center justify-between bg-transparent py-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex size-16 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_25px_40px_rgba(15,23,42,0.35)]">
            <NavUserIcon className="size-8" />
          </div>
          <div className="h-8 w-px rounded-full bg-slate-200" />
          <div className="flex flex-col items-center rounded-[999px] border border-slate-100 bg-white/90 px-3 py-6 text-slate-600 shadow-[0_25px_45px_rgba(15,23,42,0.08)] backdrop-blur">
            <ul className="flex flex-col items-center gap-4">
              {[NavUserIcon, AssistantIcon, PatientsIcon, StatsIcon, InventoryIcon, ChatIcon].map((Icon, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={`group relative flex size-12 items-center justify-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${
                      index === 0
                        ? 'bg-slate-800 text-white shadow-[0_18px_32px_rgba(15,23,42,0.35)]'
                        : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:ring-slate-300'
                    }`}
                    aria-label="Navigation"
                  >
                    <Icon className="size-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-8 w-px rounded-full bg-slate-200" />
        </div>

        <button
          type="button"
          className="group relative flex size-12 items-center justify-center rounded-full border border-rose-100 bg-white text-rose-500 shadow-[0_12px_24px_rgba(244,63,94,0.25)] transition hover:-translate-y-0.5 hover:border-rose-200"
          aria-label="Logout"
        >
          <LogoutIcon className="size-5" />
        </button>
      </aside>
    </div>
  );
}
