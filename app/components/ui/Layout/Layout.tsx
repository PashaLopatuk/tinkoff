import { View } from 'react-native';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      {children}
    </View>
  );
}

export default Layout;
