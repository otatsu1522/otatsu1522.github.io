import type { Language } from './ui';

export interface Playlist {
  id: string;
  type: 'playlist';
  title: Record<Language, string>;
  url: string;
}

export interface RecommendedVideo {
  id: string;
  type: 'video';
  title: Record<Language, string>;
  url: string;
}

export type Recommendation = Playlist | RecommendedVideo;

export const recommendedPlaylists: Recommendation[] = [
  {
    id: 'world-round',
    type: 'playlist',
    title: {
      ja: '自転車世界一周',
      en: 'Cycling Around the World',
    },
    url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG4lGI5PjpcUxcAtHU1Bbpv3',
  },
  {
    id: 'japan-round',
    type: 'playlist',
    title: {
      ja: '自転車日本一周',
      en: 'Cycling Around Japan',
    },
    url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG5QiAMN0QEGsgTF5r8Knd4V',
  },
  {
    id: 'north-america',
    type: 'playlist',
    title: {
      ja: '無一文北米一周',
      en: 'Hitchhiking Around North America',
    },
    url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG6DS8SIpsXdm9O0XvP9IhQ3',
  },
  {
    id: '3OMFPDpNQsM',
    type: 'video',
    title: {
      ja: 'おすすめ動画',
      en: 'Recommended Video',
    },
    url: 'https://www.youtube.com/watch?v=3OMFPDpNQsM',
  },
];
