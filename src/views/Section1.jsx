// Section1.jsx - Fixed version that allows proper scrolling
import { Box, Typography } from '@mui/material';

export default function Section1() {
  const sectionStyles = {
    root: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      boxSizing: 'border-box',
      // minHeight: '100vh', // Changed from 90vh to 100vh
      backgroundImage: 'url(/images/coccinelle.png)',
      backgroundSize: 'cover', // Changed from 'fill' to 'cover'
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative', // Ensure proper positioning
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    textContainer: {
      display: 'flex',
      justifyContent: 'flex-end', // Changed from 'right' to 'flex-end'
      width: '100%',
      mt: 2,
    },
    textWrapper: {
      maxWidth: '50%',
      minWidth: '40%',
      display: 'flex',
      alignItems: 'flex-end', // Changed from 'right' to 'flex-end'
      justifyContent: 'flex-end', // Changed from 'right' to 'flex-end'
      textAlign: 'right',
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
      fontSize: { sm: '7rem', xs: '4rem' },
      color: '#fff',
      textAlign: 'center',
      lineHeight: 1.2,
    },
    aboard: {
      fontFamily: 'Times New Roman, serif',
      fontSize: { sm: '7rem', xs: '4rem' },
      display: 'inline-block',
      ml: 1,
      color: '#fff',
    },
    subtitle: {
      fontFamily: 'Times New Roman, serif',
      fontSize: { xs: '2rem', sm: '3rem' }, // Added responsive sizing
      textAlign: 'right',
      fontStyle: 'italic',
      color: '#fff',
      mt: 2,
    },
    bodyText: {
      fontFamily: 'Garet_light, sans-serif',
      fontSize: '1rem',
      textAlign: 'right',
      lineHeight: 1.6,
      wordBreak: 'break-word',
      color: '#fff',
    }
  };

  return (
    <Box
      component="section"
      id="section1"
      data-scroll-section
      sx={sectionStyles.root}
    >
      {/* Hero that should animate when entering */}
      <Box
        className="hero"
        data-scroll          // enable locomotive for this element
        data-scroll-repeat   // allow it to animate again when re-entering
        data-scroll-speed="1"
        sx={{ /* ...styles... */ }}
      >
        <Box sx={sectionStyles.container}>
          <Box 
            sx={{ 
              position: 'relative', 
              width: '100%',
              height: '100%',
              padding: { xs: 3, sm: 8, md: 15 }, // Made responsive
            }}
          >
            {/* Title (animates in) */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              minHeight: '40vh', // Give the title some breathing room
            }}>
              <Typography
                sx={typographyStyles.welcome}
                data-scroll
                data-scroll-class="fade-in-up"
                data-scroll-repeat="false"
              >
                Welcome
                <span style={typographyStyles.aboard}> Aboard</span>
              </Typography>
            </Box>

            {/* Subtitle + body text */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                zIndex: 20,
                minHeight: '50vh', // Ensure enough space for content
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Sticky content - but with better positioning */}
              <Box
                data-scroll
                data-scroll-sticky
                data-scroll-target="#section1"
                sx={{
                  // Remove fixed positioning that might interfere
                  zIndex: 20,
                }}
              >
                <Typography sx={typographyStyles.subtitle}>
                  Let's Evolve Ideas Into Impact
                </Typography>
                
                <Box sx={sectionStyles.textContainer}>
                  <Box sx={sectionStyles.textWrapper}>
                    <Typography sx={typographyStyles.bodyText}>
                      We craft bold brands, build smart apps, and run inspiring
                      workshops for the makers, the dreamers, and the future leaders.
                      From design to code — and everything in between — we don't just
                      create. We leave a mark.
                      <Box component="span" sx={sectionStyles.redDot} />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Example smaller reveal */}
      <Box
        data-scroll
        data-scroll-repeat
        data-scroll-delay="0.2"
        sx={{ /* ... */ }}
      >
        {/* ...existing content... */}
      </Box>
    </Box>
  );
}