import type { ImageMetadata } from 'astro';
import type { Language } from './ui';
import worldRoundImg from '../assets/images/common/playlist-world-round.jpg';
import japanRoundImg from '../assets/images/common/playlist-japan-round.jpg';
import northAmericaImg from '../assets/images/common/playlist-north-america.jpg';

export interface Playlist {
  id: string;
  type: 'playlist';
  title: Record<Language, string>;
  url: string;
  image: ImageMetadata;
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
    image: worldRoundImg,
  },
  {
    id: 'japan-round',
    type: 'playlist',
    title: {
      ja: '自転車日本一周',
      en: 'Cycling Around Japan',
    },
    url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG5QiAMN0QEGsgTF5r8Knd4V',
    image: japanRoundImg,
  },
  {
    id: 'north-america',
    type: 'playlist',
    title: {
      ja: '無一文北米一周',
      en: 'Hitchhiking Around North America',
    },
    url: 'https://www.youtube.com/playlist?list=PLs9JLAzb3cG6DS8SIpsXdm9O0XvP9IhQ3',
    image: northAmericaImg,
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
