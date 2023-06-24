expect(0.1 + 0.2).toBe(0.3) // failed 浮點數 issue，結果應該會為 0.30000000000000004
expect(0.1 + 0.2).toBeCloseTo(0.3) // passed