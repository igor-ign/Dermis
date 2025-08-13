import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="my-0 mx-auto max-w-[95%] w-[1500px]">{children}</div>;
}
