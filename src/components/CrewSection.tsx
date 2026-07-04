import { Crown, Shield, Star, Zap, Flame, Gem } from 'lucide-react';
import { crewMembers } from '../data/crew';

const rankConfig = {
  teamZ: { icon: Crown, label: 'Team Z', color: 'bg-amber-500' },
  teamU: { icon: Shield, label: 'Team U', color: 'bg-ocean-500' },
  teamY: { icon: Zap, label: 'Team Y', color: 'bg-tide-500' },
  teamX: { icon: Flame, label: 'Team X', color: 'bg-purple-500' },
  teamS: { icon: Gem, label: 'Team S', color: 'bg-pink-500' },
  teamA: { icon: Star, label: 'Team A', color: 'bg-gray-500' },
};

export default function CrewSection() {
  return (
    <section id="crew" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Crew Roster</h2>
          <p className="text-ocean-200 max-w-2xl mx-auto">
            Meet the warriors who represent the waves. Each member brings their own strength to the tide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {crewMembers.map((member) => {
              const rank = rankConfig[member.rank];
              const RankIcon = rank.icon;
              return (
                <div
                  key={member.id}
                  className="glass-card p-6 group hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${rank.color} flex items-center justify-center`}>
                      <RankIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      member.status === 'high' ? 'bg-amber-500/20 text-amber-400' :
                      member.status === 'balanced' ? 'bg-ocean-500/20 text-ocean-400' :
                      'bg-tide-500/20 text-tide-400'
                    }`}>
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-ocean-300 text-sm mb-4">{member.role}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Bounty</span>
                      <span className="text-white font-medium">{member.bounty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Fruit</span>
                      <span className="text-white font-medium">{member.fruit}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}
