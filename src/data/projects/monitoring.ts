import { erick, jd, monitoring } from '@/assets/images';
import { erickWebP, jdWebP, monitoringWebP } from '@/assets/images/webp';

import { personDeejayGeroso, personVanessaFaithAbordo } from '../persons';
import setMemberPosition from '../setMemberPosition';

const monitoringProject = {
  date: '',
  description: 'An application that monitors servers, domains and websites.',
  domains: [],
  members: [
    setMemberPosition(personDeejayGeroso, 'Mobile Developer'),
    setMemberPosition(personVanessaFaithAbordo, 'Back-end Developer'),
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
  mainResponsibility: 'Design and develop the mobile application for the Meegle Monitoring system.',
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
};

export default monitoringProject;
