import React from 'react';
import { ReceivingModule } from '../types';
import ModuleCard from './ModuleCard';

interface ModuleGridProps {
    modules: ReceivingModule[];
    onSelectModule: (module: ReceivingModule) => void;
}

const ModuleGrid: React.FC<ModuleGridProps> = ({ modules, onSelectModule }) => {
    return (
        <section id="modules">
            {modules.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((module, index) => (
                        <ModuleCard 
                            key={module.id} 
                            module={module} 
                            onSelectModule={onSelectModule}
                            style={{ animationDelay: `${index * 100}ms` }}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-gray-800 rounded-lg col-span-full">
                    <i className="fas fa-search text-5xl text-gray-500 mb-4"></i>
                    <h3 className="text-xl font-semibold text-white">No Modules Found</h3>
                    <p className="text-gray-400 mt-2">Try adjusting your search query.</p>
                </div>
            )}
        </section>
    );
};

export default ModuleGrid;