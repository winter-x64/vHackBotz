import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  description: string;
};

type FeatureCardPorps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

// Predefined patterns to avoid randomness during server/client rendering
const PREDEFINED_PATTERNS = [
  [
    [7, 1],
    [8, 3],
    [9, 2],
    [7, 5],
    [10, 4],
  ],
  [
    [8, 2],
    [10, 1],
    [9, 4],
    [7, 3],
    [8, 6],
  ],
  [
    [9, 3],
    [7, 2],
    [10, 5],
    [8, 1],
    [9, 6],
  ],
];

export function FeatureCard({
  feature,
  className,
  ...props
}: FeatureCardPorps) {
  // Use a stable pattern based on the feature title to avoid hydration mismatch
  const patternIndex = useMemo(
    () =>
      // Create a simple hash from the feature title
      feature.title
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      PREDEFINED_PATTERNS.length,
    [feature.title]
  );

  const pattern = PREDEFINED_PATTERNS[patternIndex];

  return (
    <div
      className={cn(
        "relative overflow-hidden p-6 bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl shadow-xl",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-primary/15 to-background/10 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-90">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="fill-zinc-600/20 stroke-zinc-500/40 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <div className="relative z-10 bg-primary/20 p-3 rounded-lg w-fit mb-4">
        {React.isValidElement(feature.icon)
          ? feature.icon
          : React.createElement(
              feature.icon as React.ComponentType<
                React.SVGProps<SVGSVGElement>
              >,
              {
                className: "text-primary size-6",
                strokeWidth: 1.5,
                "aria-hidden": true,
              }
            )}
      </div>
      <h3 className="mt-4 text-sm md:text-base font-medium text-foreground/90 relative z-10">
        {feature.title}
      </h3>
      <p className="text-muted-foreground relative z-10 mt-2 text-xs font-light">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
