
import React, { useState, useMemo } from 'react';
import ModuleGrid from './components/ModuleGrid';
import Modal from './components/Modal';
import { ReceivingModule } from './types';
import { RECEIVING_MODULES } from './constants';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<ReceivingModule | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelectModule = (module: ReceivingModule) => {
        setSelectedModule(module);
    };

    const handleCloseModal = () => {
        setSelectedModule(null);
    };

    const filteredModules = useMemo(() => {
        if (!searchQuery) {
            return RECEIVING_MODULES;
        }
        const lowercasedQuery = searchQuery.toLowerCase();
        return RECEIVING_MODULES.filter(module =>
            module.title.toLowerCase().includes(lowercasedQuery) ||
            module.description.toLowerCase().includes(lowercasedQuery)
        );
    }, [searchQuery]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                        Receiving Journey Modules
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400">
                        Pilih module untuk yang sesuai dengan supplier yang ingin kamu pelajari ya
                    </p>
                    
                    {/* Search bar moved below subtitle */}
                    <div className="max-w-md mx-auto mt-10 relative group">
                        <input
                            type="text"
                            placeholder="Cari module..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 group-hover:border-gray-600"
                            aria-label="Search modules"
                        />
                        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-blue-400 transition-colors"></i>
                    </div>
                </div>
                
                <ModuleGrid 
                    modules={filteredModules} 
                    onSelectModule={handleSelectModule}
                />
            </main>
            <Footer />
            {selectedModule && <Modal module={selectedModule} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;
