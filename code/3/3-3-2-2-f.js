// passed
expect(["橘橘", "黑黑"])
  .toContainEqual("橘橘");
expect(["橘橘", "黑黑"])
  .toContainEqual(["橘橘", "黑黑"]);

// failed
expect(["橘橘", "黑黑"]).toContainEqual(["橘橘"]);
