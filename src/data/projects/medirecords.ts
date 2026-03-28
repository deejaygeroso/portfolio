import { medirecords1, medirecords2, medirecords3 } from '@/assets/images';
import { medirecords1WebP, medirecords2WebP, medirecords3WebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const medirecords = {
  address: 'Level 5, 1 Elizabeth Plaza, North Sydney NSW 2060',
  date: 'April 2022 - Present',
  description:
    'MediRecords is a cloud-based practice and patient management platform designed for the Australian healthcare ecosystem.',
  domains: [
    {
      name: 'medirecords.com',
      url: 'https://medirecords.com',
    },
  ],
  members: [
    setMemberPosition(personDeejayGeroso, 'Senior Front-end Developer (Core Architecture) '),
    {
      linkedIn: 'https://au.linkedin.com/in/veyronfei',
      name: 'Fei Teng',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Former CTO',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/sflodin',
      name: 'Staffan Flodin',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Interim CTO',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/mickfaber',
      name: 'Jayne Thompson',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Chief Product Officer',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/mickfaber',
      name: 'Mick Faber',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Portfolio Manager',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/ameer-khalaf-57856991',
      name: 'Ameer Khalaf',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Frontend Tech Lead ',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/achmad-fajar-ridwan-a855a718',
      name: 'Achmad Fajar Ridwan',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Principal Engineer',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/zheng-jeremy-yang-11122760',
      name: 'Jeremy Yang',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Development Team Lead',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/reynaldo-nery-ab25212',
      name: 'Reynaldo Nery',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Customer Support Manager',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/reynaldo-nery-ab25212',
      name: 'Michael Xi,',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'DevOps Lead',
    },
    {
      linkedIn: 'https://www.linkedin.com/in/gwen-mico-singalawa-230ab8163',
      name: 'Gwen Mico Singalawa',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'DevOps',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/bec-price',
      name: 'Bec Price',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/amanjot-kaur-9064796a',
      name: 'Aman Kaur',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/tinaraftopoulos-product-manager',
      name: 'Tina Raftopoulos',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },

    {
      linkedIn: 'https://au.linkedin.com/in/christopher-brown-pm',
      name: 'Chris Brown',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/tinaraftopoulos-product-manager',
      name: 'Tina Raftopoulos',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/sanjeedquaiyumi',
      name: 'Sanjeed Quaiyumi',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/khika-withnell',
      name: 'Khika Withnell',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
    {
      linkedIn: 'https://au.linkedin.com/in/megan-harker-38a6821b2',
      name: 'Megan Harker',
      photo: {
        jpg: null,
        webP: null,
      },
      position: 'Product Owner',
    },
  ],
  name: 'Medirecords',
  photos: [
    {
      jpg: medirecords1,
      webP: medirecords1WebP,
    },
    {
      jpg: medirecords2,
      webP: medirecords2WebP,
    },
    {
      jpg: medirecords3,
      webP: medirecords3WebP,
    },
  ],
  position: 'Senior Front-end Developer (Core Architecture)',
  mainResponsibility:
    'Responsible for core frontend architecture and technical direction—the NX monorepo design system, shared packages, automated CI/CD, and cross-team standards—while supporting modular squads, leading migration from legacy Kendo and React UIs to the new design system, and maintaining documentation plus AI-assisted workflows for consistent, high-quality delivery.',
  responsibilities: [
    'Shape frontend architecture, technology selection, and roadmap priorities',
    'Build design system with NX, MUI, React, and Storybook',
    'Improve UI consistency, component reuse, and development speed',
    'Centralize reusable frontend libraries in an NX monorepo',
    'Publish shared frontend packages as private GitHub Packages',
    'Architect automated CI/CD for dev, staging, and production',
    'Add hotfixes, security scans, SonarQube, lint, and Prettier',
    'Establish and enforce frontend architecture standards across teams',
    'Engineered Copilot and Cursor rules for design system workflows',
    'Accelerate component work, hooks, APIs, and Kendo migration via AI Agents',
    'Support modular teams with all tech needs and requirements',
    'Lead Migration strategy of legacy UI (Kendo & React) with new Design System',
    'Maintain documentation and visual architecture diagrams for teams',
  ],
  technology: [
    'React',
    'NX',
    'Lerna',
    'Vite',
    'Webpack',
    'MUI',
    'Bootstrap',
    'Storybook',
    'Cypress',
    'Kendo',
    'Syncfusion',
    'PdfJS',
    'Java Springboot',
  ],
};

export default medirecords;
