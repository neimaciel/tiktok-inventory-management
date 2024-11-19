import React from 'react';
import { Frame, Navigation } from '@shopify/polaris';
import { LayoutGrid, BarChart3, Settings, Box } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            label: 'Dashboard',
            icon: LayoutGrid,
            onClick: () => navigate('/'),
            selected: location.pathname === '/',
          },
          {
            label: 'Inventory',
            icon: Box,
            onClick: () => navigate('/inventory'),
            selected: location.pathname === '/inventory',
          },
          {
            label: 'Analytics',
            icon: BarChart3,
            onClick: () => navigate('/analytics'),
            selected: location.pathname === '/analytics',
          },
          {
            label: 'Settings',
            icon: Settings,
            onClick: () => navigate('/settings'),
            selected: location.pathname === '/settings',
          },
        ]}
      />
    </Navigation>
  );

  return (
    <Frame
      navigation={navigationMarkup}
    >
      <div className="p-6">
        {children}
      </div>
    </Frame>
  );
}