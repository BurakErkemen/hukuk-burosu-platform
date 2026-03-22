import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}