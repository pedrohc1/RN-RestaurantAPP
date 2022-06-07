import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer A4R-Bmz1fSBJ-Idea_ElS57QTNJjGHSd4DqgWFZtILzlFrM-PY_ogU2DDrcC5ORYae-fjes5NYOuq8tgXi_7UDbD9VHMkEWniyHUtd0Ek4Oj1TdwpKltl4d2e7GbYnYx",
	},
});
