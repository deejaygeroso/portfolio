import { crypto1, crypto2, crypto3, richard } from '@/assets/images';
import { crypto1WebP, crypto2WebP, crypto3WebP, richardWebP } from '@/assets/images/webp';
import { personDeejayGeroso } from '@/data/persons';
import setMemberPosition from '@/data/setMemberPosition';

const crypto = {
  date: '',
  description:
    'A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation, profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App also has charts and graphs for historical data of cryptocurrencies.',
  domains: [],
  members: [
    setMemberPosition(personDeejayGeroso, 'Full-stack Javascript Developer'),
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
  mainResponsibility: 'Develop a web application that manages user portfolios for cryptocurrency assets.',
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
};

export default crypto;
