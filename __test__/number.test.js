import  { formatPhoneNumber } from '../src/number';

describe('formatPhoneNumber', () => {
    test('converts Russian number with 8 to international format', () => {
      expect(formatPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    });
  
    test('keeps the +7 international format as is', () => {
      expect(formatPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    });
  
    test('converts a number with country code different from Russia', () => {
      expect(formatPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
    });
  
    test('converts a 10-digit number without country code to international format', () => {
      expect(formatPhoneNumber('9270000000')).toBe('+79270000000');
    });
  
    test('handles a number with spaces and punctuation', () => {
      expect(formatPhoneNumber('+7 927 000-00-00')).toBe('+79270000000');
    });
  });
  