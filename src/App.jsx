// App.jsx - Fixed version with proper section detection and background transitions
import { useState, useEffect, useMemo, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
import TheNavBar from './components/TheNavBar.jsx';
import Section1 from './views/Section1.jsx';
import Section2 from'./views/Section2.jsx';
import Section3 from './views/Section3.jsx';
import ContactUs from './views/ContactUs.jsx';
import './App.css';
import './assets/styles/base.css';
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const isLocomotiveReady = useRef(false);
  const isManualNavigation = useRef(false);
  const manualNavigationTimer = useRef(null);

  // Handle manual navigation flag
  const handleManualNavigation = (isManual) => {
    isManualNavigation.current = isManual;
    
    // Clear any existing timer
    if (manualNavigationTimer.current) {
      clearTimeout(manualNavigationTimer.current);
    }
    
    // If starting manual navigation, disable auto-detection
    // If ending manual navigation, add a small buffer before re-enabling
    if (!isManual) {
      manualNavigationTimer.current = setTimeout(() => {
        isManualNavigation.current = false;
      }, 200); // Small buffer to ensure scroll has settled
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (manualNavigationTimer.current) {
        clearTimeout(manualNavigationTimer.current);
      }
    };
  }, []);

  const sections = useMemo(() => [
    { id: 'section1', label: 'About Us', bgColor: '#8C001A', textColor: '#fff', component: <Section1 /> },
    { id: 'section2', label: 'Our Values', bgColor: '#493ca7ff', textColor: '#fff', component: <Section2 /> },
    { id: 'section3', label: 'Services', bgColor: '#FFD23F', textColor: '#000', component: <Section3 /> },
    { id: 'contact-us', label: 'Contact Us', bgColor: theme.palette.yello?.default || '#8C001A', textColor: '#fff', component: <ContactUs /> },
  ], [theme]);

  // Initialize Locomotive Scroll - ONLY ONCE
  useEffect(() => {
    const initLocomotive = () => {
      const scrollEl = scrollContainerRef.current;
      if (!scrollEl) return;

      // Destroy existing instance if any
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }

      try {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          smoothMobile: true,
          lerp: 0.08,
          multiplier: 1,
          class: 'is-revealed',
          scrollbarClass: 'c-scrollbar',
          scrollingClass: 'has-scroll-scrolling',
          draggingClass: 'has-scroll-dragging',
          smoothClass: 'has-scroll-smooth',
          initClass: 'has-scroll-init',
        });

        // Wait for locomotive to be ready
        locomotiveScrollRef.current.on('ready', () => {
          console.log("Locomotive Scroll is ready");
          isLocomotiveReady.current = true;
          
          // Update scroll measurements
          setTimeout(() => {
            locomotiveScrollRef.current.update();
          }, 100);
        });

        // Listen for scroll events to detect current section
        locomotiveScrollRef.current.on('scroll', (instance) => {
          // Skip automatic detection if we're in the middle of manual navigation
          if (isManualNavigation.current) {
            return;
          }

          const scroll = instance.scroll.y;
          const windowHeight = window.innerHeight;
          const navbarHeight = 150;
          
          // Simple rule: if we're at or near the top, select "About Us"
          if (scroll <= 200) { // Within 200px of the top
            if (currentSection !== 0) {
              setCurrentSection(0);
            }
            return;
          }
          
          // Get all section elements
          const sectionElements = sections.map(section => 
            document.getElementById(section.id)
          ).filter(Boolean);

          let newActiveSection = currentSection;
          
          // For other sections, use normal detection
          for (let i = 0; i < sectionElements.length; i++) {
            const element = sectionElements[i];
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scroll;
            const elementBottom = elementTop + rect.height;
            
            // Simple trigger point - 30% down the viewport
            const triggerPoint = scroll + navbarHeight + (windowHeight * 0.3);
            
            // Check if section should be active
            if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
              newActiveSection = i;
            }
          }
          
          // Only update if the section has actually changed
          if (newActiveSection !== currentSection) {
            setCurrentSection(newActiveSection);
          }
        });

        // Listen for 'call' events from data-scroll-call attributes
        locomotiveScrollRef.current.on('call', (value, way, obj) => {
          if (value === 'updateSection' && !isManualNavigation.current) {
            const sectionIndex = parseInt(obj.el.getAttribute('data-section-index'));
            if (!isNaN(sectionIndex) && sectionIndex !== currentSection) {
              setCurrentSection(sectionIndex);
            }
          }
        });

        console.log("Locomotive Scroll initialized successfully");

      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initLocomotive, 100);

    return () => {
      clearTimeout(timer);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
      isLocomotiveReady.current = false;
    };
  }, []); // Remove dependencies to prevent re-initialization

  // Update locomotive when window resizes or content changes
  useEffect(() => {
    if (locomotiveScrollRef.current && isLocomotiveReady.current) {
      const updateScroll = () => {
        locomotiveScrollRef.current.update();
      };
      
      // Update after components mount/update
      const timer = setTimeout(updateScroll, 200);
      
      return () => clearTimeout(timer);
    }
  }, [sections.length]); // Only depend on sections count, not content

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current && isLocomotiveReady.current) {
        setTimeout(() => {
          locomotiveScrollRef.current.update();
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      ref={scrollContainerRef}
      data-scroll-container
      sx={{
        backgroundColor: sections[currentSection]?.bgColor || '#8C001A',
        color: sections[currentSection]?.textColor || '#fff',
        transition: 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1), color 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh',
        paddingTop: { xs: '90px', sm: '150px' },
        px: { xs: 1, sm: 0 },
      }}
    >
      {/* Navbar */}
      <TheNavBar
        sectionIds={sections.map(s => s.id)}
        currentSection={currentSection}
        locomotiveScrollInstance={locomotiveScrollRef.current}
        onSectionChange={setCurrentSection} // pass setter so NavBar can update immediately
        onManualNavigation={handleManualNavigation} // handle manual navigation
      />

      {/* Content area */}
      {sections.map(({ id, component }, index) => (
        <Box
          key={id}
          id={id}
          data-scroll-section
          data-scroll-call="updateSection"
          data-section-index={index}
          sx={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // Add padding to ensure sections don't overlap with navbar
            pt: index === 0 ? 0 : 2,
          }}
        >
          {component}
        </Box>
      ))}

      {/* Footer */}
      <Box
        component="footer"
        data-scroll-section
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
        <Stack spacing={0.5}>
          <Typography>Email: alaamastudio@gmail.com</Typography>
          <Typography>Phone: +(973) 38963331</Typography>
        </Stack>
      </Box>

      <Box
        component="footer"
        sx={{
          width: '100%',
          color: '#000',
          textAlign: 'center',
          backgroundColor: theme.palette.journal_white?.main || '#fff',
          fontFamily: 'Garet_light, sans-serif',
          fontSize: '0.8rem',
          py: 1,
        }}
      >
        © {new Date().getFullYear()} Alaama Creative Studio. All rights reserved.
      </Box>
    </Box>
  );
}