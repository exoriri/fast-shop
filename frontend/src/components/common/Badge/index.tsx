import React from "react";
import cn from "classnames";

import styles from "./styles.pcss";

interface IBadge {
  clasName?: string;
  color?: string;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Badge = ({
  children,
  className,
  color,
  rounded=true,
  size="md"
}): React.FunctionComponentElement<IBadge> => (
  <div
    className={cn(
      `${styles.badge}`,  
      `${className}`,
      `${styles[color]}`,
      { [`${styles.rounded}`]: rounded },
      `${styles[size]}`
    )}
  >
    {children}
  </div>
);
