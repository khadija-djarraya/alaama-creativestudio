import { Box, Grid, useMediaQuery, Typography } from '@mui/material';
import theme from '../theme';

export default function Section3() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const content = [
                    "We aim to make our clients unforgettable. Through intentional design and digital strategy, we help brands break through the noise and stay top-of-mind in their industries.",
                    "We foster two-way conversations across platforms — from social media to websites — turning passive audiences into loyal communities who feel seen, heard, and connected to your brand.",
                    "Whether it's a new app, service, or visual identity, we position every launch as a moment of impact — generating excitement and curiosity while reinforcing your brand's uniqueness.",
                    "We believe in creativity with results. Every project is guided by clear KPIs like engagement, reach, conversions, and user growth — proving the power of design and strategy in driving real business outcomes."
                  ];
  const titles = [
              "Increase brand awareness",
              "Drive engagement",
              "Support product launch",
              "Achieve measurable results"
            ];
  // Mobile Layout
  if (isMobile) {
    return (
      <Box
        component="section"
        sx={{
          width: '100%',
          minHeight: '100%',
          margin: 0,
          padding: '10px',
          paddingTop: '80px',
          overflowX: 'hidden',
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: 1,
            gap: 2
          }}>
            <Box sx={{ 
              fontSize: '3rem',
              alignSelf: 'flex-end',
              fontFamily: 'Garet, sans-serif'
            }}>
              <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'larger', color: '#000' }}>
                M
              </span>
              ISSION
            </Box>
            
            <Box sx={{ width: '100%' }}>
              <img
                src="/images/phoneteam.jpg"
                alt="Mission"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            
            <Box sx={{ 
              fontSize: '3rem',
              fontFamily: 'Times New Roman, serif',
              alignSelf: 'flex-start'
            }}>
              VALUE
              <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'larger', color: '#000' }}>
                S
              </span>
            </Box>
          </Grid>
          
          <Grid item xs={12} sx={{ padding: 1 }}>
            <Box sx={{ 
              fontFamily: 'Garet_light, sans-serif',
              fontSize: '1rem',
              textAlign: 'justify',
              mb: 2
            }}>
              <Typography
  component="span"
  sx={{
    fontFamily: 'Times New Roman, serif',
    fontSize: '1.5rem',
    fontStyle: 'italic'
  }}
>
  At Alaama Creative Studio
</Typography>
            , our mission is to empower ambitious brands and startups by creating memorable digital experiences, bold brand identities, and meaningful media strategies that inspire connection, spark engagement, and deliver measurable growth. We strive to turn visionary ideas into impactful realities through creativity, innovation, and purpose-driven storytelling.
            </Box>
            
            {/* <Box sx={{ width: '100%' }}>
              <img
                src="/images/phoneteam.jpg"
                alt="Values"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box> */}
          </Grid>
          
          <Grid item xs={12} sx={{ padding: 1 }}>
            {titles.map((item, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ 
                  fontFamily: 'Times New Roman, serif',
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  mb: 1
                }}>
                  {item}
                </Box>
                <Box sx={{ fontFamily: 'Garet_light, sans-serif', fontSize: '0.9rem' }}>
                  {content[index]}
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    );
  }

  // Desktop Layout (your original code exactly)
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100%',
        margin: 0,
        padding: '10px',
        paddingTop: '80px',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container spacing={0} alignItems="stretch" sx={{ width: '100%' }} justifyContent="center" gap={2}>
        <Grid item size={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 3 }}>
          <Box sx={{ fontSize: '5rem', alignSelf: 'flex-end', fontFamily: 'Garet, sans-serif' }}>
            <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'larger', color: theme.palette.primary.main }}>
              M
            </span>
            ISSION     
          </Box>
           
          <Box sx={{ fontSize: '5rem', fontFamily: 'Times New Roman, serif' }}>
            VALUE
            <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'larger', color: theme.palette.primary.main }}>
              S
            </span>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
            <img
              src="/images/phoneteam.jpg"
              alt="Hero"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Grid>
        
        <Grid item size={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 3 }}>
           <Box
  sx={{
    fontFamily: 'Garet_light, sans-serif',
    fontSize: '1rem',
    textAlign: 'left',
    mb: 2
  }}
>
  <Typography
    component="div"
    sx={{
      fontFamily: 'Times New Roman, serif',
      fontSize: '3rem',
      fontStyle: 'italic',
      textAlign: 'left',
    }}
  >
    At Alaama Creative Studio
  </Typography>

  <Typography
    component="p"
    sx={{
      mt: 1,
      fontSize: '1rem',
      fontFamily: 'Garet_light, sans-serif',
      textAlign: 'left',
    }}
  >
    Our mission is to empower ambitious brands and startups by creating memorable digital experiences, 
    bold brand identities, and meaningful media strategies that inspire connection, spark engagement, 
    and deliver measurable growth. We strive to turn visionary ideas into impactful realities through 
    creativity, innovation, and purpose-driven storytelling.
  </Typography>
</Box>

          
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img
              src="/images/phoneteam.jpg"
              alt="Hero"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box> */}
        </Grid>
        
        <Grid item size={'grow'}>
          <Box sx={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 3,
            fontSize: '1rem',
            fontFamily: 'Garet_light, sans-serif',
            gap: 2,
          }}>
            {titles.map((item, index) => (
              <Box key={index}>
                <span style={{ fontFamily: 'Times New Roman, serif', fontSize: '1.5rem', fontStyle: 'italic' }}>
                  {item}
                </span>
                <div>
                  {content[index]}
                </div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}