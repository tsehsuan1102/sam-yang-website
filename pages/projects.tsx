import Layout from '@/src/shared/components/Layout';
import { projectsService } from '@/src/shared/services/projects.service';
import { GitHub, Language, Search } from '@mui/icons-material';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Container, 
  Divider, 
  Grid, 
  InputAdornment,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

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
          <Typography component="h1" gutterBottom textAlign="center" variant="h3">
            My Projects
          </Typography>
          <Typography color="text.secondary" paragraph textAlign="center" variant="subtitle1">
            A collection of projects I've worked on
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          {/* 搜索框 */}
          <Box sx={{ maxWidth: 500, mb: 6, mx: 'auto' }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, description or technology..."
              value={searchQuery}
              variant="outlined"
            />
          </Box>
          
          {/* 项目列表 */}
          {filteredProjects.length > 0 ? (
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item key={project.id} lg={4} md={6} xs={12}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                      alt={project.title}
                      component="img"
                      height="200"
                      image={project.imageUrl || '/project-placeholder.jpg'}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography component="h2" gutterBottom variant="h5">
                        {project.title}
                      </Typography>
                      <Typography color="text.secondary" paragraph variant="body2">
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{ mb: 0.5, mr: 0.5 }}
                          />
                        ))}
                      </Box>
                      
                      <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                        {project.githubUrl && (
                          <Button
                            component="a"
                            href={project.githubUrl}
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<GitHub />}
                            target="_blank"
                          >
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            component="a"
                            href={project.liveUrl}
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<Language />}
                            target="_blank"
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
            <Box sx={{ py: 6, textAlign: 'center' }}>
              <Typography color="text.secondary" variant="h6">
                No projects found matching your search criteria
              </Typography>
              <Button 
                onClick={() => setSearchQuery('')} 
                sx={{ mt: 2 }} 
                variant="text"
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