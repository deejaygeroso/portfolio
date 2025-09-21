import { IMember, IProject } from '@/interfaces';

import {
  adally1,
  adally2,
  angela,
  aryen,
  becPrice,
  brianAlcuaz,
  c2cToolbar,
  chris,
  crypto1,
  crypto2,
  crypto3,
  databased,
  deejay,
  dejablog,
  denmark,
  dustin,
  erick,
  faithHall,
  giovanni,
  hazel,
  helpbert,
  jalil,
  jason,
  jd,
  jonCesar,
  junski,
  justin,
  marcoPaps,
  markLalor,
  meegle,
  monitoring,
  papaRods,
  portia,
  richard,
  saraJavan,
  sheryl,
  vanessa,
} from '../assets/images';
import {
  adally1WebP,
  adally2WebP,
  angelaWebP,
  aryenWebP,
  becPriceWebP,
  brianAlcuazWebP,
  c2cToolbarWebP,
  chrisWebP,
  crypto1WebP,
  crypto2WebP,
  crypto3WebP,
  databasedWebP,
  deejayWebP,
  dejablogWebP,
  denmarkWebP,
  dustinWebP,
  erickWebP,
  faithHallWebP,
  giovanniWebP,
  hazelWebP,
  helpbertWebP,
  jalilWebP,
  jasonWebP,
  jdWebP,
  jonCesarWebP,
  junskiWebP,
  justinWebP,
  marcoPapsWebP,
  markLalorWebP,
  meegleWebP,
  monitoringWebP,
  papaRodsWebP,
  portiaWebP,
  richardWebP,
  saraJavanWebP,
  sherylWebP,
  vanessaWebP,
} from '../assets/images/webp';

const deejayGerosoLinkedIn = 'https://www.linkedin.com/in/deejaygeroso';
const memberDeejayGeroso = {
  linkedIn: deejayGerosoLinkedIn,
  name: 'Deejay Geroso',
  photo: {
    jpg: deejay,
    webP: deejayWebP,
  },
  position: '',
};
const memberVanessaFaithAbordo = {
  linkedIn: 'https://www.linkedin.com/in/vanessa-faith-abordo-24a673131',
  name: 'Vanessa Faith Abordo',
  photo: {
    jpg: vanessa,
    webP: vanessaWebP,
  },
  position: '',
};
const memberJunski = {
  linkedIn: 'https://www.linkedin.com/in/casan-jr-mala-58b796a7',
  name: 'Casan Jr Mala',
  photo: {
    jpg: junski,
    webP: junskiWebP,
  },
  position: '',
};
const setMemberPosition = (member: IMember, position: string): IMember => {
  return { ...member, position };
};

