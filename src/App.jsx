// App.jsx
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Link, Stack } from '@mui/material';
import TheNavBar from './components/TheNavBar.jsx'; // import once
import Section1 from './views/Section1.jsx'; // your section components
import Section2 from './views/Section2.jsx';
import Section3 from './views/Section3.jsx';
import ContactUs from './views/ContactUs.jsx'; // Placeholder for Contact Us
import './App.css';


export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const theme = useTheme();


  const sections = useMemo(() => [
    { id: 'section1', label: 'About Us', bgColor:theme.palette.journal_white.main, textColor: '#000', component: <Section1 /> },
    { id: 'section2', label: 'Services', bgColor: theme.palette.yello.default, textColor: '#fff', component: <Section2 /> },
    { id: 'section3', label: 'Our Values', bgColor:'#000', textColor: '#fff', component: <Section3 /> },
    { id: 'contact us', label: 'Contact Us', bgColor: theme.palette.yello.default, textColor: '#000', component: <ContactUs/> }, // Placeholder for Contact Usxx
  ],[theme]);
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const newSection = sections.findIndex(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;
        return scrollPos >= offsetTop && scrollPos < offsetBottom;
      });

      if (newSection !== -1 && newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentSection, sections]);

  return (
    <Box
      sx={{
        backgroundColor: sections[currentSection].bgColor,
        color: sections[currentSection].textColor,
        transition: 'background-color 0.5s ease, color 0.5s ease',
        minHeight: '100vh',
        paddingTop: { xs: '90px'}, // space for navbar
        px: { xs: 1, sm: 0 }, // horizontal padding for mobile
      }}
    >
      {/* Persistent Sidebar */}
      <TheNavBar
        sectionIds={sections.map(s => s.id)}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {/* Content area */}
      <Box>
        {sections.map(({ id, component }) => (
          <Box
            key={id}
            id={id}
            sx={{
              minHeight: '100vh',
              scrollSnapAlign: 'auto',
            }}
          >
            {component}
          </Box>
        ))}
      </Box>
      {/* Footer */}
       <Box
      component="footer"
      sx={{
        width: "100%",
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        fontFamily: "Garet_light, sans-serif",
        fontSize: "1rem",
        py: 3,
        textAlign: "center",
      }}
    >
      {/* Contact Info */}
      <Stack spacing={0.5}>
        <Typography>Email: alaamastudio@gmail.com</Typography>
        <Typography>Phone: +(973) 38963331</Typography>
        {/* <Typography>123 Main Street, City, Country</Typography> */}
      </Stack>

      {/* Links */}
      {/* <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{ mt: 2 }}
      >

      </Stack> */}
    </Box>
      <Box
        component="footer"
        sx={{
          width: '100%',
          color: '#000',
          textAlign: 'center',
          backgroundColor: theme.palette.journal_white.main,
          fontFamily: 'Garet_light, sans-serif',
          fontSize: '0.8rem',
        }}
      >
        © {new Date().getFullYear()} Alaama Creative Studio. All rights reserved.
      </Box>
    </Box>
  );
}
