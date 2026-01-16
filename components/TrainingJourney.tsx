import React from 'react';
import JourneyNode from './JourneyNode';
import { ReceivingModule } from '../types';

interface TrainingJourneyProps {
    modules: ReceivingModule[];
    onSelectModule: (module: ReceivingModule) => void;
    filteredModuleIds: Set<string>;
}

// Pre-defined positions for a visually appealing path for up to 4 nodes
const nodePositions = [
    { top: '20%', left: '15%' },
    { top: '35%', left: '45%' },
    { top: '25%', left: '75%' },
    { top: '55%', left: '60%' },
    { top: '70%', left: '30%' },
];


const TrainingJourney: React.FC<TrainingJourneyProps> = ({ modules, onSelectModule, filteredModuleIds }) => {
    return (
        <section id="tutorials" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Your Learning Path</h2>
                    <p className="text-lg text-purple-300/80">Follow the path to master the goods receiving process, one step at a time.</p>
                </div>
                
                <div className="relative w-full max-w-5xl mx-auto h-[400px]">
                    {/* SVG Path */}
                    <svg className="absolute w-full h-full" width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <path 
                            d="M150 80 Q 300 140, 450 140 T 750 100 Q 675 220, 600 220 T 300 280"
                            stroke="url(#line-gradient)" 
                            strokeWidth="4" 
                            fill="none" 
                            className="path-svg"
                        />
                        <defs>
                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes */}
                    {modules.map((module, index) => (
                        <JourneyNode 
                            key={module.id} 
                            module={module} 
                            onSelectModule={onSelectModule}
                            position={nodePositions[index % nodePositions.length]}
                            animationDelay={`${index * 0.3}s`}
                            isFilteredOut={!filteredModuleIds.has(module.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingJourney;
