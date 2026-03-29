import { JSX } from 'react';

import Image from 'next/image';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import SectionTitle from '@/components/SectionTitle';
import { testimonials } from '@/data';
import { SectionPageIds } from '@/enums';

export default function TestimonialList(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component='section'
      id={SectionPageIds.TESTIMONIALS}
      sx={{ mt: 4, py: 4, background: '#fff' }}>
      <SectionTitle
        title='Testimonials'
        subtitle='What people I worked with say about me'
      />
      <Container
        maxWidth='md'
        sx={{ py: 4 }}>
        {testimonials.map(
          (t, index): JSX.Element => (
            <Card
              key={t.date + index}
              sx={{
                border: 'none',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}>
              {/* Left: Profile (hidden on mobile) */}
              {!isMobile && (
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Avatar sx={{ width: 210, height: 210 }}>
                    <Image
                      src={t.photo.webp || t.photo.default}
                      alt={t.name}
                      width={210}
                      height={210}
                    />
                  </Avatar>
                </Box>
              )}

              {/* Right: Details */}
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2, gap: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 2,
                    mb: { xs: 2, sm: 2, md: 0, lg: 0 },
                  }}>
                  {/* Small inline avatar on mobile */}
                  {isMobile && (
                    <Avatar sx={{ width: 80, height: 80 }}>
                      <Image
                        src={t.photo.webp || t.photo.default}
                        alt={t.name}
                        width={80}
                        height={80}
                        style={{ borderRadius: '50%' }}
                      />
                    </Avatar>
                  )}

                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    justifyContent='center'>
                    <Typography
                      variant='subtitle1'
                      component='h3'
                      fontWeight='bold'
                      sx={{
                        fontSize: {
                          xs: '1.4rem',
                          sm: '1.5rem',
                          md: '1.8rem',
                        },
                        pb: 0,
                        mb: 0,
                        lineHeight: 1.2,
                      }}>
                      {t.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='primary.main'
                      sx={{
                        fontWeight: 'bold',
                      }}>
                      {t.position}
                    </Typography>
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      fontStyle='italic'
                      display='block'>
                      {t.date}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 0 }}>
                  {t.comments.map((comment, i) => (
                    <Typography
                      key={comment + i}
                      variant='body1'
                      component='p'
                      color='text.primary'
                      sx={{ mb: 2 }}>
                      {comment}
                    </Typography>
                  ))}

                  {t.subComments && (
                    <List
                      dense
                      sx={{
                        pl: 4,
                        listStyleType: 'disc',
                      }}>
                      {t.subComments.map((sub, i) => (
                        <ListItem
                          key={`sub-${sub}-${i}`}
                          sx={{
                            display: 'list-item',
                            p: 0,
                          }}>
                          <ListItemText
                            primary={sub}
                            slotProps={{
                              primary: {
                                variant: 'body1',
                                color: 'text.primary',
                                component: 'span',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardContent>
              </Box>
            </Card>
          ),
        )}
      </Container>
    </Box>
  );
}
