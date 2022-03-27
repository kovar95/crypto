import { useState, useCallback } from "react";

const useToggle = (initialState: boolean = false):[boolean, () => void] => {
  const [active, setActive] = useState(initialState);

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  return [active, toggle];
};

export default useToggle;