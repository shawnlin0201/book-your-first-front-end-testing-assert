class Cat {
    constructor(name) {
      this.name = name
    }
  }

// passed
expect(new Cat('橘橘'))
    .toEqual({ name: '橘橘' })

// failed
expect(new Cat('橘橘'))
    .toStrictEqual({ name: '橘橘' })
