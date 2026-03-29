import { JSX } from 'react';

import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material';

import SectionTitle from '@/components/SectionTitle';
import { SectionPageIds } from '@/enums';

const SKILLS = [
  'React',
  'TypeScript',
  'Next.js',
  'NX Monorepo',
  'Material UI',
  'Storybook',
  'Node.js',
  'Express',
  'Fastify',
  'Prisma',
  'Apollo GraphQL',
  'REST APIs',
  'Git',
  'Jest',
  'CI/CD',
  'Docker',
  'AWS (ECS, EC2, S3, etc.)',
];

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Industries Served' },
];

export default function About(): JSX.Element {
  return (
    <Box
      component='section'
      id={SectionPageIds.ABOUT}
      sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container maxWidth='md'>
        <SectionTitle title='About Me' />

        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
            color: 'text.primary',
            textAlign: { xs: 'left', md: 'center' },
            mb: 2,
          }}>
          I&apos;m a Senior Frontend Developer with 10+ years of experience shipping scalable web applications that
          drive business results. I specialise in <strong>React and TypeScript</strong> ecosystems, with deep expertise
          in SaaS platforms, <strong>Design Systems</strong> that accelerate team velocity. My full-stack capabilities
          span <strong>Node.js, Express, and Fastify</strong>, <strong>PostgreSQL & MongoDB</strong>, and{' '}
          <strong>AWS</strong> cloud infrastructure (ECS, EC2, S3) — enabling me make better architectural decisions
          that aligns with the overall infrastructure.
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
            color: 'text.primary',
            textAlign: { xs: 'left', md: 'center' },
            mb: 2,
          }}>
          I build strong cross-functional partnerships with product owners, designers, and stakeholders to align
          engineering work with business goals. As technology evolves rapidly with AI, I&apos;m highly adaptable and
          actively adopting these new tools and workflows to deliver greater value and stay ahead of the curve.
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
            color: 'text.secondary',
            textAlign: { xs: 'left', md: 'center' },
            mb: 6,
          }}>
          I care deeply about performance, automation, and scalability — building systems and tooling that let teams
          ship faster and work with confidence.
        </Typography>

        {/* Stats */}
        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{ mb: 6 }}>
          {STATS.map(stat => (
            <Grid
              key={stat.label}
              size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: 'primary.main',
                    lineHeight: 1.2,
                  }}>
                  {stat.value}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mt: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 4 }} />

        {/* Skills */}
        <Typography
          variant='overline'
          sx={{
            display: 'block',
            textAlign: 'center',
            mb: 2,
            letterSpacing: 2,
            color: 'text.secondary',
          }}>
          Tech Stack
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            justifyContent: 'center',
          }}>
          {SKILLS.map(skill => (
            <Chip
              key={skill}
              label={skill}
              variant='outlined'
              sx={{
                fontWeight: 500,
                fontSize: '0.85rem',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: '#ffffff',
                },
                transition: 'background-color 0.2s ease, color 0.2s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
