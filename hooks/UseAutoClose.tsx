import React, { MutableRefObject, useCallback, useEffect } from "react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: MutableRefObject<HTMLDivElement | null>;
}
const useAutoClose = ({ setOpen, menu }: Props) => {
  const handleClosure = useCallback(
    (event) => !menu.current?.contains(event.target) && setOpen(false),
    [setOpen, menu]
  );

  useEffect(() => {
    window.addEventListener("click", handleClosure);
    window.addEventListener("focusin", handleClosure);

    return () => {
      window.removeEventListener("click", handleClosure);
      window.removeEventListener("focusin", handleClosure);
    };
  }, [handleClosure, menu]);
};
export default useAutoClose;
