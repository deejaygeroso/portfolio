import { StaticImageData } from 'next/image';

interface IMember {
  linkedIn: string;
  name: string;
  photo: {
    jpg: StaticImageData | string | null;
    webP: StaticImageData | string | null;
  };
  position: string;
}

export default IMember;
