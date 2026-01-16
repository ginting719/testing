import React from 'react';

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-md text-white py-4 shadow-md border-b border-gray-700/50 sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                             <i className="fas fa-boxes-stacked text-2xl text-blue-400"></i>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-wide">Training Hub</h1>
                            <p className="text-blue-300/70 text-xs">Goods Receiving</p>
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search modules..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-64 text-white placeholder-gray-400"
                            aria-label="Search training modules"
                        />
                        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;