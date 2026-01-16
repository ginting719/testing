export enum ContentType {
  MindMap = 'mindmap',
  Video = 'video',
  PPT = 'ppt',
  QnA = 'qna',
  Podcast = 'podcast',
  ExternalLink = 'external',
}

// Represents a single piece of learning material within a larger module.
export interface TutorialMaterial {
  id: string;
  type: ContentType;
  title: string;
  // All content is now represented by a URL string.
  content: string; 
}

// Represents a main training topic, containing multiple materials.
export interface ReceivingModule {
    id: string;
    title: string;
    description: string;
    materials: TutorialMaterial[];
    checklistUrl?: string;
}

// FIX: Add QnAItem interface to resolve missing export error.
// Represents a question and answer pair.
export interface QnAItem {
  question: string;
  answer: string;
}
