
import React, { useState, useEffect, useCallback } from 'react';
import { ReceivingModule, ContentType, TutorialMaterial } from '../types';

interface ModalProps {
    module: ReceivingModule;
    onClose: () => void;
}

const MaterialIcon: React.FC<{ type: ContentType }> = ({ type }) => {
    const baseClasses = "fas mr-3 w-5 text-center";
    switch (type) {
        case ContentType.MindMap:
            return <i className={`${baseClasses} fa-project-diagram text-teal-400`}></i>;
        case ContentType.Video:
            return <i className={`${baseClasses} fa-video text-red-400`}></i>;
        case ContentType.Podcast:
            return <i className={`${baseClasses} fa-headset text-purple-400`}></i>;
        case ContentType.PPT:
            return <i className={`${baseClasses} fa-file-powerpoint text-orange-400`}></i>;
        case ContentType.QnA:
            return <i className={`${baseClasses} fa-question-circle text-sky-400`}></i>;
        case ContentType.ExternalLink:
            return <i className={`${baseClasses} fa-external-link-alt text-yellow-400`}></i>;
        default:
            return null;
    }
}

const getEmbedUrl = (material: TutorialMaterial): string => {
    const url = material.content;
    
    // YouTube: convert watch/shortened URLs to embed URLs
    if (url.includes('youtube.com/watch')) {
        try {
            const videoId = new URL(url).searchParams.get('v');
            return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0` : url;
        } catch (e) {
            return url;
        }
    }
    if (url.includes('youtu.be/')) {
       try {
            const videoId = new URL(url).pathname.substring(1);
            return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0` : url;
       } catch(e) {
            return url;
       }
    }

    // Google Drive: change /view to /preview for embedding
    if (url.includes('drive.google.com')) {
        return url.replace('/view', '/preview').replace('?usp=sharing', '').replace('?usp=drive_link', '');
    }
    
    // Canva: add ?embed for embedding
    if (url.includes('canva.com/design')) {
        // remove any existing query params
        const baseUrl = url.split('?')[0];
        return `${baseUrl}/view?embed`;
    }

    // Try embedding chat.z.ai directly
    if (url.includes('chat.z.ai')) {
        return url;
    }

    // Other PPTX files using Office viewer
    if (url.endsWith('.pptx')) {
        const fullPptUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullPptUrl)}`;
    }
    
    // Default for other direct embed links
    return url;
};


const ContentRenderer: React.FC<{ material: TutorialMaterial }> = ({ material }) => {
    if (material.type === ContentType.MindMap) {
        const imageUrl = material.content;
        return (
            <div className="relative w-full h-full bg-black/20 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center">
                <img 
                    src={imageUrl} 
                    alt={material.title} 
                    className="w-full h-full object-contain" 
                />
            </div>
        );
    }

    // Handle all other embeddable content (Video, PPT, Podcast, ExternalLink) with iframes
    if ([ContentType.Video, ContentType.PPT, ContentType.Podcast, ContentType.ExternalLink].includes(material.type)) {
        const embedUrl = getEmbedUrl(material);

        return (
             <div className="w-full h-full min-h-[480px]">
                <iframe
                    className="w-full h-full rounded-lg border border-gray-700"
                    src={embedUrl}
                    title={material.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen={true}
                ></iframe>
            </div>
        );
    }
    
    return <p className="text-center text-gray-500 py-10">Content type not supported.</p>;
};

const Modal: React.FC<ModalProps> = ({ module, onClose }) => {
    const [activeMaterial, setActiveMaterial] = useState<TutorialMaterial>(module.materials[0]);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
    }, []);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(onClose, 300); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
          window.removeEventListener('keydown', handleEsc);
          document.body.style.overflow = 'auto';
        }
    }, [handleClose]);
    
    useEffect(() => {
        // When module changes, reset to the first material
        setActiveMaterial(module.materials[0]);
    }, [module]);

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm ${isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-enter'}`}
            onClick={handleClose}
        >
            <div 
                className={`bg-gray-800 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden m-4 flex flex-col border border-gray-700/60 ${isClosing ? 'animate-modal-content-exit' : 'animate-modal-content-enter'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 px-6 py-4 flex items-center justify-between flex-shrink-0">
                    <h2 className="text-xl font-bold text-white">{module.title}</h2>
                    <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors text-3xl leading-none" aria-label="Close modal">&times;</button>
                </div>
                <div className="flex-grow flex flex-col md:flex-row min-h-0">
                    <aside className="w-full md:w-1/4 bg-gray-900/50 p-6 border-b md:border-r md:border-b-0 border-gray-700/50 overflow-y-auto">
                         <p className="text-gray-400 text-sm mb-6">{module.description}</p>
                         <nav>
                            <ul className="space-y-2">
                                {module.materials.map(material => (
                                    <li key={material.id}>
                                        <button
                                            onClick={() => setActiveMaterial(material)}
                                            className={`w-full flex items-center text-left p-3 rounded-lg transition-all duration-200 text-sm font-medium ${activeMaterial.id === material.id ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700/50 text-gray-300'}`}
                                        >
                                            <MaterialIcon type={material.type} />
                                            <span>{material.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                         </nav>
                    </aside>
                    <main className="flex-grow p-6 overflow-y-auto bg-gray-800/50">
                        <ContentRenderer material={activeMaterial} />
                    </main>
                </div>
            </div>
            <style>{`
                @keyframes backdrop-enter {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes backdrop-exit {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                @keyframes modal-content-enter {
                    from { opacity: 0; transform: scale(0.95) translateY(1rem); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes modal-content-exit {
                    from { opacity: 1; transform: scale(1) translateY(0); }
                    to { opacity: 0; transform: scale(0.95) translateY(1rem); }
                }
                .animate-backdrop-enter { animation: backdrop-enter 0.3s ease-out forwards; }
                .animate-backdrop-exit { animation: backdrop-exit 0.3s ease-out forwards; }
                .animate-modal-content-enter { animation: modal-content-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-modal-content-exit { animation: modal-content-exit 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default Modal;
