import { Cat } from '../3-3-2-3-a'

it('貓咪餓了會喵喵叫', () => {
  const cat = new Cat('橘橘')
  const meow = vi.spyOn(cat, 'meow')

  cat.hungry()

  expect(meow).toHaveBeenCalled() // passed
  expect(meow).toHaveBeenCalledWith('喵喵喵') // passed
  expect(meow).toHaveBeenCalledTimes(1) // passed

  cat.hungry()
  cat.hungry()

  expect(meow).toHaveBeenCalledTimes(3) // passed
})
