import { Text } from "react-native";

const TabLabel = ({ label, focused }: { label: string; focused: boolean }) => {
  return (
    <Text style={{ fontSize: 10, color: 'black', marginBottom: 4, opacity: focused ? 1 : 0.4 }}> 
      {label}
    </Text>
  );
};

export default TabLabel