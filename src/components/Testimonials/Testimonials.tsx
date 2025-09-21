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

import { testimonials } from '@/data';

export default function TestimonialList(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: 4, py: 4, background: '#fff' }}>
      <Container
        maxWidth='md'
        sx={{ py: 4 }}>
        {testimonials.map(
          (t, index): JSX.Element => (
            <Card
              key={t.date + index}
              sx={{
                mb: 3,
                border: 'none',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                p: 2,
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
                  <Avatar sx={{ width: 200, height: 200 }}>
                    <Image
                      src={t.photo.webp || t.photo.default}
                      alt={t.name}
                      width={200}
                      height={200}
                      style={{ borderRadius: '50%' }}
                    />
                  </Avatar>
                </Box>
              )}

              {/* Right: Details */}
              <Box sx={{ flex: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: { xs: 2, sm: 2, md: 0, lg: 0 },
                  }}>
                  {/* Small inline avatar on mobile */}
                  {isMobile && (
                    <Avatar sx={{ width: 40, height: 40 }}>
                      <Image
                        src={t.photo.webp || t.photo.default}
                        alt={t.name}
                        width={40}
                        height={40}
                        style={{ borderRadius: '50%' }}
                      />
                    </Avatar>
                  )}

                  <Typography
                    variant='subtitle1'
                    fontWeight='bold'
                    sx={{
                      fontSize: {
                        xs: '1rem',
                        sm: '1.25rem',
                        md: '1.8rem',
                      },
                    }}>
                    {t.name}
                  </Typography>
                </Box>

                <Typography
                  variant='body2'
                  color='text.secondary'>
                  {t.position}
                </Typography>
                <Typography
                  variant='caption'
                  color='text.disabled'
                  display='block'
                  mb={1}>
                  {t.date}
                </Typography>

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
