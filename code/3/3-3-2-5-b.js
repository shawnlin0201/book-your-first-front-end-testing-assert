it('解析有效的 JSON 格式時應該回傳正確的物件', () => {
  const validJSON = '{"name":"橘橘","age":5}';
  const actual = JSON.parse(validJSON);

  expect(actual).toMatchInlineSnapshot(`
    {
      "age": 5,
      "name": "橘橘",
    }
  `);
})