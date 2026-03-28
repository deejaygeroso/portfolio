import { dejablog, jalil } from '@/assets/images';
import { dejablogWebP, jalilWebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const dejablogProject = {
  date: '',
  description: `An application that can create and manage the multiple blogs, posts and user comments.`,
  domains: [],
  members: [
    setMemberPosition(personDeejayGeroso, 'Front-end Developer'),
    {
      linkedIn: 'https://www.linkedin.com/in/jalil-laguindab',
      name: 'Jalil Laguindab',
      photo: {
        jpg: jalil,
        webP: jalilWebP,
      },
      position: 'Back-end Developer',
    },
  ],
  name: 'Dejablog (CMS)',
  photos: [
    {
      jpg: dejablog,
      webP: dejablogWebP,
    },
  ],
  position: 'Front-end Web Developer with semi Back-end Role',
  mainResponsibility:
    'Develop the front-end for content management system (CMS) for managing blog posts and user comments.',
  responsibilities: [
    'Define the structure of the front-end application',
    'Define and implement the UI/UX design',
    'Develop core front-end features',
    'Integrate front-end with backend APIs',
    'Ensure responsive and accessible design',
    'Write unit tests for front-end components',
  ],
  technology: ['ReactJS', 'Handlebars', 'MeteorJS', 'ExpressJS', 'MongoDB'],
};

export default dejablogProject;
