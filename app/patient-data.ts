export type Patient = {
  id: string;
  name: string;
  nic: string;
  time: string;
  reason: string;
  age: number;
  gender: string;
};

export const PATIENTS: Patient[] = [
  {
    id: 'p1',
    name: 'Premadasa',
    nic: '61524862V',
    time: '5.00 PM',
    reason: 'Fever, Headache',
    age: 66,
    gender: 'Male',
  },
  {
    id: 'p2',
    name: 'JR Jayawardhana',
    nic: '64524862V',
    time: '5.10 PM',
    reason: 'Stomach Ache, Headache',
    age: 62,
    gender: 'Male',
  },
  {
    id: 'p3',
    name: 'Mitreepala Siirisena',
    nic: '78522862V',
    time: '5.20 PM',
    reason: 'Fever',
    age: 68,
    gender: 'Male',
  },
  {
    id: 'p4',
    name: 'Chandrika Bandranayake',
    nic: '71524862V',
    time: '5.30 PM',
    reason: 'Fever, Headache',
    age: 63,
    gender: 'Female',
  },
  {
    id: 'p5',
    name: 'Ranil Vicramasinghe',
    nic: '77524862V',
    time: '5.00 PM',
    reason: 'Fever, Headache',
    age: 76,
    gender: 'Male',
  },
  {
    id: 'p6',
    name: 'Mahinda Rajapakshe',
    nic: '74524862V',
    time: '—',
    reason: 'Headache',
    age: 66,
    gender: 'Male',
  },
];

export const DISEASE_QUICK_TAGS = ['Fever', 'Headache'];

export const CLINICAL_DRUGS = ['Ibuprofen', 'Naproxen', 'Acetaminophen'];

export const OUTSIDE_DRUGS = [{ name: 'Paracetamol', dose: '250MG', terms: 'Hourly', amount: 32 }];

export const SELECTED_TESTS = ['F.B.C', 'Cholesterol'];

export const NOTES = 'No';

export const NEXT_VISIT = '05 November 2025';

export const RX_ROWS = [
  { drug: 'Ibuprofen', dose: '250MG', terms: '1 DAILY', amount: 2 },
  { drug: 'Naproxen', dose: '250MG', terms: '1 DAILY', amount: 2 },
  { drug: 'Acetaminophen', dose: '2 Hourly', terms: '2 Hourly', amount: 3 },
];
