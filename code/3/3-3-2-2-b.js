// passed
expect({ cat: "橘橘" }).toEqual({ cat: "橘橘" }); 
expect({ cat: "橘橘", age: undefined }).toEqual({ cat: "橘橘" });

// failed
expect({ cat: "橘橘", age: null }).toEqual({ cat: "橘橘" });