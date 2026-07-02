declare module 'react-native-vector-icons/MaterialIcons' {
  import * as React from 'react';

  export interface MaterialIconsProps {
    name: string;
    size?: number;
    color?: string;
    style?: any;
  }

  const MaterialIcons: React.ComponentType<MaterialIconsProps>;
  export default MaterialIcons;
}
