import { FoodBank } from "../3-1-3-a";

it(`若開過戶頭，應該回應 '您已開過戶頭囉。' `, () => {
  // 準備：Arrange
  const bank = new FoodBank();
  let message;

  // 操作：Action
  message = bank.openAccount("Orange");
  message = bank.openAccount("Orange");

  // 斷言：Assertion
  expect(message).toBe("您已開過戶頭囉。");
});
