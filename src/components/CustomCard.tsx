import React from "react";
import { Box } from "spectacle";

export const CustomCard = ({children, ...props }) => (
  <Box
    backgroundColor="quaternary"
    padding="50px"
    borderRadius="32px"
    style={{
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(0, 0, 0, 0.04)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    {...props}
  >
    {children}
  </Box>
);