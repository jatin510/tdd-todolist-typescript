import { Guard, GuardResponse } from './guard';
import Result from './result';

describe('guard', () => {
  let result: Result<GuardResponse>;
  let argName = 'testArgument';
  let secondaryArgName = 'secondaryTestArgument';

  beforeEach(() => {
    result = null;
  });

  describe('against null or undefined', () => {
    it('knows that value provided equates to success', () => {
      result = Guard.againstNullOrUndefined(true, argName);
      expect(result.isSuccess).toBeTruthy();
    });

    it('knows that null value equates to failure', () => {
      result = Guard.againstNullOrUndefined(null, argName);
      expect(result.isSuccess).toBeFalsy();
      expect(result.getErrorValue()).toEqual(`${argName} is null or undefined`);
    });

    it('knows that undefined value equates to failure', () => {
      result = Guard.againstNullOrUndefined(undefined, argName);
      expect(result.isSuccess).toBeFalsy();
      expect(result.getErrorValue()).toEqual(`${argName} is null or undefined`);
    });

    it('knows that empty string still equates to success', () => {
      result = Guard.againstNullOrUndefined('', argName);
      expect(result.isSuccess).toBeTruthy();
    });
  });
});
