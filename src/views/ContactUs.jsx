import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, useTheme, Button } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  const theme = useTheme();

  return (
    <Box
  component="section"
  sx={{
    display: 'flex',
    justifyContent: 'center',
    padding: { xs: 3, md: 6 },
    minHeight: '100vh',
    alignItems: 'center',
  }}
>
  <Box
    sx={{
      width: '100%',
      maxWidth: '800px', // reduced for centered look
      display: 'flex',
      flexDirection: 'column', // always column
      gap: 4,
      alignItems: 'center', // center horizontally
      textAlign: 'center', // center text
    }}
  >
    {/* Title + Form */}
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Garet_light", sans-serif',
          fontSize: { xs: '2.8rem', sm: '3.5rem' },
          fontWeight: 600,
          lineHeight: 1,
          mb: 1,
        }}
      >
        <span
          style={{
            fontFamily: '"Corinthia", cursive',
            color: theme.palette.primary.main,
          }}
        >
          C
        </span>
        ontact
        <span
          style={{
            fontFamily: '"Corinthia", cursive',
            color: theme.palette.primary.main,
          }}
        >
          U
        </span>
        s
      </Typography>

      <ContactForm />
    </Box>

    {/* Social Links */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      <Button
        href="https://linkedin.com/yourcompany"
        target="_blank"
        sx={{
          width: '50px',
          height: '50px',
          textDecoration: 'none',
          color: '#0077B5',
          '&:hover': {
            backgroundColor: 'rgba(0, 119, 181, 0.2)',
            border: '1px solid #0077B5',
          },
        }}
      >
        <LinkedInIcon fontSize="medium" />
      </Button>

      <Button
        href="https://instagram.com/alaama.bh"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: '50px',
          height: '50px',
          color: '#E1306C',
          '&:hover': {
            backgroundColor: 'rgba(225, 48, 108, 0.2)',
            border: '1px solid #E1306C',
          },
        }}
      >
        <InstagramIcon fontSize="medium" />
      </Button>

      <Button
        href="https://wa.me/97338963331"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: '50px',
          height: '50px',
          color: '#119441ff',
          '&:hover': {
            border: '1px solid #119441ff',
            backgroundColor: 'rgba(7, 196, 77, 0.2)',
          },
        }}
      >
        <WhatsAppIcon fontSize="medium" />
      </Button>
    </Box>
  </Box>
</Box>

  );
}