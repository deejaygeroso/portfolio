import { StaticImageData } from 'next/image';

interface ITestimonial {
  comments: string[];
  date: string;
  name: string;
  photo: {
    default: StaticImageData | string;
    webp: StaticImageData | string;
  };
  position: string;
  subComments?: string[];
}

export default ITestimonial;
