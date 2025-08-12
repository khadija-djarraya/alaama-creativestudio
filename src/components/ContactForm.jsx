import React, { useState } from 'react';
import { TextField, Button, Box, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import dotenv from "dotenv";
dotenv.config();

const ContactForm = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; // Replace with your EmailJS service ID
  const TEMPLATE_ID =import.meta.env.VITE_TEMPLATE_ID; // Replace with your EmailJS template ID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY; // Replace with your EmailJS public key
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,     // Replace with your EmailJS service ID
        TEMPLATE_ID,    // Replace with your EmailJS template ID
        formData,
        PUBLIC_KEY      // Replace with your EmailJS public key
      );
      
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: `Failed to send message.${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
      }}
    >
      <TextField
        name="name"
        label="Your Name"
        variant="filled"
        value={formData.name}
        onChange={handleChange}
        size="small"
        sx={{ borderRadius: 3 }}
        required
      />
      
      <TextField
        name="email"
        label="Email Address"
        type="email"
        variant="filled"
        value={formData.email}
        onChange={handleChange}
        size="small"
        sx={{ borderRadius: 3 }}
        required
      />
      
      <TextField
        name="phone"
        label="Phone (optional)"
        variant="filled"
        value={formData.phone}
        onChange={handleChange}
        size="small"
        sx={{ borderRadius: 3 }}
      />
      
      <TextField
        name="message"
        label="Your Message"
        multiline
        rows={4}
        variant="filled"
        value={formData.message}
        onChange={handleChange}
        sx={{ borderRadius: 3,
         }}
        required
      />
      
      <Button
        type="submit"
        variant="contained"
        endIcon={isSubmitting ? <CircularProgress size={24} /> : <SendIcon />}
        disabled={isSubmitting}
        sx={{
          borderRadius: 3,
          py: 1,
          mt: 1,
                  fontFamily: '"Garet", sans-serif',
          fontSize: '1rem',
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitStatus && (
        <Alert severity={submitStatus.success ? 'success' : 'error'} sx={{ mt: 2,         fontFamily: '"Garet_light", sans-serif',
 }}>
          {submitStatus.message}
        </Alert>
      )}
    </Box>
  );
};

export default ContactForm;