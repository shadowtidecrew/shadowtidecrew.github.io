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
    name: 'CaptainShadow',
    rank: 'teamZ',
    role: 'Crew Leader & Founder',
    bounty: '30M',
    build: 'Dark-Dark',
    status: 'high',
  },
  {
    id: '2',
    name: 'TideHunter',
    rank: 'teamZ',
    role: 'PvP Commander',
    bounty: '25M',
    build: 'Light-Light',
    status: 'high',
  },
  {
    id: '3',
    name: 'WaveBreaker',
    rank: 'teamU',
    role: 'Raid Coordinator',
    bounty: '22M',
    build: 'Magma',
    status: 'high',
  },
  {
    id: '4',
    name: 'StormRider',
    rank: 'teamU',
    role: 'Sea Event Specialist',
    bounty: '18M',
    build: 'Dough',
    status: 'balanced',
  },
  {
    id: '5',
    name: 'AbyssWalker',
    rank: 'teamY',
    role: 'Bounty Hunter',
    bounty: '15M',
    build: 'Venom',
    status: 'balanced',
  },
  {
    id: '6',
    name: 'CurrentSurfer',
    rank: 'teamY',
    role: 'Support & Healer',
    bounty: '12M',
    build: 'Flame',
    status: 'balanced',
  },
  {
    id: '7',
    name: 'DepthDiver',
    rank: 'teamX',
    role: 'Grinder',
    bounty: '5M',
    build: 'Ice',
    status: 'low',
  },
  {
    id: '8',
    name: 'FoamBurst',
    rank: 'teamA',
    role: 'Trainee',
    bounty: '3M',
    build: 'Bomb',
    status: 'low',
  },
];
