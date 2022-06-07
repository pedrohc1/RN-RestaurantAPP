import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = React.useState("");
	const [restaurants, setRestaurants] = React.useState([]);
	const [errorMessage, setErrorMessage] = React.useState("");

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				//
				params: {
					limit: 50,
					term: searchTerm,
					location: "Brasilia",
				},
			});
			setRestaurants(response.data.businesses);
		} catch (err) {
			setErrorMessage("something went wrong");
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {restaurants.length} results</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
