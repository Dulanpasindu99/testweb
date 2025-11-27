export type PatientTimelineEntry = {
  date: string; // ISO string or YYYY-MM-DD
  title: string;
  description: string;
  tags?: string[];
  kind?: 'condition' | 'bp' | 'allergy' | 'note';
  value?: string;
};

export type PatientProfile = {
  id: string;
  name: string;
  nic: string;
  age: number;
  gender: 'Male' | 'Female';
  family: {
    assigned: boolean;
    name: string;
    members: string[];
  };
  firstSeen: string;
  allergies: string[];
  conditions: string[];
  timeline: PatientTimelineEntry[];
};

export const patientProfiles: Record<string, PatientProfile> = {
  'ranil-wickramasinghe': {
    id: 'ranil-wickramasinghe',
    name: 'Ranil Wickramasinghe',
    nic: '74526489V',
    age: 70,
    gender: 'Male',
    family: {
      assigned: true,
      name: 'Wickramasinghe',
      members: ['Chathuri Wickramasinghe', 'Sahan Wickramasinghe', 'Harini Wickramasinghe'],
    },
    firstSeen: '2023-09-12',
    allergies: ['Penicillin', 'Piriton'],
    conditions: ['Diabetes', 'Hypertension'],
    timeline: [
      {
        date: '2024-11-04',
        title: 'Hypertension review',
        description: 'Stable readings after adjusting Amlodipine dose and daily walk routine.',
        tags: ['Hypertension'],
        value: 'Doctor: Dr. Malith',
      },
      {
        date: '2024-10-22',
        title: 'Blood pressure check',
        description: 'Mild dizziness reported during evening. Lifestyle coaching provided.',
        kind: 'bp',
        value: '130 / 84 mmHg',
      },
      {
        date: '2024-09-01',
        title: 'Diabetes follow-up',
        description: 'Started Metformin 500mg and nutrition plan with reduced starch.',
        tags: ['Diabetes'],
      },
      {
        date: '2023-09-12',
        title: 'First registered in system',
        description: 'Baseline vitals captured and family assignment completed.',
        kind: 'note',
      },
    ],
  },
  'chandraka-bandaranayaka': {
    id: 'chandraka-bandaranayaka',
    name: 'Chandraka Bandaranayaka',
    nic: '7423665V',
    age: 65,
    gender: 'Female',
    family: {
      assigned: true,
      name: 'Bandaranayaka',
      members: ['Suren Bandaranayaka', 'Imaya Bandaranayaka'],
    },
    firstSeen: '2024-01-06',
    allergies: ['Seafood'],
    conditions: ['Heart Problem', 'Diabetes'],
    timeline: [
      {
        date: '2024-11-10',
        title: 'Chest discomfort review',
        description: 'Reports improved breathing after beta-blocker adjustment.',
        tags: ['Heart'],
      },
      {
        date: '2024-10-02',
        title: 'Blood pressure check',
        description: 'BP elevated after long travel day. Rehydration advised.',
        kind: 'bp',
        value: '145 / 92 mmHg',
      },
      {
        date: '2024-08-18',
        title: 'Diabetes counseling',
        description: 'Introduced evening walk routine and glucose diary.',
        tags: ['Diabetes'],
      },
      {
        date: '2024-01-06',
        title: 'First registered in system',
        description: 'Transferred records from prior facility with cardiology notes.',
        kind: 'note',
      },
    ],
  },
  'mahinda-rajapaksha': {
    id: 'mahinda-rajapaksha',
    name: 'Mahinda Rajapaksha',
    nic: '7423665V',
    age: 66,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'Rajapaksha',
      members: ['Gimhani Rajapaksha'],
    },
    firstSeen: '2023-06-20',
    allergies: ['Dust'],
    conditions: ['Arthritis'],
    timeline: [
      {
        date: '2024-11-01',
        title: 'Joint pain review',
        description: 'Physio exercises added; pain score improved to 3/10.',
        tags: ['Arthritis'],
      },
      {
        date: '2024-09-19',
        title: 'Blood pressure check',
        description: 'Morning dizziness reported; hydration plan shared.',
        kind: 'bp',
        value: '126 / 82 mmHg',
      },
      {
        date: '2024-07-02',
        title: 'Allergy episode',
        description: 'Seasonal flare-up treated with antihistamine.',
        kind: 'allergy',
        value: 'Dust trigger',
      },
      {
        date: '2023-06-20',
        title: 'First registered in system',
        description: 'Initial ortho consult recorded.',
        kind: 'note',
      },
    ],
  },
  'premadasa': {
    id: 'premadasa',
    name: 'Premadasa',
    nic: '61524862V',
    age: 66,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'N/A',
      members: [],
    },
    firstSeen: '2024-02-14',
    allergies: ['None reported'],
    conditions: ['Fever', 'Headache'],
    timeline: [
      {
        date: '2024-11-12',
        title: 'Fever follow-up',
        description: 'No fever in last 48 hours. Hydration maintained.',
        tags: ['Fever'],
      },
      {
        date: '2024-11-10',
        title: 'Blood pressure check',
        description: 'Routine vitals recorded during consult.',
        kind: 'bp',
        value: '118 / 76 mmHg',
      },
      {
        date: '2024-02-14',
        title: 'First registered in system',
        description: 'Walk-in patient added with headache complaint.',
        kind: 'note',
      },
    ],
  },
  'jr-jayawardhana': {
    id: 'jr-jayawardhana',
    name: 'JR Jayawardhana',
    nic: '64524862V',
    age: 62,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'N/A',
      members: [],
    },
    firstSeen: '2024-03-01',
    allergies: ['Aspirin'],
    conditions: ['Stomach Ache', 'Headache'],
    timeline: [
      {
        date: '2024-11-08',
        title: 'Digestive review',
        description: 'Dietary triggers identified; advised low-spice plan.',
        tags: ['Stomach Ache'],
      },
      {
        date: '2024-11-01',
        title: 'Blood pressure check',
        description: 'Routine screening during consultation.',
        kind: 'bp',
        value: '122 / 78 mmHg',
      },
      {
        date: '2024-03-01',
        title: 'First registered in system',
        description: 'Referral from community clinic.',
        kind: 'note',
      },
    ],
  },
  'mitreepala-sirisena': {
    id: 'mitreepala-sirisena',
    name: 'Mitreepala Siirisena',
    nic: '78522862V',
    age: 68,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'N/A',
      members: [],
    },
    firstSeen: '2024-04-21',
    allergies: ['Latex'],
    conditions: ['Fever'],
    timeline: [
      {
        date: '2024-11-06',
        title: 'Fever resolved',
        description: 'Temperature normal for 72 hours.',
        tags: ['Fever'],
      },
      {
        date: '2024-11-04',
        title: 'Blood pressure check',
        description: 'Minor elevation noted, monitored closely.',
        kind: 'bp',
        value: '132 / 82 mmHg',
      },
      {
        date: '2024-04-21',
        title: 'First registered in system',
        description: 'New patient onboarding completed.',
        kind: 'note',
      },
    ],
  },
  'chandrika-bandaranayake': {
    id: 'chandrika-bandaranayake',
    name: 'Chandrika Bandranayake',
    nic: '71524862V',
    age: 63,
    gender: 'Female',
    family: {
      assigned: true,
      name: 'Bandaranayake',
      members: ['Suren Bandaranayaka', 'Imaya Bandaranayaka'],
    },
    firstSeen: '2024-05-10',
    allergies: ['No known allergies'],
    conditions: ['Fever', 'Headache'],
    timeline: [
      {
        date: '2024-11-07',
        title: 'Viral fever review',
        description: 'Symptoms improving; hydration emphasized.',
        tags: ['Fever'],
      },
      {
        date: '2024-10-15',
        title: 'Blood pressure check',
        description: 'Lightheadedness after travel.',
        kind: 'bp',
        value: '128 / 80 mmHg',
      },
      {
        date: '2024-05-10',
        title: 'First registered in system',
        description: 'Family linked during onboarding.',
        kind: 'note',
      },
    ],
  },
  'ranil-vicramasinghe': {
    id: 'ranil-vicramasinghe',
    name: 'Ranil Vicramasinghe',
    nic: '77524862V',
    age: 76,
    gender: 'Male',
    family: {
      assigned: true,
      name: 'Wickramasinghe',
      members: ['Chathuri Wickramasinghe', 'Sahan Wickramasinghe', 'Harini Wickramasinghe'],
    },
    firstSeen: '2024-06-01',
    allergies: ['Penicillin'],
    conditions: ['Fever', 'Headache'],
    timeline: [
      {
        date: '2024-11-09',
        title: 'Migraine review',
        description: 'Sleep hygiene guidance shared.',
        tags: ['Headache'],
      },
      {
        date: '2024-10-01',
        title: 'Blood pressure check',
        description: 'Stable with evening readings.',
        kind: 'bp',
        value: '120 / 80 mmHg',
      },
      {
        date: '2024-06-01',
        title: 'First registered in system',
        description: 'Added during community clinic camp.',
        kind: 'note',
      },
    ],
  },
  'mahinda-rajapakshe': {
    id: 'mahinda-rajapakshe',
    name: 'Mahinda Rajapakshe',
    nic: '74524862V',
    age: 66,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'Rajapakshe',
      members: [],
    },
    firstSeen: '2024-06-18',
    allergies: ['None reported'],
    conditions: ['Headache'],
    timeline: [
      {
        date: '2024-11-02',
        title: 'Neurology follow-up',
        description: 'Headache frequency down to once a week.',
        tags: ['Headache'],
      },
      {
        date: '2024-09-24',
        title: 'Blood pressure check',
        description: 'Routine check during visit.',
        kind: 'bp',
        value: '124 / 80 mmHg',
      },
      {
        date: '2024-06-18',
        title: 'First registered in system',
        description: 'Initial consult for persistent headaches.',
        kind: 'note',
      },
    ],
  },
  'rani-fernando': {
    id: 'rani-fernando',
    name: 'Rani Fernando',
    nic: '856456456V',
    age: 34,
    gender: 'Female',
    family: {
      assigned: false,
      name: 'Fernando',
      members: [],
    },
    firstSeen: '2024-07-02',
    allergies: ['Ibuprofen'],
    conditions: ['Asthma'],
    timeline: [
      {
        date: '2024-11-12',
        title: 'Asthma review',
        description: 'Inhaler technique refreshed; no night symptoms.',
        tags: ['Asthma'],
      },
      {
        date: '2024-10-02',
        title: 'Blood pressure check',
        description: 'Routine vitals during asthma control visit.',
        kind: 'bp',
        value: '116 / 74 mmHg',
      },
      {
        date: '2024-07-02',
        title: 'First registered in system',
        description: 'Shifted care from provincial clinic.',
        kind: 'note',
      },
    ],
  },
  'sathya-dev': {
    id: 'sathya-dev',
    name: 'Sathya Dev',
    nic: '222343222V',
    age: 65,
    gender: 'Male',
    family: {
      assigned: false,
      name: 'Dev',
      members: [],
    },
    firstSeen: '2024-07-12',
    allergies: ['Seafood'],
    conditions: ['Hypertension'],
    timeline: [
      {
        date: '2024-11-11',
        title: 'Hypertension follow-up',
        description: 'Medication adherence good; home readings logged.',
        tags: ['Hypertension'],
      },
      {
        date: '2024-10-09',
        title: 'Blood pressure check',
        description: 'Slightly elevated after travel.',
        kind: 'bp',
        value: '138 / 88 mmHg',
      },
      {
        date: '2024-07-12',
        title: 'First registered in system',
        description: 'Referred for blood pressure management.',
        kind: 'note',
      },
    ],
  },
  'chathura-deshan': {
    id: 'chathura-deshan',
    name: 'Chathura Deshan',
    nic: '865637762V',
    age: 32,
    gender: 'Male',
    family: {
      assigned: true,
      name: 'Deshan',
      members: ['Isuru Deshan'],
    },
    firstSeen: '2024-08-01',
    allergies: ['—'],
    conditions: ['Flu'],
    timeline: [
      {
        date: '2024-11-05',
        title: 'Flu resolved',
        description: 'Completed antiviral course; no fever for 3 days.',
        tags: ['Flu'],
      },
      {
        date: '2024-10-29',
        title: 'Blood pressure check',
        description: 'Routine pre-discharge vitals.',
        kind: 'bp',
        value: '118 / 78 mmHg',
      },
      {
        date: '2024-08-01',
        title: 'First registered in system',
        description: 'Admitted with high fever and cough.',
        kind: 'note',
      },
    ],
  },
  'rathmalie-de-silva': {
    id: 'rathmalie-de-silva',
    name: 'Rathmalie De Silva',
    nic: '650002343V',
    age: 42,
    gender: 'Female',
    family: {
      assigned: true,
      name: 'De Silva',
      members: ['Nihal De Silva'],
    },
    firstSeen: '2024-09-15',
    allergies: ['Shellfish'],
    conditions: ['Migraine'],
    timeline: [
      {
        date: '2024-11-03',
        title: 'Migraine review',
        description: 'Reduced frequency after hydration plan.',
        tags: ['Migraine'],
      },
      {
        date: '2024-10-05',
        title: 'Blood pressure check',
        description: 'Stable during neurology consult.',
        kind: 'bp',
        value: '118 / 76 mmHg',
      },
      {
        date: '2024-09-15',
        title: 'First registered in system',
        description: 'Referred for chronic migraines.',
        kind: 'note',
      },
    ],
  },
};

export const getPatientProfile = (profileId: string) => patientProfiles[profileId];

export const getProfileIdByNicOrName = (nic?: string, name?: string) => {
  const normalizedNic = nic?.replace(/\s+/g, '').toLowerCase();
  const normalizedName = name?.trim().toLowerCase();
  const byName = normalizedName
    ? Object.values(patientProfiles).find((profile) => profile.name.trim().toLowerCase() === normalizedName)
    : undefined;

  if (byName) return byName.id;

  const byNic = normalizedNic
    ? Object.values(patientProfiles).find(
        (profile) => profile.nic.replace(/\s+/g, '').toLowerCase() === normalizedNic
      )
    : undefined;

  return byNic?.id;
};
