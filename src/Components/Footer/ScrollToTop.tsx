import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { Transition, UnstyledButton } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <UnstyledButton className="fixed right-5 bottom-5" style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <ArrowUpIcon className="h-6 w-6" />
          </UnstyledButton>
        )}
      </Transition>
    </>
  );
};

export default ScrollToTop;
