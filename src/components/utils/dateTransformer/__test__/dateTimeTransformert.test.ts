import { dateTransformer } from '../../dateTransformer';

describe('dateTransformer', () => {
  it('should insert colon between supported time formats', () => {
    expect(dateTransformer(900)).toBe('09:00');

    expect(dateTransformer(1020)).toBe('10:20');
  });
});
