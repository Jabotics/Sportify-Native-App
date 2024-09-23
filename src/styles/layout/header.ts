import { StyleSheet } from "react-native";

import COLORS from "../abstracts/colors";

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  // TOP-BAR
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  topBarTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topBarIconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: "#D1D5DB", 
  },
  topBarTitle: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: COLORS.white,
  },
  topBarSubtitle: {
    fontSize: 12,
    color: COLORS.white,
  },
  topBarButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topBarSignInButton: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 36,
    borderRadius: 8,
  },
  topBarSignInText: {
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  topBarIconContainer: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 50
  },

  // SEARCH-BAR
  searchBarContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 12,
    width: "100%",
    height: 40,
    overflow: "hidden"
  },
  searchBarHeartIconContainer: {
    backgroundColor: "#BFBFBF",
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  searchContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 4,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: "100%",
  },
  searchIcon: {
    marginBottom: 4,
    color: "#33333365"
  },
  textInput: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
  },
})