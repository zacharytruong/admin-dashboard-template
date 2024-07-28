export const appDrawerId = 'appDrawerId';
import { CiSearch } from 'react-icons/ci';
import { PiPlaylistDuotone } from 'react-icons/pi';
import { MdOndemandVideo } from 'react-icons/md';

export const leftSideMenu = [
  {
    id: 1,
    name: 'Search Videos',
    path: '/',
    isActive: (currentPath: string) => currentPath === '/',
    icon: CiSearch,
  },
  {
    id: 2,
    name: 'Playlist',
    path: '/playlist',
    isActive: (currentPath: string) => currentPath === '/playlist',
    icon: PiPlaylistDuotone,
  },
  {
    id: 3,
    name: 'Playing',
    path: '/playing',
    isActive: (currentPath: string) => currentPath === '/playing',
    icon: MdOndemandVideo,
  },
];
