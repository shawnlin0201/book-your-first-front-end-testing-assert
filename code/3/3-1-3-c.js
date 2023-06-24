import { FoodBank } from '../3-1-3-a'

// ...其他測試案例
it(`若開過戶頭，應該回應 '您已開過戶頭囉。' `, () => {
  const bank = new FoodBank()
  bank.openAccount('Orange')
  expect(bank.openAccount('Orange')).toBe('您已開過戶頭囉。')
})
// ...其他測試案例