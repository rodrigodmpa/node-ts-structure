import User from '@models/User';

test('shoul be ok', () => {
  const user = new User();
  user.name = 'Diego';

  expect(user.name).toEqual('Diego');
});
