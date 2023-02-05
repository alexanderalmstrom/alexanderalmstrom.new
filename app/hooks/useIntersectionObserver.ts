import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true
) {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<null | IntersectionObserver>(null);

  const destroy = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;

    destroy();

    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          destroy();
        }
      },
      { ...options }
    ));

    ob.observe(element);

    return () => {
      destroy();
    };
  }, [element, options]);

  return isIntersecting;
}
