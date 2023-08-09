import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

import projectData from "../data/projectData.json";
import ImagePopup from '../utils/ImagePopup';
import CodeAnimation from '../components/CodeAnimation';


const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectData.find((project) => project.id === parseInt(projectId));
    const [codeData, setCodeData] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageDescription, setSelectedImageDescription] = useState(null);

    useEffect(() => {
        fetch('/codeData.txt')
            .then((response) => response.text())
            .then((text) => setCodeData(text));
    }, []);


    const handleImageClick = (imageUrl, index) => {
        setSelectedImage(imageUrl);
        setSelectedImageDescription(imageDescription[index]);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    if (!project) {
        return <Typography variant="h5">Project not found.</Typography>;
    }

    const {
        title, date, status, keywords, imageUrl, subTitle, description, paragraph, videoUrl, link, imageDescription
    } = project;

    return (
        <Box>
            {codeData && <CodeAnimation code={codeData} />}
            <Typography variant="h4" mb={2}>
                {title}
            </Typography>
            <Typography variant="subtitle1" mb={2}>
                Date: {date}
            </Typography>
            <Typography variant="subtitle1" mb={2}>
                Status: {status}
            </Typography>
            <Typography variant="subtitle1" mb={2}>
                Keywords: {keywords.join(', ')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>
                {videoUrl && (
                    <iframe
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                <Typography variant="body1" ml={2}>
                    {description}
                </Typography>
            </Box>
            {paragraph.map((paragraph, index) => (
                <Card key={index} sx={{ display: "flex", marginBottom: 2 }}>
                    {imageUrl[index] && (
                        <CardMedia
                            component="img"
                            sx={{ width: 300, height: 300, borderRadius: 2 }}
                            image={imageUrl[index]}
                            alt={`Image for paragraph ${index}`}
                            onClick={() => handleImageClick(imageUrl[index],index)}
                        />
                    )}
                    <CardContent>
                        <Typography variant="h6">{subTitle[index]}</Typography>
                        <Typography variant="body1">{paragraph}</Typography>
                    </CardContent>
                </Card>
            ))}

            {link && (
                <Typography variant="body1">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Visit the project
                    </a>
                </Typography>
            )}
            {/* Grid for leftover images */}
            {imageUrl.length > paragraph.length && (
                <Grid container spacing={2}>
                    {imageUrl.slice(paragraph.length).map((imageUrl, index) => (
                        <Grid item xs={4} key={index}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 300, borderRadius: 2 }}
                                image={imageUrl}
                                alt={`Additional image ${index}`}
                                onClick={() => handleImageClick(imageUrl)}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <ImagePopup
                open={openDialog}
                onClose={handleCloseDialog}
                imageUrl={selectedImage}
                description={selectedImageDescription}
            />
        </Box>
    );
};

export default ProjectPage;
