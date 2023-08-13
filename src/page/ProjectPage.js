import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Grid, Divider, useMediaQuery } from "@mui/material";

import projectData from "../data/projectData.json";
import ImagePopup from '../utils/ImagePopup';
import CodeAnimation from '../components/CodeAnimation';
import { useTheme } from '@mui/material/styles';

const isValidUrl = (url) => {
    try {
        const parsedUrl = new URL(url);
        return (
            parsedUrl.hostname === "www.youtube.com" ||
            parsedUrl.hostname === "youtube.com" ||
            parsedUrl.hostname === "www.vimeo.com" ||
            parsedUrl.hostname === "vimeo.com"
        );
    } catch (e) {
        return false;
    }
};

const isLocalFile = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg'));

const ProjectPage = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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


    const handleImageClick = (mediaUrl, index) => {
        setSelectedImage(mediaUrl);
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
        title, date, status, keywords, mediaUrl, subTitle, description, paragraph, videoUrl, link, imageDescription
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
            {link && (
                <Typography variant="body1">
                    Project Url:
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#00ff41", // Malachite
                            textDecoration: 'underline',
                        }}
                    >
                        {link}
                    </a>
                </Typography>
            )}

            <Divider sx={{ marginY: 2, }} />

            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginBottom: 2 }}>
                {videoUrl && isValidUrl(videoUrl) && (
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
                {videoUrl && isLocalFile(videoUrl) && (
                    <video width="560" height="315" controls>
                        <source src={videoUrl} type="video/mp4" /> {/* Change the type attribute if needed */}
                        Your browser does not support the video tag.
                    </video>
                )}
                <Typography variant="body1" ml={2}>
                    {description}
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2, }} />

            {paragraph.map((paragraph, index) => (

                <Card key={index} sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', marginBottom: 2 }}>
                    {mediaUrl[index] && (
                        <Box sx={{ width: 300 }}>
                            <Box sx={{ height: 300, borderRadius: 2 }}>
                                {mediaUrl[index].includes('youtube.com') ? (
                                    <iframe
                                        width="300"
                                        height="300"
                                        src={mediaUrl[index]}
                                        title={`Video for paragraph ${index}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : mediaUrl[index].endsWith('.mov') ? (
                                    <video
                                        width="300"
                                        height="300"
                                        controls
                                    >
                                        <source src={mediaUrl[index]} type="video/quicktime" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '300px', height: '300px' }}
                                        image={mediaUrl[index]}
                                        alt={`Image for paragraph ${index}`}
                                        onClick={() => handleImageClick(mediaUrl[index])}
                                    />
                                )}
                            </Box>
                            <Typography variant="body2" sx={{ padding: 1 }}>
                                {imageDescription[index]}
                            </Typography>

                        </Box>
                    )}
                    <CardContent>
                        <Typography variant="h6">{subTitle[index]}</Typography>
                        <Typography variant="body1">{paragraph}</Typography>
                    </CardContent>
                </Card>

            ))}


            {/* Grid for leftover images */}
            {mediaUrl.length > paragraph.length && (
                <Grid container spacing={2}>
                    {mediaUrl.slice(paragraph.length).map((mediaUrl, index) => (
                        <Grid item xs={4} key={index}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 300, borderRadius: 2 }}
                                image={mediaUrl}
                                alt={`Additional image ${index}`}
                                onClick={() => handleImageClick(mediaUrl)}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <ImagePopup
                open={openDialog}
                onClose={handleCloseDialog}
                mediaUrl={selectedImage}
                description={selectedImageDescription}
            />
        </Box>
    );
};

export default ProjectPage;
