const add = (x, y) => x + y

describe('斷言目標直接從受測物的返回資訊上取得', () => {
  it('add 1 + 2 should be 3', () => {
    const actual = add(1, 2) // 本身會返回 3
    const expected = 3

    expect(actual).toBe(expected) // passed
  })
})
