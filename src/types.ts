export type PhotoStyle = 'Rustic/Dark' | 'Bright/Modern' | 'Social Media';
export type ImageResolution = '1K' | '2K' | '4K';
export type AspectRatio = '1:1' | '4:3' | '3:4' | '16:9' | '9:16';

export interface RomanticMemory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  date: string;
  recommendedStyle: PhotoStyle;
  photoUrl?: string;
  photoResolution?: ImageResolution;
  photoStyle?: PhotoStyle;
  photoAspectRatio?: AspectRatio;
  modelUsed?: string;
  isGenerating?: boolean;
  error?: string;
  editHistory?: {
    id: string;
    imageUrl: string;
    prompt: string;
    timestamp: number;
  }[];
}

export interface LoveReason {
  id: number;
  text: string;
  category: 'Qalb' | 'Tabassum' | 'Sadoqat' | 'Orzular';
}

export interface LovePromise {
  id: number;
  title: string;
  promise: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  quote: string;
  iconName: string;
}
