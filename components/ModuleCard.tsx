import React from 'react';
import { ReceivingModule, ContentType } from '../types';

interface ModuleCardProps {
    module: ReceivingModule;
    onSelectModule: (module: ReceivingModule) => void;
    style?: React.CSSProperties;
}

const ContentTypeIcon: React.FC<{type: ContentType}> = ({ type }) => {
    const icons: Record<ContentType, string> = {
        [ContentType.MindMap]: 'fa-project-diagram text-teal-300',
        [ContentType.Video]: 'fa-video text-red-300',
        [ContentType.PPT]: 'fa-file-powerpoint text-orange-300',
        [ContentType.QnA]: 'fa-question-circle text-sky-300',
        [ContentType.Podcast]: 'fa-headset text-purple-300',
        [ContentType.ExternalLink]: 'fa-external-link-alt text-yellow-300',
    };
    const iconClass = icons[type] || 'fa-file';
    return (
        <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center" title={type.charAt(0).toUpperCase() + type.slice(1)}>
            <i className={`fas ${iconClass}`}></i>
        </div>
    );
};

const getDirectGdriveImageUrl = (url: string): string => {
    if (url.includes('drive.google.com/file/d/')) {
        try {
            const fileId = url.split('/d/')[1].split('/')[0];
            return `https://drive.google.com/uc?export=view&id=${fileId}`;
        } catch (e) {
            console.error("Failed to parse Google Drive URL", e);
            return ''; // Return empty string on failure
        }
    }
    return url;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelectModule, style }) => {
    const mindmapMaterial = module.materials.find(
        (material) => material.type === ContentType.MindMap
    );

    const imageUrl = mindmapMaterial ? getDirectGdriveImageUrl(mindmapMaterial.content as string) : '';

    return (
        <div 
            onClick={() => onSelectModule(module)}
            className="card-enter group rounded-lg shadow-lg overflow-hidden cursor-pointer bg-gray-800 border border-gray-700/50 flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:-translate-y-1"
            style={style}
        >
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 tracking-tight text-white">{module.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-shrink-0">
                    {module.description}
                </p>

                {imageUrl ? (
                     <div className="my-auto flex-grow rounded-md overflow-hidden bg-black/20 flex items-center justify-center min-h-[150px] aspect-video border border-gray-700">
                        <img 
                            src={imageUrl} 
                            alt={`${module.title} Mindmap`} 
                            className="w-full h-full object-contain" 
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if(target.parentElement) {
                                    target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 p-4 text-center text-xs"><i class="fas fa-image text-3xl mb-2"></i><p>Preview tidak tersedia</p></div>';
                                }
                            }}
                        />
                    </div>
                ) : (
                    <div className="my-auto flex-grow rounded-md bg-black/20 flex items-center justify-center min-h-[150px] aspect-video border border-gray-700 text-gray-600">
                         <i className="fas fa-chalkboard text-4xl"></i>
                    </div>
                )}
            </div>
            
            <div className="px-5 pb-5 mt-auto flex-shrink-0">
                {module.checklistUrl && (
                    <a
                        href={module.checklistUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="mb-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-gray-800"
                    >
                        <i className="fas fa-download mr-2"></i>
                        Download Checklist
                    </a>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                        {module.materials.slice(0, 5).map(material => (
                            <ContentTypeIcon key={material.id} type={material.type} />
                        ))}
                        {module.materials.length > 5 && <div className="text-xs text-gray-400 font-bold ml-1">+{module.materials.length - 5}</div>}
                    </div>
                    <div className="flex items-center text-blue-300 font-semibold text-sm">
                        View Details <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleCard;
