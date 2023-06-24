const cat = { name: '黑黑' }

expect(cat).toHaveProperty('name') // passed
expect(cat).toHaveProperty('name', '黑黑') // passed
expect(cat).toHaveProperty('name', '黑黑') // passed
expect(cat).toHaveProperty('name', '橘橘') // failed