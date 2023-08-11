import React from "react";
import { Typography, Card, CardContent, CardMedia, Box, Divider } from "@mui/material";
import projectData from "../data/projectData.json"; // Make sure to import the correct path to your JSON file
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // Function to get 3 random projects
  const getRandomProjects = (projects, count = 3) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProjects = getRandomProjects(projectData);

  return (
    <div>
      <Typography variant="h4">
        吃炒饭
      </Typography>
      <Divider sx={{ marginY: 2, }} />
      <Typography variant="body2">
        I am a human, artist and researcher,  exploring the intersection of art, technology, and geopolitics. With a background in sculpture from Concordia University in Montreal, in addition to holding a data science certificate from HarvardX, and a masters in computational arts from Goldsmiths University. I am particularly interested in the ways in which data visualisation and kinetic art can be used to convey complex information in a more engaging and interactive way. I frequently incorporate digital media and fabrication techniques, into my artistic practice.
      </Typography>
      <Divider sx={{ marginY: 2, }} />
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginTop: 3 }}>
        {randomProjects.map((project, id) => (
          <Card key={id} sx={{ width: "30%", margin: 1 }} onClick={() => navigate(`/Project/${project.id}`)}
          >
            <CardMedia
              component="img"
              sx={{ height: 150 }}
              image={project.mediaUrl[0]}
              alt={`Image for ${project.title}`}
            />
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2">
                Keywords: {project.keywords.join(', ')}
              </Typography>
              <Typography variant="body2">
                {`${project.description}`}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Home;
