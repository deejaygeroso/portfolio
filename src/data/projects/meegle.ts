import {
  angela,
  aryen,
  faithHall,
  giovanni,
  hazel,
  jason,
  jonCesar,
  marcoPaps,
  meegle,
  papaRods,
  portia,
  sheryl,
} from '@/assets/images';
import {
  angelaWebP,
  aryenWebP,
  faithHallWebP,
  giovanniWebP,
  hazelWebP,
  jasonWebP,
  jonCesarWebP,
  marcoPapsWebP,
  meegleWebP,
  papaRodsWebP,
  portiaWebP,
  sherylWebP,
} from '@/assets/images/webp';
import { personDeejayGeroso, personJunski, personVanessaFaithAbordo } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const meegleProject = {
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
    setMemberPosition(personDeejayGeroso, 'Mobile Developer'),
    {
      linkedIn: 'https://www.linkedin.com/in/faith-hall-35667720b',
      name: 'Faith Hall',
      photo: {
        jpg: faithHall,
        webP: faithHallWebP,
      },
      position: 'Senior Manager',
    },
    setMemberPosition(personJunski, 'Senior Front-end Developer'),
    {
      linkedIn: 'https://www.linkedin.com/in/roderick-gohetia',
      name: 'Roderick Gohetia',
      photo: {
        jpg: papaRods,
        webP: papaRodsWebP,
      },
      position: 'Senior Back-end Developer',
    },
    setMemberPosition(personVanessaFaithAbordo, 'Back-end Developer'),
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
      linkedIn: null,
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
  mainResponsibility: 'Design and develop the mobile application for the Meegle system.',
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
};

export default meegleProject;
