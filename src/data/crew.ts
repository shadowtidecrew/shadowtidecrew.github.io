export interface CrewMember {
  id: string;
  name: string;
  rank: 'teamZ' | 'teamU' | 'teamY' | 'teamX' | 'teamS' | 'teamA';
  role: string;
  bounty: string;
  build: string;
  status: 'high' | 'balanced' | 'low';
}

export const crewMembers: CrewMember[] = [
  {
    id: '1',
    name: 'Saint-Blox',
    rank: 'teamA',
    role: 'Crew Leader & Founder',
    bounty: '30M',
    build: 'Flame-Yama',
    status: 'balanced',
  },
  {
    id: '2',
    name: 'Inceptic',
    rank: 'teamX',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Portal-TTK',
    status: 'high',
  },
  {
    id: '3',
    name: 'laggingmasterr',
    rank: 'teamY',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Control-Yama',
    status: 'high',
  },
  {
    id: '4',
    name: 'Tican007',
    rank: 'teamA',
    role: 'Crew Wember',
    bounty: '30M',
    build: 'Lightning',
    status: 'high',
  },
  {
    id: '5',
    name: 'iKaiser',
    rank: 'teamA',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Lightning',
    status: 'balanced',
  },
  {
    id: '6',
    name: 'Noir',
    rank: 'teamA',
    role: 'Crew Member',
    bounty: '12M',
    build: 'Portal-TTK',
    status: 'balanced',
  },
  {
    id: '7',
    name: 'Benji',
    rank: 'teamS',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Portal-TTK',
    status: 'balanced',
  },
  {
    id: '8',
    name: 'Mati',
    rank: 'teamA',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Portal-TTK',
    status: 'balanced',
  },
  {
    id: '9',
    name: '(:',
    rank: 'teamA',
    role: 'Crew Member',
    bounty: '30M',
    build: 'Portal-TTK',
    status: 'balanced',
  },
];
