import { Box, Typography } from "@mui/material";
import { baseURL } from "../redux/api";

interface ImageProps {
  image: string[];
}

const Image: React.FC<ImageProps> = ({ image }: ImageProps) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
        Image
      </Typography>
      <img src={`${baseURL}/image/${image}`} alt={image.toString()} />
    </Box>
  );
};

export default Image;
