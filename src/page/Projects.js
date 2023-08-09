import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from "../data/projectData.json";
import { Link, Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Projects = () => {

  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>
      {projectData.map((project, id) => (
        <Card 
          key={id} 
          sx={{ display: "flex", marginBottom: 2 }}
          onClick={() => navigate(`/Project/${id}`)}
        >
          <CardMedia
            component="img"
            sx={{ width: 150, height: 150 }}
            image={project.imageUrl[0]} 
            alt={`Image for ${project.title}`}
          />
          <CardContent>
            <Typography variant="h6">{`{${id}: '${project.title}'}`}</Typography>
            <Typography variant="body2">
              Keywords: {`[${project.keywords.join(', ')}]`} 
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};


export default Projects;
