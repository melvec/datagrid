import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

interface PropertiesProps {
  properties: { [key: string]: string | number };
}

const Properties: React.FC<PropertiesProps> = ({ properties }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Properties
      </Typography>
      <List>
        {Object.entries(properties).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText
              primary={<strong>{key}</strong>}
              secondary={value.toString()}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Properties;
