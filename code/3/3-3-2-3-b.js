import { Cat } from '../3-3-2-3-a'

it("貓咪餓了會喵喵叫", () => {
  const cat = new Cat("橘橘");
  const meow = vi.spyOn(cat, "meow"); // 附身於 meow 方法

  cat.hungry(); // 執行 hungry 方法

  expect(meow).toHaveBeenCalledTimes(1);
  // 捕捉到 meow 方法被呼叫到一次
});
