import { MissionUtils } from '@woowacourse/mission-utils';
import { seperateCarNames, processTrialInput } from '../utils/inputHandling.js';
import Car from '../classes/Car.js';

class App {
  carNamesArray;
  carList;
  #trialNum;
  constructor() {
    this.carNamesArray = [];
    this.carList = [];
    this.#trialNum = 0;
  }

  async init() {
    this.carNamesArray = seperateCarNames(
      await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      ),
    );
    this.carList = this.carNamesArray.map((name) => new Car(name));
    this.#trialNum = processTrialInput(
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );
  }

  async play() {
    await this.init();

    MissionUtils.Console.print('\n실행 결과');
    for (let i = 0; i < this.#trialNum; i++) {}
  }
}

export default App;
