import { Box} from '@mui/material';
import theme from '../theme';

export default function Section2() {

  return (
    <Box
      component="section"
     justifyContent="center"
     alignItems="stretch"
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        minHeight: '100vh',
        height:'fit-content',
        overflow: 'auto', // Prevent overflow
        width: '100%',
        backgroundImage: 'url("/images/background.png")', // Place your image in public/images/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'lighten', // Optional: blend image with color
        padding:{ xs: 6, sm: 10 }, // padding for mobile and desktop
      }}
    >
     
        <Box
          sx={{
            background: theme.palette.journal_white.main,
            opacity: 0.7,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '90%',
            color: '#000',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile
            padding: { xs: 1, sm: 3 },
            gap: { xs: 2, sm: 0 },
            boxSizing: 'border-box',
            height:'fit-content',
            overflow: 'auto', // Prevent overflow
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              minHeight: { xs: '150px', sm: 'auto' },
            }}
          >
            {/* Top Text */}
            <Box sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' }, 
                       alignSelf: 'flex-end',
                       fontFamily: 'Garet, sans-serif', }}>
              PROJECT
              <span style={{ fontFamily: 'Corinthia, serif', fontSize: '5rem', color: theme.palette.primary.main }}>
                S
              </span>
            </Box>
            {/* Bottom Text */}
            <Box sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' }, fontFamily: 'Garet, sans-serif'}}>
              <span style={{ fontFamily: 'Corinthia, serif', fontSize: '5rem', color: theme.palette.primary.main }}>
                We 
              </span>
               HANDLE
            </Box>
          </Box>
          {/* Right Section */}
          <Box
            sx={{
              flex: 3,
              display: 'flex',
              flexDirection: 'column', // Stack vertically
              alignItems: { xs: 'center', sm: 'flex-start' },
              justifyContent: 'center',
              padding: { xs: 1, sm: 3 },
              fontSize: { xs: '1rem', sm: '1rem' },
              minHeight: { xs: '120px', sm: 'auto' },
              textAlign: { xs: 'center', sm: 'left' },
              fontFamily: 'Garet_light, sans-serif',
              gap: 2, // space between items
            }}
          >
            <Box>
              <span style={{ fontFamily: 'Times New Roman, serif', fontSize: '2rem', fontStyle: 'italic' }}>
                Web & Mobile Application Development
              </span>
              <div>
                We turn ideas into intuitive, high-performance digital products. Whether it's a stunning website or a powerful mobile app, our team designs seamless experiences that are built to scale and tailored to engage.
              </div>
            </Box>
            <Box>
              <span style={{ fontFamily: 'Times New Roman, serif', fontSize: '2rem', fontStyle: 'italic' }}>
                Branding & Identity Design
              </span>
              <div>
                Your brand is more than visuals — it's your voice, your values, your presence. We craft complete brand identities that spark connection, build trust, and stand out in a crowded world. From strategy to design, we tell your story with impact.
              </div>
            </Box>
            <Box>
              <span style={{ fontFamily: 'Times New Roman, serif', fontSize: '2rem', fontStyle: 'italic' }}>
                Media Management
              </span>
              <div>
                We don’t just manage content — we create moments that matter. From social media to digital campaigns, we grow your audience with consistent, creative, and data-driven storytelling that drives engagement and builds loyalty.
              </div>
            </Box>
      </Box>
      </Box>
    </Box>
  );
}
