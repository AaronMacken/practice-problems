import { useTheme } from '@context';
import { getIsDark } from '@utils';
import { useState } from 'react';
import * as styles from './Sandbox.module.scss';

/**
 * PROBLEM: Two Sum
 *
 * Given an array of numbers and a target sum, find indices of two numbers
 * that add up to the target. Return as [index1, index2].
 *
 * Constraints:
 * - Each input has exactly one solution
 * - Cannot use the same element twice
 * - Return indices in ascending order
 *
 * Example:
 * nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
 *
 * TODO: Implement the twoSum function below
 */

function twoSum(nums: number[], target: number): [number, number] {
  // TODO: Implement this function
  // Start with a simple solution, optimize if needed
  return [0, 0];
}

const Sandbox = () => {
  console.log('styles: ', styles)
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';
  const [result, setResult] = useState<[number, number] | null>(null);

  const handleTest = () => {
    const testNums = [2, 7, 11, 15];
    const testTarget = 9;
    const res = twoSum(testNums, testTarget);
    setResult(res);
  };

  return (
    <div className={styles[cls]}>
      <div className={styles.problemContainer}>
        <h1 className={styles.title}>Two Sum</h1>
        <p className={styles.description}>Find two numbers that add up to target sum</p>
        <button type="button" className={styles.button} onClick={handleTest}>
          Test Solution
        </button>
        {result && (
          <div className={styles.resultBox}>
            <p>
              Result: [{result[0]}, {result[1]}]
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sandbox;
