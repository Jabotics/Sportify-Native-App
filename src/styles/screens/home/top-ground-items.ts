import { StyleSheet } from "react-native";

export const topGroundStyles = StyleSheet.create({
  container: {
    width: "32%",
    borderRadius: 5,
    overflow: "hidden",
    position: 'relative',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  topContentContainer:{
    position: 'absolute',
    top: 5,
    left: '50%',
    width: '90%',
    height: '15%',
    transform: [{ translateX: -0.5 * 95 }],
    justifyContent: 'space-between',
    alignItems: 'center',
    display: "flex",
    flexDirection: "row",
  },
  contentContainer: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    width: '90%',
    height: '40%',
    transform: [{ translateX: -0.5 * 95 }],
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    flexDirection: "column",
    gap: 5
  },
  text: {
    color: 'white',
    textAlign: 'left',
  },
})