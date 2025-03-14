// 项目服务，处理项目列表数据

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Mock 项目数据，需要用户替换为自己的项目
const projectsData: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    featured: true,
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A task management application with features like task creation, assignment, due dates, and status tracking.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    imageUrl: "/projects/taskmanager.jpg",
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://taskmanager-demo.com",
    featured: true,
  },
  {
    id: "project3",
    title: "Weather Forecast App",
    description:
      "A weather forecast application that fetches data from weather APIs and displays forecasts for different locations.",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    imageUrl: "/projects/weather.jpg",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false,
  },
  {
    id: "project4",
    title: "Blog Platform",
    description:
      "A blog platform with features like post creation, commenting, user profiles, and search functionality.",
    technologies: ["Next.js", "GraphQL", "Apollo", "MongoDB"],
    imageUrl: "/projects/blog.jpg",
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-demo.com",
    featured: false,
  },
];

// 项目服务类
export class ProjectsService {
  private projects: Project[];

  constructor() {
    this.projects = projectsData;
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  searchProjects(query: string): Project[] {
    const lowercaseQuery = query.toLowerCase();
    return this.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(lowercaseQuery)
        )
    );
  }
}

// 导出服务的单例实例
export const projectsService = new ProjectsService();
