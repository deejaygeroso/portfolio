import { ITestimonial } from '@/interfaces'

import { denmark250x250, dustin250x250, saraJavan250x250, sylviaEspina250x250, tinaRaftopoulos250x250, vanessa250x250 } from '../assets/images'
import { denmark250x250WebP, dustin250x250WebP, saraJavan250x250WebP, sylviaEspina250x250WebP, tinaRaftopoulos250x250WebP, vanessa250x250WebP } from '../assets/images/webp'

const testimonials: ITestimonial[] = [
    {
    comments: [
      "Deejay is a passionate developer who is well-versed in React and the third-party integration tool Syncfusion Document Editor. Deejay was in my team at Medirecords, a SAAS for GP and Allied Health Professionals. He is committed to finding the best and most optimum solution when developing our feature and product(s), thoroughly researches tools, and documentation and works his way through any development problem big or small. He is a great contribution to the team, great to work with and a great developer.",
      "I highly recommend Deejay for any project or company and I am very happy to have the opportunity to work with him.",
    ],
    date: 'Febraury 2, 2023',
    name: 'Tina Raftopoulos',
    photo: {
      default: tinaRaftopoulos250x250,
      webp: tinaRaftopoulos250x250WebP,
    },
    position: 'Product Owner @ Medirecords',
  },
    {
    comments: [
      "Deejay is one of the great developers that I have worked with.  He's very knowledgeable and always ready to help every member of the team. He also makes sure that he understood the product and gives suggestions for any improvements needed.",
    ],
    date: 'October 14, 2022',
    name: 'Sylvia Espiña',
    photo: {
      default: sylviaEspina250x250,
      webp: sylviaEspina250x250WebP,
    },
    position: 'Software Quality Assurance Analyst @ Medirecords',
  },
  {
    comments: [
      "Deejay is one of the most hardworking and passionate developers I've ever worked with. His communication skills are his strengths.",
      'I have always found him easy to work with. He always takes his time to listen to ideas and requirements and help to come up with a practical solution in collaboration with the team.',
      'We were absolutely fortunate to have him on the team.',
    ],
    date: 'January 31, 2021',
    name: 'Sara Javan',
    photo: {
      default: saraJavan250x250,
      webp: saraJavan250x250WebP,
    },
    position: 'Senior UI UX Designer @ Clinic To Cloud',
  },
  {
    comments: [
      'Based on my experience as a developer, Deejay was the best teammate that I had ever worked with. He is really knowledgeable and passionate with his craft. He is a hardworking person and a good leader.',
      "He's pretty much flexible that he can do Frontend Development, Backend Development, Database Management and even Dev Ops with ease.",
      'As a leader, he is also considerate and open to fresh ideas giving his teammates the opportunity to shine. No doubt, I highly recommend this guy.',
    ],
    date: 'June 29, 2020',
    name: 'Denmark Tabiolo',
    photo: {
      default: denmark250x250,
      webp: denmark250x250WebP,
    },
    position: 'ReactJS Developer @ Adally',
  },
  {
    comments: ['Having worked with Deejay for almost a year, I learned a few things about him:'],
    date: 'January 4, 2020',
    name: 'Dustin Watkins',
    photo: {
      default: dustin250x250,
      webp: dustin250x250WebP,
    },
    position: 'Co-Founder and Head of Engineering of Databased',
    subComments: [
      'He is a hard worker',
      'He is a doer, not a complainer',
      'He takes initiative I also appreciated his sincere effort in getting to know the team members personally as a remote developer. His warm personality made the whole remote experience much better.',
    ],
  },
  {
    comments: [
      'Deejay is a proficient React Native developer and a great team player. He is knowledgeable not only on front-end, but on backend and devops roles as well. He can do full stack development but more focus on mobile.',
    ],
    date: 'March 2, 2019',
    name: 'Vanessa Faith Abordo',
    photo: {
      default: vanessa250x250,
      webp: vanessa250x250WebP,
    },
    position: 'Software Engineer @ Snapzio Inc.',
  },
]

export default testimonials
