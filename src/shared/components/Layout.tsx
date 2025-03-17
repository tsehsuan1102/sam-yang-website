import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import customTheme from '../utils/theme';
import AnimatedBackground from '@/components/AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // 状态用于跟踪深色/浅色模式
  const [darkMode, setDarkMode] = useState(true);

  // 根据当前的 darkMode 状态生成主题
  const theme = React.useMemo(
    () =>
      createTheme({
        ...customTheme,
        palette: {
          mode: darkMode ? 'dark' : 'light',
          ...(darkMode ? {
            primary: {
              main: '#90caf9',
            },
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          } : {
            primary: {
              main: '#3f51b5',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
          }),
        },
      }),
    [darkMode],
  );

  // 切换深色/浅色模式
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  // 在组件挂载时从 localStorage 加载主题偏好
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // 检查系统偏好
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          position: 'relative',
        }}
      >
        <AnimatedBackground />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box component="main" sx={{ flexGrow: 1, py: 8, position: 'relative', zIndex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout; 