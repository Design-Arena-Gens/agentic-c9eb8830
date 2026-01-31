import { ReactNode } from "react";

type SectionProps = {
  title: string;
  badge?: string;
  children: ReactNode;
};

export function Section({ title, badge, children }: SectionProps) {
  return (
    <section>
      {badge ? <span className="badge">{badge}</span> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
