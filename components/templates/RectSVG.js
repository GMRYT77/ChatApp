import React from "react";

const RectSVG = (props) => {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]"
      width={props.w}
      height={props.h}
      viewBox="0 0 60 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.10988 13.7331C1.78829 7.24783 6.8194 2.05077 13.2861 1.2132C25.3561 -0.350123 34.9217 -0.433378 46.9857 1.14293C53.4782 1.99126 58.4638 7.28432 59.0579 13.805C60.151 25.8006 60.1248 35.3396 59.0553 47.2967C58.4599 53.9529 53.3174 59.3204 46.6823 60.1162C34.755 61.5467 25.2452 61.5989 13.2675 60.1257C6.80756 59.3312 1.77061 54.1576 1.08134 47.6856C-0.166684 35.9669 -0.210187 26.3524 1.10988 13.7331Z"
        fill={`#${props.fill}`}
      />
    </svg>
  );
};

export default RectSVG;
