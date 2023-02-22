import { useLayoutEffect, useRef } from "react";
import calculateNodeHeight from "./calculateNodeHeight";

function TextArea(props: { value: string; onChange: (value: string) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // sometimesSlowCalculation();

  useLayoutEffect(() => {
    if (textareaRef.current) {
      const t0 = performance.now();
      const height = calculateNodeHeight(textareaRef.current);
      textareaRef.current.style.height = `${height}px`;
      // sometimesSlowCalculation();
      const t1 = performance.now();
      console.log(`${t1 - t0} ms`);
    }
  });

  return (
    <textarea
      ref={textareaRef}
      value={props.value}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
    />
  );
}

export default TextArea;
