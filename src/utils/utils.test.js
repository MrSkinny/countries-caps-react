import { numberize } from './';

describe('numberize', () => {
  it('returns "139" from 139.0', () => {
    expect(numberize(139.0)).toEqual("139");
  });

  it('returns "245,954" from 245954', () => {
    expect(numberize(245954)).toEqual("245,954");
  });

  it('returns "14,000,000" from 1.4E7', () => {
    expect(numberize(1.4E7)).toEqual("14,000,000");
  });

  it('returns "9,629,091" from 9629091.0', () => {
    expect(numberize(9629091.0)).toEqual("9,629,091");
  });

});
