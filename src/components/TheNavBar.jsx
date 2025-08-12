import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';  
import logo from '../assets/logo.png'; // Adjust path

export default function TheNavBar({ sectionIds, currentSection, setCurrentSection }) {
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setCurrentSection(newValue);
    const el = document.getElementById(sectionIds[newValue]);
    if (el) {
      const navbarHeight = document.querySelector('header, .MuiAppBar-root')?.offsetHeight || 90; // fallback to 90px
      const elTop = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: elTop, behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" elevation={0}>
      <Box
        sx={{
          position: 'fixed',
          backgroundColor: theme.palette.journal_white.main,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 1000,
          minHeight: { xs: 80, sm: 150 },
        }}
      >
        {/* Top row: logo + tabs */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: { xs: 1, sm: 0 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: 120, sm: 350 },
              height: { xs: 40, sm: 150 },
              objectFit: 'contain',
              mb: { xs: 1, sm: 0 },
            }}
          />

          {/* Tabs */}
          <Tabs
            value={currentSection}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: { xs: '36px', sm: '48px' },
              '& .MuiTab-root': {
                color: '#000',
                fontWeight: 'bold',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                minHeight: { xs: '36px', sm: '48px' },
                padding: { xs: '0 4px', sm: '0 8px' },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#ff3131',
                height: 3,
                borderRadius: '2px',
              },
            }}
          >
            <Tab label="About Us" />
            <Tab label="Services" />
            <Tab label="Our Values" />
            <Tab label="Contact Us" />
          </Tabs>
        </Box>
      </Box>
    </AppBar>
  );
}