import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl } = project;

  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, objectFit: "cover" }}
        image={imageUrl}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h2" component="div">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
