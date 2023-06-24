// 選擇一：在斷言前呼叫 `chai.should` 方法
import chai from "chai";
chai.should();
// 選擇二：直接引入下方模組
import "chai/register-should";

// 底下的測試案例就能直接鏈式加上 Matchers
it("Chai/Assert", () => {
  const foo = "bar";
  const beverages = { tea: ["chai", "matcha", "oolong"] };

  foo.should.be.a("string");
  foo.should.equal("bar");
  foo.should.have.lengthOf(3);
  beverages.should.have.property("tea").with.lengthOf(3);
});
