import React from 'react';
import projectData from "../data/projectData.json";
import { Box, Typography, Card, CardContent, CardMedia, Divider, useMediaQuery } from '@mui/material'; // Import Divider
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


const Projects = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>
      {projectData.map((project, id) => (
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Card key={id} sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', marginBottom: 2 }}>
            <CardMedia
              component="img"
              sx={{ height: 300, width: 300, minWidth: 300, maxWidth: 300 }}
              image={project.mediaUrl[0]}
              alt={`Image for ${project.title}`}
              onClick={() => navigate(`/Project/${project.id}`)}
            />
            <CardContent>
              <Typography variant="h6">{`{${id}: '${project.title}'}`}</Typography>
              <Typography variant="body1">
                {`[${project.keywords.join(', ')}]`}
              </Typography>
              <Typography variant="body2">
                {`${project.oneLiner}`}
              </Typography>
            </CardContent>
          </Card>
          {id < projectData.length - 1 && <Divider sx={{ marginBottom: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};


export default Projects;
