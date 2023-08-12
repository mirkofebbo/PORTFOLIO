import React from "react";
import { Typography, Card, CardContent, CardMedia, Box, Divider, useMediaQuery } from "@mui/material";
import projectData from "../data/projectData.json"; // Make sure to import the correct path to your JSON file
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  // Function to get 3 random projects
  const getRandomProjects = (projects, count = 3) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProjects = getRandomProjects(projectData);

  return (
    <div>
      <Typography variant="h4">Highlights</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body2">
        I am a human, artist and researcher, exploring...
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {randomProjects.map((project, id) => (
          <Card
            key={id}
            sx={{
              width: isMobile ? '100%' : '30%',
              margin: isMobile ? '10px 0' : '10px',
            }}
            onClick={() => navigate(`/Project/${project.id}`)}
          >
            <CardMedia
              component="img"
              sx={{
                height: isMobile ? 200 : 300,
                width: '100%',
                objectFit: 'cover',
              }}
              image={project.mediaUrl[0]}
              alt={`Image for ${project.title}`}
            />
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body1">
                [{project.keywords.join(', ')}]
              </Typography>
              <Typography variant="body2">{`${project.oneLiner}`}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Home;
