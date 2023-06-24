import { Cat } from '../3-3-2-3-a'

it('貓咪餓了會喵喵叫', () => {
  const cat = new Cat('橘橘')
  const meow = vi.spyOn(cat, 'meow')

  cat.hungry()
  cat.hungry()

  expect(meow).toHaveReturned() // passed
  expect(meow).toHaveReturnedWith('喵喵喵') // passed
  expect(meow).toHaveReturnedTimes(2) // passed
  expect(meow).toHaveLastReturnedWith('喵喵喵') // passed
  expect(meow).toHaveNthReturnedWith(1, '喵喵喵') // passed
})