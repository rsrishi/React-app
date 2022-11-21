import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/Report',
    icon: <AssessmentIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Leave',
    path: '/leave',
    icon: <TimerOffIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Status',
    path: '/status',
    icon: <CalendarMonthIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Login',
    icon: <LogoutIcon/>,
    cName: 'nav-text'
  },
];