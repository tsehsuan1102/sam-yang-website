import AnimatedBackground from '@/components/AnimatedBackground';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';

import customTheme from '../utils/theme';
import Footer from './Footer';
import Header from './Header';

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
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
            primary: {
              main: '#90caf9',
            },
          } : {
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
            primary: {
              main: '#3f51b5',
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
          bgcolor: 'background.default', 
          color: 'text.primary', 
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <AnimatedBackground />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box component="main" sx={{ flexGrow: 1, position: 'relative', py: 8, zIndex: 1 }}>
          {children}
        </Box>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
};

export default Layout; 