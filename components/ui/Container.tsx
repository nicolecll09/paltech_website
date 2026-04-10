import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={` w-full  px-6 py-12  ${className}`}>
      {children}
    </div>
  );
}