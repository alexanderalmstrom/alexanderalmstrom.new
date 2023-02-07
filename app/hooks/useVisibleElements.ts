import {
  Children,
  cloneElement,
  isValidElement,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export function useVisibleElements(
  ref: MutableRefObject<Element | null>,
  children: ReactNode,
  options: IntersectionObserverInit = {}
) {
  const [intersectingChildren, setIntersectingChildren] = useState<Set<number>>(
    new Set()
  );

  const elements = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const elementRef = useRef<HTMLElement | null>(null);

    function handleObserve(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        const { isIntersecting, intersectionRatio } = entry;

        if (isIntersecting && intersectionRatio > 0.5) {
          setIntersectingChildren((prevIntersectingChildren) => {
            const newIntersectingChildren = new Set(prevIntersectingChildren);
            newIntersectingChildren.add(index);
            return newIntersectingChildren;
          });
        } else {
          setIntersectingChildren((prevIntersectingChildren) => {
            const newIntersectingChildren = new Set(prevIntersectingChildren);
            newIntersectingChildren.delete(index);
            return newIntersectingChildren;
          });
        }
      });
    }

    useEffect(() => {
      const defaultOptions = {
        root: ref.current,
        threshold: 0,
      };

      const observer = new IntersectionObserver(handleObserve, {
        ...defaultOptions,
        ...options,
      });

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref, children]);

    return cloneElement(child as ReactElement, {
      ref: elementRef,
      key: index,
    });
  });

  return {
    elements,
    intersectingChildren,
  };
}
