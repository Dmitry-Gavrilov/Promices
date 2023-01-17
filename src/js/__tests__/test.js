import GameSavingLoader from '../GameSavingLoader';

test('проверка загрузчика loader', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const recive = await GameSavingLoader.load();
  expect(recive).toEqual(data);
});
