import { chris, databased, dustin, justin } from '@/assets/images';
import { chrisWebP, databasedWebP, dustinWebP, justinWebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const databasedProject = {
  address: 'American Fork, Utah, United States of America',
  date: 'March 2019 - January 2020',
  description: `A CRM (Content Relationship Management System) that helps companies improve sales productivity by tracking progress based on actual data and gives a better perspective for companies on which effort provides the greatest return.`,
  domains: [
    {
      name: 'databased.com',
      url: 'https://www.databased.com',
    },
  ],
  members: [
    setMemberPosition(personDeejayGeroso, 'Full-stack Developer'),
    {
      linkedIn: 'https://www.linkedin.com/in/dustintwatkins',
      name: 'Dustin Watkins',
      photo: {
        jpg: dustin,
        webP: dustinWebP,
      },
      position: 'Co-Founder and Head of Engineering',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/christophergbradshaw',
      name: 'Christopher Bradshaw',
      photo: {
        jpg: chris,
        webP: chrisWebP,
      },
      position: 'Front-end Team Lead',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/justin-lee-behnke-a9956b8a',
      name: 'Justin Lee Behnke',
      photo: {
        jpg: justin,
        webP: justinWebP,
      },
      position: 'Founding Engineer',
    },
  ],
  name: 'Databased',
  photos: [
    {
      jpg: databased,
      webP: databasedWebP,
    },
  ],
  position: 'Full-stack Typescript Developer',
  mainResponsibility: 'Develop front-end features and backend APIs of the application.',
  responsibilities: [
    'Develop core front-end features',
    'Write backend APIs',
    'Write unit tests',
    'Integrate front-end with backend APIs',
    'Ensure responsive and accessible design',
  ],
  technology: [],
};

export default databasedProject;
