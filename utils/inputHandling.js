export const seperateCarNames = (carNameString) => {
  const result = carNameString.split(',');
  result.forEach((carName) => {
    if (carName.length > 5) {
      console.log('wowowow');
      throw Error(
        '[ERROR] 자동차 이름은 5자 이하, 각 이름은 쉼표(,)로 구분해주세요.',
      );
    }
  });
  return result;
};
export const processTrialInput = (inputString) => {
  try {
    const result = Number(inputString);
    if (result < 0) {
      throw Error('[ERROR] negative');
    }
    if (!Number.isInteger(result)) {
      throw Error('[ERROR] float');
    }
    return result;
  } catch (e) {
    throw Error('[ERROR] Input a integer greater and equal than 0');
  }
};
