import Chance from "chance";
const chance = new Chance();

// genrate random square position
export const random_square_name = () => {
	const letter = chance.string({
		length: 1,
		pool: "abcdefgh",
	});
	const number = chance.integer({ min: 1, max: 8 });

	return letter + number;
};
