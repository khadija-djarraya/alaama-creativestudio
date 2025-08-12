// HeroSection.jsx
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Section1() {
  const theme = useTheme();
  
  // Styles organized as constants at the top
  const sectionStyles = {
    root: {
      display: 'flex',
      width: '100%',
      padding: { xs: 5, sm: 8 },
      flexDirection: 'column',
      boxSizing: 'border-box',
      height:'fit-content',
      overflow: 'auto', // Prevent overflow
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      padding: { xs: 5, sm: 8 },
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    image: {
      width: '500px',
      height: 'auto',
      marginBottom: '10px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    textContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      mt: 2,
    },
    textWrapper: {
      maxWidth: '50%',
      minWidth: '40%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
    },
    redDot: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: 'red',
      display: 'inline-block',
      ml: 1,
      verticalAlign: 'middle',
    }
  };

  const typographyStyles = {
    welcome: {
      fontFamily: 'Garet, sans-serif', 
      fontSize: {sm:'7rem', xs: '4rem'},
      color: theme.palette.primary.main, 
      textAlign: 'center',
      lineHeight: 1.2
    },
    aboard: {
      fontFamily: 'Times New Roman, serif', 
      fontSize: {sm:'7rem', xs: '4rem'},
      display: 'inline-block',
      ml: 1
    },
    subtitle: {
      fontFamily: 'Times New Roman, serif', 
      fontSize: '3rem', 
      textAlign: 'center', 
      fontStyle: 'italic',
      mt: 2
    },
    bodyText: {
      fontFamily: 'Garet_light, sans-serif',
      fontSize: '1rem',
      textAlign: 'justify',
      lineHeight: 1.6,
      wordBreak: 'break-word',
    }
  };

  return (
    <Box component="section" sx={sectionStyles.root}>
      <Box sx={sectionStyles.container}>
        <Box sx={sectionStyles.imageWrapper}>
          <img
            src="/images/groundtext.jpg"
            alt="Hero"
            style={sectionStyles.image}
          />
        </Box>
        <Box>
          <Typography sx={typographyStyles.welcome}>
            Welcome
            <span style={typographyStyles.aboard}>
              Aboard
            </span>
          </Typography>
          <Typography sx={typographyStyles.subtitle}>
            Let's Evolve Ideas Into Impact
          </Typography>
          <Box sx={sectionStyles.textContainer}>
            <Box sx={sectionStyles.textWrapper}>
              <Typography sx={typographyStyles.bodyText}>
                We craft bold brands, build smart apps, and run inspiring workshops for the makers, the dreamers, and the future leaders. From design to code — and everything in between — we don't just create. We leave a mark.
                <Box component="span" sx={sectionStyles.redDot} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}