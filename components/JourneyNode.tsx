import React from 'react';
import { ReceivingModule } from '../types';

interface JourneyNodeProps {
    module: ReceivingModule;
    onSelectModule: (module: ReceivingModule) => void;
    position: { top: string; left: string };
    animationDelay: string;
    isFilteredOut: boolean;
}

const JourneyNode: React.FC<JourneyNodeProps> = ({ module, onSelectModule, position, animationDelay, isFilteredOut }) => {
    return (
        <div 
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group node ${isFilteredOut ? 'node-filtered-out' : ''}`}
            style={{ ...position, animationDelay }}
            onClick={() => onSelectModule(module)}
            aria-label={`Select module: ${module.title}`}
        >
            <div className="relative flex flex-col items-center text-center w-40 pb-4">
                 <div className="node-icon-wrapper w-16 h-16 rounded-full flex items-center justify-center bg-[#12103e] border-2 transition-all duration-300 border-purple-500/50 group-hover:border-purple-500">
                    <i className="fas fa-folder-open text-2xl text-purple-400"></i>
                </div>
                <h3 className="mt-3 font-semibold text-sm text-gray-300 group-hover:text-white transition-colors node-title">
                    {module.title}
                </h3>
                <p className="absolute bottom-[-5px] text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                </p>
            </div>
        </div>
    );
};

export default JourneyNode;