const projects: IProject[] = [
  {
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
      setMemberPosition(memberDeejayGeroso, 'Senior Front-end Developer'),
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
  },
  {
    address: 'Ponte Vedra, Florida, United States of America',
    date: 'January 2020 - June 2020',
    description:
      'An application that runs real-time homepage and full page scan to find out if your website is ADA (Americans with Disabilities Act Standards for Accessible) compliant.',
    domains: [
      {
        name: 'adally.com',
        url: 'https://www.adally.com',
      },
    ],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Tech Lead & System Architect'),
      {
        linkedIn: '',
        name: 'Micah Uyeharam',
        photo: {
          jpg: null,
          webP: null,
        },
        position: 'Project Supervisor',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/denmark-tabiolo-b45839a9',
        name: 'Denmark Tabiolo',
        photo: {
          jpg: denmark,
          webP: denmarkWebP,
        },
        position: 'ReactJS Developer',
      },
    ],
    name: 'Adally',
    photos: [
      {
        jpg: adally1,
        webP: adally1WebP,
      },
      {
        jpg: adally2,
        webP: adally2WebP,
      },
    ],
    position: 'Tech Lead & System Architect',
    mainResponsibility:
      'Develop a system that can scan websites and generate reports if the website is ADA (Americans with Disabilities Act Standards for Accessible) compliant that can send email reports to customers.',
    responsibilities: [
      'Plan and design the architecture of the whole application',
      'Plan project & features delivery',
      'Set up the project repository',
      'Setup repo coding standards and guidelines',
      'Setup automated deployment process with GitHub CI/CD',
      'Setup and configure AWS services (EC2, ECS, S3, Route53, IAM etc.)',
      'Define and implement the UI/UX design',
      'Ensure responsive and accessible design',
      'Develop UI components',
      'Write backend APIs',
      'Write unit tests',
      'Implement mailing microservice using Go Lang',
    ],
    technology: [
      'AWS (Route53, ECS with Fargate, ECS with EC2 instance, S3 etc.)',
      'Gitlab CI/CD',
      'Docker',
      'Typescript, Go Lang (Mailing Microservice)',
      'ReactJS (hooks), NodeJS, Express, Apollo GraphQL (Client & Server)',
      'MongoDB',
    ],
  },
  {
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
      setMemberPosition(memberDeejayGeroso, 'Full-stack Developer'),
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
    responsibilities: [
      'Develop core front-end features',
      'Write unit tests for front-end components',
      'Integrate front-end with backend APIs',
      'Ensure responsive and accessible design',
    ],
    technology: [],
  },
  {
    date: '',
    description:
      'A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation, profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App also has charts and graphs for historical data of cryptocurrencies.',
    domains: [],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Full-stack Javascript Developer'),
      {
        linkedIn: 'https://www.linkedin.com/in/richardsalem',
        name: 'Richard Paul Salem',
        photo: {
          jpg: richard,
          webP: richardWebP,
        },
        position: 'Product Owner',
      },
    ],
    name: 'Crypto Asset Management',
    photos: [
      {
        jpg: crypto1,
        webP: crypto1WebP,
      },
      {
        jpg: crypto2,
        webP: crypto2WebP,
      },
      {
        jpg: crypto3,
        webP: crypto3WebP,
      },
    ],
    position: 'Full-stack Javascript Developer',
    responsibilities: [
      'Plan and design the architecture of the whole application',
      'Set up the project repository',
      'Setup repo coding standards and guidelines',
      'Setup automated deployment process with Gitlab CI/CD',
      'Setup and configure AWS services (EC2, S3, Route53, IAM etc.)',
      'Define and implement the UI/UX design',
      'Ensure responsive and accessible design',
      'Develop UI components',
      'Write backend APIs',
      'Write unit tests',
    ],
    technology: ['ReactJS', 'Redux', 'NextJS', 'ExpressJS', 'MongoDB', 'CoinMarketCap API version 1'],
  },
  {
    date: '',
    description:
      'A system that helps business owners manage their own website, online social engagements all in one single application.',
    domains: [
      {
        name: 'meegle-ios',
        url: 'https://apps.apple.com/us/app/meegle/id1243305648#?platform=iphonem',
      },
      {
        name: 'meegle-android',
        url: 'https://play.google.com/store/apps/details?id=com.snapzio.meegle&hl=en',
      },
    ],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      {
        linkedIn: 'https://www.linkedin.com/in/faith-hall-35667720b',
        name: 'Faith Hall',
        photo: {
          jpg: faithHall,
          webP: faithHallWebP,
        },
        position: 'Senior Manager',
      },
      setMemberPosition(memberJunski, 'Senior Front-end Developer'),
      {
        linkedIn: 'https://www.linkedin.com/in/roderick-gohetia',
        name: 'Roderick Gohetia',
        photo: {
          jpg: papaRods,
          webP: papaRodsWebP,
        },
        position: 'Senior Back-end Developer',
      },
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      {
        linkedIn: 'https://ph.linkedin.com/in/giovanni-lobitos-208706115',
        name: 'Giovanni Lobitos',
        photo: {
          jpg: giovanni,
          webP: giovanniWebP,
        },
        position: 'Front-end Developer',
      },
      {
        linkedIn: 'https://ph.linkedin.com/in/ajbejagan',
        name: 'Aryen Jim Bejagan',
        photo: {
          jpg: aryen,
          webP: aryenWebP,
        },
        position: 'Website Designer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/jason-abella-b4837215a',
        name: 'Jason Abella',
        photo: {
          jpg: jason,
          webP: jasonWebP,
        },
        position: 'Website Designer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/marcopaps',
        name: 'Marco Budiongan',
        photo: {
          jpg: marcoPaps,
          webP: marcoPapsWebP,
        },
        position: 'DevOps Engineer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/jon-cesar-tagsip-1129ab15b',
        name: 'Jon Cesar Tagsip',
        photo: {
          jpg: jonCesar,
          webP: jonCesarWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: '',
        name: 'Hazel Ko Lumactod',
        photo: {
          jpg: hazel,
          webP: hazelWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/sheryl-picante-865089176',
        name: 'Sheryl Picante',
        photo: {
          jpg: sheryl,
          webP: sherylWebP,
        },
        position: 'Quality Assurance',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/portia-linao',
        name: 'Portia Linao',
        photo: {
          jpg: portia,
          webP: portiaWebP,
        },
        position: 'Marketing Specialist',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/angeladoloricon',
        name: 'Angela Doloricon',
        photo: {
          jpg: angela,
          webP: angelaWebP,
        },
        position: 'Marketing Specialist',
      },
    ],
    name: 'Meegle',
    photos: [
      {
        jpg: meegle,
        webP: meegleWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    responsibilities: [
      'Set up the project repository',
      'Setup repo coding standards and guidelines',
      'Define the structure of the front-end application',
      'Define and implement the UI/UX design',
      'Develop core front-end features',
      'Integrate front-end with backend APIs',
      'Ensure responsive and accessible design',
      'Write unit tests for front-end components',
      'Publish and maintain apps on the Apple App Store and Google Play Store',
    ],
    technology: [
      'React Native (ios & android)',
      'Redux-observable',
      'Feathers JS (Client)',
      'FacebookSDK',
      'GoogleSDK',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
      'OneSignalSDK (Notification Upgrade)',
    ],
  },
  {
    date: '',
    description: 'An application that monitors servers, domains and websites.',
    domains: [],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      {
        linkedIn: 'https://sg.linkedin.com/in/johncrisostomo',
        name: 'John Crisostomo',
        photo: {
          jpg: jd,
          webP: jdWebP,
        },
        position: 'Tech Lead & Back-end Developer',
      },
      {
        linkedIn: 'https://www.linkedin.com/in/john-erick-madduma-300083113',
        name: 'John Erick Madduma',
        photo: {
          jpg: erick,
          webP: erickWebP,
        },
        position: 'Front-end Developer',
      },
    ],
    name: 'Meegle Monitoring',
    photos: [
      {
        jpg: monitoring,
        webP: monitoringWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    responsibilities: [
      'Set up the project repository',
      'Setup repo coding standards and guidelines',
      'Define the structure of the front-end application',
      'Define and implement the UI/UX design',
      'Develop core front-end features',
      'Integrate front-end with backend APIs',
      'Ensure responsive and accessible design',
      'Write unit tests for front-end components',
      'Publish and maintain apps on the Apple App Store and Google Play Store',
    ],
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)'],
  },
  {
    date: '',
    description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
    domains: [],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      setMemberPosition(memberJunski, 'Full-stack Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
    ],
    name: 'Helpbert',
    photos: [
      {
        jpg: helpbert,
        webP: helpbertWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    responsibilities: [
      'Set up the project repository',
      'Setup repo coding standards and guidelines',
      'Define the structure of the front-end application',
      'Define and implement the UI/UX design',
      'Develop core front-end features',
      'Integrate front-end with backend APIs',
      'Ensure responsive and accessible design',
      'Write unit tests for front-end components',
      'Publish and maintain apps on the Apple App Store and Google Play Store',
    ],
    technology: [
      'React Native (ios & android)',
      'Redux',
      'Feathers JS (Client)',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
    ],
  },
  {
    date: '',
    description: `An application that can create and manage the multiple blogs, posts and user comments.`,
    domains: [],
    members: [
      setMemberPosition(memberDeejayGeroso, 'Front-end Developer'),
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
    responsibilities: [
      'Define the structure of the front-end application',
      'Define and implement the UI/UX design',
      'Develop core front-end features',
      'Integrate front-end with backend APIs',
      'Ensure responsive and accessible design',
      'Write unit tests for front-end components',
    ],
    technology: ['ReactJS', 'Handlebars', 'MeteorJS', 'ExpressJS', 'MongoDB'],
  },
];

export default projects;
