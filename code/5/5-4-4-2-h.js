import axios from 'axios'

/* 假設 axios.get('...') 原先回應的資料為
{
  data: { value: 'original' }
}
*/
it('use mockResolvedValue ', async () => {
  const spy = vi.spyOn(axios, 'get')
  spy.mockResolvedValue({
    data: { value: 'mock' }
  })
  const { data } = await axios.get('...')

  expect(data).toEqual({
    value: 'mock'
  })
})
