import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

interface ImageProps {
  paths: string[];
}

const Image: React.FC<ImageProps> = ({ paths }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Image Paths
      </Typography>
      <List>
        {paths.map((path, index) => (
          <ListItem key={index}>
            <ListItemText primary={path} sx={{ overflowWrap: "break-word" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Image;
