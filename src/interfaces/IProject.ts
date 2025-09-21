import { StaticImageData } from 'next/image';

import IDomain from './IDomain';
import IMember from './IMember';

interface IProject {
  address?: string;
  date?: string;
  description: string;
  domains: IDomain[];
  members: IMember[];
  name: string;
  photos: {
    jpg: StaticImageData | string;
    webP: StaticImageData | string;
  }[];
  position: string;
  technology: string[];
  mainResponsibility: string;
  responsibilities: string[];
}

export default IProject;
