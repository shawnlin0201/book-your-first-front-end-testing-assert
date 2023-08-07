import { enableImgLazyLoad } from 'utils.js'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn()
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

it('檢查 enableImgLazyLoad 觸發後，目標元素是否有被 observe', () => {
  const div = document.createElement('div')
  const img = document.createElement('img')
  img.className = 'lazy'
  const img2 = document.createElement('img')
  img2.className = 'lazy'
  div.appendChild(img)
  div.appendChild(img2)
  document.body.appendChild(div)

  enableImgLazyLoad()

  const observeMock = IntersectionObserverMock.mock.results[0].value.observe.mock
  expect(IntersectionObserverMock).toHaveBeenCalled()
  expect(observeMock.calls[0][0]).toBe(img)
  expect(observeMock.calls[1][0]).toBe(img2)
})
