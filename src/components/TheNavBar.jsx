import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo.png'; // Adjust path

export default function TheNavBar({
  sectionIds,
  currentSection,
  locomotiveScrollInstance,
  onSectionChange, // added callback prop
  onManualNavigation, // new callback to signal manual navigation
}) {
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    // Signal that we're doing manual navigation
    onManualNavigation?.(true);
    
    // update parent immediately so active tab reflects click
    onSectionChange?.(newValue);

    const targetId = sectionIds[newValue];
    if (!targetId) return;

    const navbarEl = document.querySelector('.MuiAppBar-root');
    const navbarHeight = navbarEl?.offsetHeight || 150;

    if (locomotiveScrollInstance?.scrollTo) {
      // ensure measurements are fresh before scrolling
      locomotiveScrollInstance.update?.();

      // Different offset for different sections
      let offset = -navbarHeight;
      if (newValue === 1) { // Section2 (Our Values) - adjust offset
        offset = -navbarHeight - 50; // Extra offset for Section2
      }

      // perform programmatic scroll
      locomotiveScrollInstance.scrollTo(`#${targetId}`, {
        offset: offset,
        duration: 800, // Slightly longer duration for smoother transition
        easing: [0.25, 0.0, 0.35, 1],
      });

      // Update locomotive scroll and re-enable automatic detection after animation completes
      setTimeout(() => {
        locomotiveScrollInstance.update?.();
        
        // Force section detection after scroll completes
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const scroll = locomotiveScrollInstance.scroll.y;
          const elementTop = rect.top + scroll;
          
          // Verify the section is properly positioned
          const triggerPoint = scroll + navbarHeight + (window.innerHeight * 0.1);
          
          // If we're not properly detecting the section, force an update
          if (Math.abs(triggerPoint - elementTop) < 200) {
            onSectionChange?.(newValue);
          }
        }
        
        // Re-enable automatic detection after manual navigation is complete
        onManualNavigation?.(false);
      }, 900); // Slightly longer than animation duration

      return;
    }

    // Fallback: smooth window scroll accounting for navbar height
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const rectTop = targetEl.getBoundingClientRect().top + window.scrollY;
      let offsetTop = Math.max(0, rectTop - navbarHeight);
      
      // Adjust offset for Section2
      if (newValue === 1) {
        offsetTop -= 50;
      }
      
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });

      // also schedule a DOM update after the smooth scroll completes
      setTimeout(() => {
        locomotiveScrollInstance?.update?.();
        onSectionChange?.(newValue); // Ensure section is updated
        onManualNavigation?.(false); // Re-enable automatic detection
      }, 800);
    }
  };
  

  const getSectionLabel = (index) => {
    // Match section order and names
    const labels = ["About Us", "Our Values", "Services", "Contact Us"];
    return labels[index] || `Section ${index + 1}`;
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        zIndex: 1300,
        backgroundColor: theme.palette.journal_white?.main || '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.journal_white?.main || '#fff',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: { xs: 80, sm: 150 },
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        {/* Top row: logo + tabs */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: { xs: 1, sm: 2 },
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 2 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Alaama Studio Logo"
            sx={{
              width: { xs: 120, sm: 300 },
              height: { xs: 40, sm: 120 },
              objectFit: 'contain',
              mb: { xs: 0, sm: 0 },
              flexShrink: 0,
            }}
          />

          {/* Tabs */}
          <Tabs
            value={currentSection}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              minHeight: { xs: '36px', sm: '48px' },
              flexGrow: 1,
              '& .MuiTab-root': {
                color: '#000',
                fontWeight: 'bold',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                minHeight: { xs: '36px', sm: '48px' },
                padding: { xs: '6px 12px', sm: '12px 24px' },
                transition: 'all 0.3s ease',
                textTransform: 'none',
                minWidth: { xs: 'auto', sm: '120px' },
                '&.Mui-selected': {
                  color: '#ff3131',
                  fontWeight: 'bold',
                },
                '&:hover': {
                  color: '#ff3131',
                  opacity: 0.8,
                  backgroundColor: 'rgba(255, 49, 49, 0.05)',
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#ff3131',
                height: 3,
                borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '& .MuiTabs-scrollButtons': {
                color: '#000',
                '&.Mui-disabled': {
                  opacity: 0.3,
                },
              },
            }}
          >
            {sectionIds.map((id, index) => (
              <Tab
                key={id}
                value={index} // ensure tab value corresponds to section index
                label={getSectionLabel(index)}
                sx={{
                  fontFamily: 'Garet_light, sans-serif',
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </AppBar>
  );
}