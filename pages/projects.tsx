import React, { useState } from 'react';
import Layout from '@/src/shared/components/Layout';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Box, 
  Button, 
  TextField,
  InputAdornment,
  Divider,
  Stack
} from '@mui/material';
import { GitHub, Language, Search } from '@mui/icons-material';
import Link from 'next/link';
import { projectsService } from '@/src/shared/services/projects.service';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const allProjects = projectsService.getAllProjects();
  
  // 根据搜索查询过滤项目
  const filteredProjects = searchQuery 
    ? projectsService.searchProjects(searchQuery)
    : allProjects;
  
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            My Projects
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph textAlign="center">
            A collection of projects I've worked on
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          {/* 搜索框 */}
          <Box sx={{ maxWidth: 500, mx: 'auto', mb: 6 }}>
            <TextField
              fullWidth
              placeholder="Search projects by name, description or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
          
          {/* 项目列表 */}
          {filteredProjects.length > 0 ? (
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item key={project.id} xs={12} md={6} lg={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.imageUrl || '/project-placeholder.jpg'}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5 }}
                          />
                        ))}
                      </Box>
                      
                      <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                        {project.githubUrl && (
                          <Button
                            size="small"
                            startIcon={<GitHub />}
                            component="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="small"
                            startIcon={<Language />}
                            component="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </Button>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h6" color="text.secondary">
                No projects found matching your search criteria
              </Typography>
              <Button 
                variant="text" 
                onClick={() => setSearchQuery('')} 
                sx={{ mt: 2 }}
              >
                Clear Search
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  );
} 