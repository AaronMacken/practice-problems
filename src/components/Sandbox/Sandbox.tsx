// import { useTheme } from '@context';
// import { getIsDark } from '@utils';
import { useState, useEffect, useRef, useCallback } from 'react';
// import * as styles from './Sandbox.module.scss';

function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  // Callback changes on every render
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  useEffect(() => {
    ref.current = count;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Count is: ${ref.current}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <button type="button" onClick={handleClick}>
      {count}
    </button>
  );
}

const Sandbox = () => {
  return <Counter />;
};

export default Sandbox;
