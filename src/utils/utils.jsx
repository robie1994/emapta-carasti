import {
  User,
  CalendarCheck,
  Wallet,
  Settings,
  MessageSquare,
} from 'lucide-react';

export const navLinks = [
  {
    name: 'My Profile',
    path: '/',
    icon: User,
  },
  {
    name: 'My Bookings',
    path: '/mybookings',
    icon: CalendarCheck,
  },
  {
    name: 'My Wallet',
    path: '/mywallet',
    icon: Wallet,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
  },
  {
    name: 'Support',
    path: '/support',
    icon: MessageSquare,
  },
];

export const tabOptions = [
  {
    name: 'Details',
    path: '/details',
  },
  {
    name: 'Documents',
    path: '/documents',
  },
  {
    name: 'Referral',
    path: '/referral',
  },
  {
    name: 'Tolls & Fines Analytics',
    path: '/tolls-fines-analytics',
  },
  {
    name: 'Plant a Tree',
    path: '/plant-a-tree',
  },
  {
    name: 'Share Rewards',
    path: '/share-rewards',
  },
  {
    name: 'Favourite Cars',
    path: '/favourite-cars',
  },
];

export const handleStatusChange = (index) => {
  switch (index) {
    case 0:
      return 'My Profile';
    case 1:
      return 'Documents';

    case 2:
      return 'Referral';
    case 3:
      return 'Tolls & Fines Analytics';
    case 4:
      return 'Plant a Tree';
    case 5:
      return 'Share Rewards';
    case 6:
      return 'Favourite Cars';
    default:
      return '';
  }
};

export const damagesData = [
  {
    name: 'Damages',
    amount: 5000,
  },
  {
    name: 'Page B',
    amount: 2000,
  },
  {
    name: 'Page B',
    amount: 3500,
  },
  {
    name: 'Page B',
    amount: 1000,
  },
];

export const salikCharges = [
  {
    name: 'Damages',
    amount: 7000,
  },
  {
    name: 'Page B',
    amount: 5000,
  },
  {
    name: 'Page B',
    amount: 6500,
  },
  {
    name: 'Page B',
    amount: 3000,
  },
];

export const finesData = [
  {
    name: 'Damages',
    amount: 100,
  },
  {
    name: 'Page B',
    amount: 500,
  },
  {
    name: 'Page B',
    amount: 200,
  },
  {
    name: 'Page B',
    amount: 1200,
  },
];
