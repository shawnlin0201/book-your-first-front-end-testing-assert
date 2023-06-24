const cat = { lover: { name: "黑黑" }, name: "橘橘" };

// passed
expect(cat).toMatchObject({ name: "橘橘" }); 
expect(cat).toMatchObject({ lover: { name: "黑黑" } });

// failed
expect(cat).toMatchObject({ name: "黑黑" }); 
expect(cat).toMatchObject({ lover: { name: "橘橘" } });
