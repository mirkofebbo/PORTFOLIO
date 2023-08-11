import React from 'react';
import projectData from "../data/projectData.json";
import { Box, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material'; // Import Divider
import { useNavigate } from 'react-router-dom';


const Projects = () => {

  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>
      {projectData.map((project, id) => (
        <div key={id}>
          <Card
            sx={{ display: "flex", marginBottom: 2 }}
            onClick={() => navigate(`/Project/${id}`)}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, height: 200 }}
              image={project.mediaUrl[0]}
              alt={`Image for ${project.title}`}
            />
            <CardContent>
              <Typography variant="h6">{`{${id}: '${project.title}'}`}</Typography>
              <Typography variant="body2">
               {`[${project.keywords.join(', ')}]`}
              </Typography>
              <Typography variant="body2">
                {`${project.description}`}
              </Typography>
            </CardContent>
          </Card>
          {id < projectData.length - 1 && <Divider  sx={{ marginBottom: 2 }} />} 
        </div>
      ))}
    </Box>
  );
};


export default Projects;
