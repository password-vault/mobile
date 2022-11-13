import { reactotron } from '../configs/global/reactotron';

export function reactotronLog(...args: unknown[]) {
  reactotron.log(args);
}
