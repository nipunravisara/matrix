import type {MButtonVariations} from '..';

interface TGetTestID {
  component: string;
  type: MButtonVariations;
  testId?: string;
}

export function getTestID({component, type, testId}: TGetTestID) {
  if (testId) {
    return `${component}:${type}:${testId}`;
  }
  return `${component}:${type}`;
}
