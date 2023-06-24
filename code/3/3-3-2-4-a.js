it('解析有效的 JSON 格式時應該回傳正確的物件', () => {
    const validJSON = '{"name":"橘橘","age":5}';
    const expected = {
        name: '橘橘',
        age: 5,
    };

    const actual = JSON.parse(validJSON);

    expect(actual).toEqual(expected);
})
it('解析無效的 JSON 格式時應該拋出錯誤', () => {
    // 這是一個無效的 JSON 字串，因為應該使用雙引號來包住屬性名稱與值
    const invalidJSON = "{'name':'橘橘','age':5}";

    expect(() => {
        JSON.parse(invalidJSON);
    }).toThrow();
});
