import allTodoIcon from '../../../assets/icons/allTodoIcon.svg';
import todayIcon from '../../../assets/icons/todayIcon.svg';
import upcomingIcon from '../../../assets/icons/upcomingIcon.svg';

import allTodoActiveIcon from '../../../assets/icons/allTodoActiveIcon.svg';
import todayActiveIcon from '../../../assets/icons/todayActiveIcon.svg';
import upcomingActiveIcon from '../../../assets/icons/upcomingActiveIcon.svg';

import { paths } from '../../../../constants/paths';

export const sidebarItems = [
  {
    title: 'All',
    icon: allTodoIcon,
    activeIcon: allTodoActiveIcon,
    path: paths.HOME,
  },
  {
    title: 'Today',
    icon: todayIcon,
    activeIcon: todayActiveIcon,
    path: paths.TODAY,
  },
  {
    title: 'Upcoming',
    icon: upcomingIcon,
    activeIcon: upcomingActiveIcon,
    path: paths.UPCOMING,
  },
];
