import { IconName } from '@/types';
import { Image } from 'react-native'

export const tabIcons: Record<IconName, any> = {
  home: require("@/assets/images/icons/bottom-bar-icons/home.png"),
  play: require("@/assets/images/icons/bottom-bar-icons/play.png"),
  message: require("@/assets/images/icons/bottom-bar-icons/message.png"),
  account: require("@/assets/images/icons/bottom-bar-icons/account.png"),
  notification: require("@/assets/images/icons/bottom-bar-icons/notification.png"),
};

const TabIcon = ({ name, focused }: { name: IconName; focused: boolean }) => {
  return (
    <Image
      source={tabIcons[name]}
      style={{ height: 24, width: 24, marginTop: 10, opacity: focused ? 1 : 0.6 }}
    />
  );
};

export default TabIcon