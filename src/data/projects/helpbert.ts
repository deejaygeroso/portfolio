import { helpbert } from '@/assets/images';
import { helpbertWebP } from '@/assets/images/webp';
import { personDeejayGeroso, personJunski, personVanessaFaithAbordo } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const helpbertProject = {
  date: '',
  description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
  domains: [],
  members: [
    setMemberPosition(personDeejayGeroso, 'Mobile Developer'),
    setMemberPosition(personJunski, 'Full-stack Developer'),
    setMemberPosition(personVanessaFaithAbordo, 'Back-end Developer'),
  ],
  name: 'Helpbert',
  photos: [
    {
      jpg: helpbert,
      webP: helpbertWebP,
    },
  ],
  position: 'Mobile Developer (ios & android)',
  mainResponsibility: 'Design, plan and develop the mobile application for the Helpbert ticketing system.',
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
};

export default helpbertProject;
