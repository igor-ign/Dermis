import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-[1500px] my-0 mx-auto max-w-[95%]">{children}</div>;
}
