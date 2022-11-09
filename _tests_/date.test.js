import CalcDate from "../src/date";

describe("CalcDate", () => {

	test('should correctly create a date with month to year', () => {
		const aDate = new CalcDate(1, 24, 1990);
		expect(aDate.month).toEqual(1);
		expect(aDate.day).toEqual(24);
		expect(aDate.year).toEqual(1990)
	});
});

