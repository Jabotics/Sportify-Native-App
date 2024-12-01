import COLORS from "@/styles/abstracts/colors";
import { memo } from "react";
import Icon from "react-native-vector-icons/AntDesign";

const NextButton = memo(() => {
  return (
    <Icon name="rightcircle" size={30} color={COLORS.primary} />
  )
})

export default NextButton