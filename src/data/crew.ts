export interface CrewMember {
  id: string;
  name: string;
  rank: 'teamZ' | 'teamU' | 'teamY' | 'teamX' | 'teamS' | 'teamA';
  role: string;
  bounty: string;
  fruit: string;
  status: 'legendary' | 'active' | 'rising';
}

export const crewMembers: CrewMember[] = [
  {
    id: '1',
    name: 'CaptainShadow',
    rank: 'teamZ',
    role: 'Crew Leader & Founder',
    bounty: '30M',
    fruit: 'Dark-Dark',
    status: 'legendary',
  },
  {
    id: '2',
    name: 'TideHunter',
    rank: 'teamZ',
    role: 'PvP Commander',
    bounty: '25M',
    fruit: 'Light-Light',
    status: 'legendary',
  },
  {
    id: '3',
    name: 'WaveBreaker',
    rank: 'teamU',
    role: 'Raid Coordinator',
    bounty: '22M',
    fruit: 'Magma',
    status: 'legendary',
  },
  {
    id: '4',
    name: 'StormRider',
    rank: 'teamU',
    role: 'Sea Event Specialist',
    bounty: '18M',
    fruit: 'Dough',
    status: 'active',
  },
  {
    id: '5',
    name: 'AbyssWalker',
    rank: 'teamY',
    role: 'Bounty Hunter',
    bounty: '15M',
    fruit: 'Venom',
    status: 'active',
  },
  {
    id: '6',
    name: 'CurrentSurfer',
    rank: 'teamY',
    role: 'Support & Healer',
    bounty: '12M',
    fruit: 'Flame',
    status: 'active',
  },
  {
    id: '7',
    name: 'DepthDiver',
    rank: 'teamX',
    role: 'Grinder',
    bounty: '5M',
    fruit: 'Ice',
    status: 'rising',
  },
  {
    id: '8',
    name: 'FoamBurst',
    rank: 'teamA',
    role: 'Trainee',
    bounty: '3M',
    fruit: 'Bomb',
    status: 'rising',
  },
];
