import { adally1, adally2, denmark } from '@/assets/images';
import { adally1WebP, adally2WebP, denmarkWebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const adally = {
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
    setMemberPosition(personDeejayGeroso, 'Tech Lead & System Architect'),
    {
      linkedIn: null,
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
};

export default adally;
