import COLORS from "@/styles/abstracts/colors";
import { StyleSheet } from "react-native";

export const newsLetterStyles = StyleSheet.create({
  title1: {
    fontFamily: "RobotoCondensed",
    textTransform: "uppercase",
    color: COLORS.primaryShade1,
    letterSpacing: 1,
  },
  title2: {
    color: COLORS.primary,
    fontSize: 28
  },
  title3: {
    width: "65%",
    fontSize: 12,
    color: COLORS.primaryShade1,
    fontWeight: "600",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#33333325",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    borderWidth: 1
  },

})