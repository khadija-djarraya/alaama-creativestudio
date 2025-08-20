import { Box, Typography, useTheme } from "@mui/material";
import { Palette, DesktopWindows, Campaign, Share } from "@mui/icons-material";

export default function Section3() {
  const theme = useTheme();
  const services = [
    {
      icon: <Palette fontSize="large" sx={{ color: theme.palette.primary.main}} />,
      title: "Brand Identity",
      description:
        "Elevate your brand with a unique identity that resonates with your audience.",
    },
    {
      icon: <DesktopWindows fontSize="large" sx={{ color: theme.palette.primary.main}} />,
      title: "Web Design",
      description:
        "Crafting visually stunning websites that captivate your audience and drive conversions effectively.",
    },
    {
      icon: <Campaign fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: "Media Strategy",
      description:
        "Develop a Media Strategy that amplifies your message and reaches your target audience.",
    },
    {
      icon: <Share fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: "Social Media",
      description:
        "Develop a Social Media Strategy that connects with your audience efficiently and effectively.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        // backgroundImage: 'url("/images/background.png")',
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundBlendMode: "lighten",
        p: { xs: 6, sm: 10 },
      }}
    >
      <Box
        sx={{
          // backgroundColor: alpha(theme.palette.journal_white.main, 0.8), // semi-transparent bg
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          width: "90%",
          height: "min-content",
          // color: "#000",
          padding: "inherit",
          // borderRadius: 2,
          // boxShadow: 3,
          // gap: 3,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.5rem" },
              fontFamily: "Garet, sans-serif",
              alignSelf: "flex-end",
              paddingBottom: 4,
            }}
          >
            PROJECTS WE HANDLE
          </Typography>
        </Box>

        {/* Services */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mt: 2,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  borderRadius: "50%",
                  backgroundColor: '#000',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontFamily: "GARET, serif" }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Garet_light, serif",
                  // color: "#fff",
                  px: 2,
                  textAlign: "justify",
                  fontWeight: "bold",
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
