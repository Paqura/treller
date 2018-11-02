const
	sum = (a, b) => a + b;

it('test sum', () => {
	const res = sum(2, 2);
	expect(res).toEqual(4);
});
