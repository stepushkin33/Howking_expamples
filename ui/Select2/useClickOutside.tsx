import React from "react";

const useClickOutside = (callback: () => void) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (!ref.current?.contains(event?.target as HTMLElement)) {
        callback();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, [callback]);

  return ref;
};

export default useClickOutside;
