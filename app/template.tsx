import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-fade-in" exit="page-fade-out" default="none">
      {children}
    </ViewTransition>
  );
}
