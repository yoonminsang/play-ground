import { isAlphabet, isKorean, isNumber } from '.';

describe('validations', () => {
  describe('isNumber', () => {
    it('숫자인 경우 true', () => {
      expect(isNumber('123')).toBeTruthy();
    });
    it('숫자가 아닌 경우 false', () => {
      expect(isNumber('asd')).toBeFalsy();
    });
    it('숫자와 숫자가 아닌 문자가 포함된 경우 false', () => {
      expect(isNumber('123asd')).toBeFalsy();
    });
  });

  describe('isAlphabet', () => {
    it('알파벳인 경우 true', () => {
      expect(isAlphabet('asd')).toBeTruthy();
    });
    it('알파벳이 아닌 경우 false', () => {
      expect(isAlphabet('123')).toBeFalsy();
    });
    it('알파벳과 알파벳이 아닌 문자가 포함된 경우 false', () => {
      expect(isAlphabet('asd123')).toBeFalsy();
      expect(isAlphabet('asdㅁㄴㅇ')).toBeFalsy();
    });
  });

  describe('isKorean', () => {
    it('올바른 한글인 경우 true', () => {
      expect(isKorean('가나다')).toBeTruthy();
    });
    it('올바른 한글이 아닌 경우 false', () => {
      expect(isKorean('ㅁㄴㅇ')).toBeFalsy();
    });
    it('한글이 아닌 경우 false', () => {
      expect(isKorean('123')).toBeFalsy();
    });
    it('한글과 한글이 아닌 문자가 포함된 경우 false', () => {
      expect(isKorean('가나다123')).toBeFalsy();
      expect(isKorean('가나다asd')).toBeFalsy();
    });
  });
});

export {};
