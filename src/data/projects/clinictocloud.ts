import { becPrice, brianAlcuaz, c2cToolbar, markLalor, saraJavan } from '@/assets/images';
import { becPriceWebP, brianAlcuazWebP, c2cToolbarWebP, markLalorWebP, saraJavanWebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const clinictocloud = {
  address: 'Level 9/70 Pitt St, Sydney NSW 2000, Australia',
  date: 'August 2020 - April 2021',
  description:
    'Clinic to Cloud is a secure, scalable Medical Practice Management Platform that optimizes practice operations, improves financial performance, and delivers better patient experiences.',
  domains: [
    {
      name: 'clinictocloud.com',
      url: 'https://www.clinictocloud.com',
    },
  ],
  members: [
    setMemberPosition(personDeejayGeroso, 'Senior Front-end Developer'),
    {
      linkedIn: 'https://au.linkedin.com/in/bec-price',
      name: 'Bec Price',
      photo: {
        jpg: becPrice,
        webP: becPriceWebP,
      },
      position: 'Business Analyst',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/mark-lalor-40a78214',
      name: 'Mark Lalor',
      photo: {
        jpg: markLalor,
        webP: markLalorWebP,
      },
      position: 'System Architect, Head of Team & CEO of ProcQ',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/sarajavan',
      name: 'Sara Javan',
      photo: {
        jpg: saraJavan,
        webP: saraJavanWebP,
      },
      position: 'Senior UI UX Designer',
    },
    {
      linkedIn: 'https://ph.linkedin.com/in/brian-alcuaz',
      name: 'Brian Alcuaz',
      photo: {
        jpg: brianAlcuaz,
        webP: brianAlcuazWebP,
      },
      position: 'Quality Assurance',
    },
  ],
  name: 'Clinic To Cloud',
  photos: [
    {
      jpg: c2cToolbar,
      webP: c2cToolbarWebP,
    },
  ],
  position: 'Senior Front-end Developer',
  mainResponsibility:
    "Develop a modular Customized Document Editor using Syncfusion Library that can be imported to Clinic To Cloud's application and is able to integrate to existing API's in the system.",
  responsibilities: [
    'Set up the project repository',
    'Setup repo coding standards and guidelines',
    'Implement the UI/UX Designs provided by the designer',
    'Ensure responsive and accessible design',
    'Develop UI components',
    'Integrate module to BE APIs',
    'Write unit tests for front-end components',
  ],
  technology: [],
};

export default clinictocloud;
