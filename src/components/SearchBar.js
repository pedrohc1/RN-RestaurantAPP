import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<FontAwesome name="search" style={styles.searchIcon} />
			<TextInput
				placeholder="Search"
				style={styles.input}
				value={term}
				autoCorrect={false}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#CCC",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 10,
	},
	input: {
		flex: 1,
	},
	searchIcon: {
		fontSize: 30,
		alignSelf: "center",
		marginHorizontal: 15,
	},
});

export default SearchBar;
