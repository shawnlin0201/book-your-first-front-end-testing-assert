expect("有隻貓咪叫橘橘").toHaveLength(7); // passed
expect(["橘橘", "黑黑"]).toHaveLength(2); // passed
expect({ length: 6 }).toHaveLength(6); // passed
