import {
  albertGeislerFox,
  donKennethDemayo,
  eskildBennedsen,
  jeeAnn,
  katrinaLozada,
  markMarilag,
  oliverDiamond,
  pavelSrom,
  performativ,
  peterBarry,
} from '@/assets/images';
import {
  albertGeislerFoxWebP,
  donKennethDemayoWebP,
  eskildBennedsenWebP,
  jeeAnnWebP,
  katrinaLozadaWebP,
  markMarilagWebP,
  oliverDiamondWebP,
  pavelSromWebP,
  performativWebP,
  peterBarryWebP,
} from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const performativProject = {
  address:
    'Main headquarters in Copenhagen, Denmark (Kronprinsensgade 2, 1114 Copenhagen K), and a UK registered office at 71-75 Shelton Street, London (WC2H 9JQ), also listing offices in Utrecht and Zurich',
  date: 'August 2021 - February 2022',
  description:
    'Performativ is a startup software company providing asset management solutions that help financial institutions manage client investments with greater accuracy and efficiency.',
  domains: [
    {
      name: 'performativ.com',
      url: 'https://performativ.com',
    },
  ],
  members: [
    setMemberPosition(personDeejayGeroso, 'Front-end Tech Lead'),
    {
      linkedIn: 'https://dk.linkedin.com/in/dkfox',
      name: 'Albert Geisler Fox',
      photo: {
        jpg: albertGeislerFox,
        webP: albertGeislerFoxWebP,
      },
      position: 'Founder & CEO',
    },
    {
      linkedIn: 'https://uk.linkedin.com/in/peterbarry',
      name: 'Peter Barry',
      photo: {
        jpg: peterBarry,
        webP: peterBarryWebP,
      },
      position: 'Co-founder & CTO',
    },
    {
      linkedIn: 'https://dk.linkedin.com/in/eskild-bennedsen-477180108',
      name: 'Eskild Bennedsen',
      photo: {
        jpg: eskildBennedsen,
        webP: eskildBennedsenWebP,
      },
      position: 'Operations Manager',
    },
    {
      linkedIn: 'https://uk.linkedin.com/in/oliverdiamond',
      name: 'Oliver Diamond',
      photo: {
        jpg: oliverDiamond,
        webP: oliverDiamondWebP,
      },
      position: 'Senior Dev - Server Side Microservices',
    },
    {
      linkedIn: 'https://dk.linkedin.com/in/pavel-srom-3011a8171',
      name: 'Pavel Srom',
      photo: {
        jpg: pavelSrom,
        webP: pavelSromWebP,
      },
      position: 'React Dev Intern',
    },
    {
      linkedIn: '',
      name: 'Sebastian Mikkel Lassen',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Backend Developer',
    },
    {
      linkedIn: 'https://ph.linkedin.com/in/kennethgdemayo',
      name: 'Don Kenneth Demayo',
      photo: {
        jpg: donKennethDemayo,
        webP: donKennethDemayoWebP,
      },
      position: 'Frontend Developer',
    },
    {
      linkedIn: 'https://ph.linkedin.com/in/mark-chriztopher-marilag-746260a8',
      name: 'Mark Marilag',
      photo: {
        jpg: markMarilag,
        webP: markMarilagWebP,
      },
      position: 'Fullstack Developer',
    },
    {
      linkedIn: '',
      name: 'Jee Ann Rivera',
      photo: {
        jpg: jeeAnn,
        webP: jeeAnnWebP,
      },
      position: 'Fullstack Developer',
    },
    {
      linkedIn: 'https://ph.linkedin.com/in/katrin-lozada-9157b211a',
      name: 'Katrin Lozada',
      photo: {
        jpg: katrinaLozada,
        webP: katrinaLozadaWebP,
      },
      position: 'Application Tester',
    },
  ],
  name: 'Performativ',
  photos: [
    {
      jpg: performativ,
      webP: performativWebP,
    },
  ],
  position: 'Front-end Tech Lead',
  mainResponsibility:
    'Responsible for front-end technical direction, coding standards and guidelines, code quality, API integration, and delivery, while enabling the team to build scalable, maintainable, and high-quality user experiences.',
  responsibilities: [
    'Define and enforce front-end coding standards and guidelines',
    'Improve repository structure and directory architecture',
    'Reimplement Auth0 authentication to fix bugs and incorrect behavior',
    'Plan component abstractions and refactor for reusability',
    'Plan features and break them down into clear technical tasks',
    'Delegate front-end tasks and ensure timely delivery',
    'Select appropriate technologies and third-party packages',
    'Review front-end pull requests and maintain code quality',
    'Set up and enforce unit testing practices',
    'Configure and maintain linting and Prettier',
    'Create GitHub pipelines for testing, linting, and security checks',
    'Remove dead code and reduce technical debt',
    'Analyze UI/UX and define improvement plans',
    'Implement new UI features and product enhancements',
    'Set up Cypress end-to-end testing',
    'Integrate E2E tests into existing build pipelines',
    'Create basic E2E CRUD tests as QA references',
  ],
  technology: ['React', 'React Query', 'Typescript', 'Auth0', 'Ant-D', 'i18next', 'Cypress', 'PHP Laravel'],
};

export default performativProject;
