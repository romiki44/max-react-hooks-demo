import { useEffect, useState } from 'react';

//custom hook
const useCounter = (delta = 1) => {
  //pre kazdy komponent vlastna instancia, cize vlastny counter, setCounter, useEffect a pod...
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + delta);
    }, 1000);

    return () => clearInterval(interval);
  }, [delta]);

  //vraciame stav do componentu
  return counter;
};

export default useCounter;
