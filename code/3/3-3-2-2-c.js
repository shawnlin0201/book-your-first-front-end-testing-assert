// passed
expect({ cats: ["橘橘", "黑黑"], dogs: undefined })
    .toEqual({cats: ["橘橘", "黑黑"]});

// failed
expect({ cats: ["橘橘", "黑黑"], dogs: undefined })
    .toStrictEqual({cats: ["橘橘", "黑黑"]});
