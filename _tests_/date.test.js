import CalcDate from "../src/date";

describe("CalcDate", () => {

	test('should correctly create a date with month to year', () => {
		const aDate = new CalcDate(1, 24, 1990);
		expect(aDate.month).toEqual(1);
		expect(aDate.day).toEqual(24);
		expect(aDate.year).toEqual(1990);
	});

	// test('should correctly determine if date is not valid', () => {
	// 	const aDate = new CalcDate(-1, "twenty", "#");
	// 	expect(aDate.checkDate()).toEqual("not a date");
	// });

	// test('should correctly determine if a date is valid', () => {
	// 	const aDate = new CalcDate(1,24,1990);
	// 	expect(aDate.checkDate()).toEqual("you got this");
	// });

	// test('should check if year is greater than 1800', () => {
	// 	const aDate = new CalcDate(1,24,1990);
	// 	expect(aDate.checkDate()).toEqual('greater than 1800');
	// });

		// test('should return remainder of day of week calculation', () => {
		// 	const aDate = new CalcDate(5,24,1990);
		// 	expect(aDate.checkDate()).toEqual(5);
		// });

		test('should return the day of week for the given day', () => {
			const aDate = new CalcDate(1,24,1990);
			expect(aDate.checkDate()).toEqual('Wednesday');
		});


	
});

