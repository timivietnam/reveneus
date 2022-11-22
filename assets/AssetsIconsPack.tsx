import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import { IconPack, IconProvider } from '@ui-kitten/components';
import { SvgProps } from 'react-native-svg';
import { Icons } from './icons';

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: (props) => (
      <Image
        style={styles.icon}
        {...props}
        source={source}
        resizeMode="contain"
      />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AssetIconsPack: IconPack<ImageProps | SvgProps> = {
  name: 'assets',
  icons: {
    trash: createIcon(Icons.trash),
    smiley: createIcon(Icons.smiley),
    fb: createIcon(Icons.fb),
    gg: createIcon(Icons.gg),
    refresh: createIcon(Icons.refresh),
    eye_close: createIcon(Icons.eye_close),
    eye_open: createIcon(Icons.eye_open),
    arrow_right: createIcon(Icons.arrow_right),
    arrow_left: createIcon(Icons.arrow_left),
    xcircle: createIcon(Icons.xcircle),
    dashboard: createIcon(Icons.dashboard),
    person: createIcon(Icons.person),
    project: createIcon(Icons.project),
    settings: createIcon(Icons.settings),
    search: createIcon(Icons.search),
    menu: createIcon(Icons.menu),
    notification: createIcon(Icons.notification),
    plus: createIcon(Icons.plus),
    arrow_lineup: createIcon(Icons.arrow_lineup),
    more: createIcon(Icons.more),
    foward: createIcon(Icons.foward),
    backward: createIcon(Icons.backward),
    delete: createIcon(Icons.delete),
    arrowDown: createIcon(Icons.arrowDown),
    edit: createIcon(Icons.edit),
  },
};

export default AssetIconsPack;
