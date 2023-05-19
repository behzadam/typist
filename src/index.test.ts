import { message } from './index';

describe('Message', () => {
  test('returns hi message', async () => {
    expect(message).toBe('Hi Typist!');
  });
});
