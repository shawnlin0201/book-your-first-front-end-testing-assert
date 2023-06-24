expect(1).toBeTruthy(); // passed
expect({}).toBeTruthy(); // passed
expect([]).toBeTruthy(); // passed
expect(0).toBeFalsy(); // passed
expect("").toBeFalsy(); // passed
expect(null).toBeFalsy(); // passed
expect(undefined).toBeFalsy(); // passed
expect(NaN).toBeFalsy(); // passed
