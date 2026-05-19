import { Reveal } from "@/components/Reveal";

type SectionLabelProps = {
  eyebrow?: string;
  title: string;
};

export function SectionLabel({ eyebrow, title }: SectionLabelProps) {
  return (
    <Reveal className="section-label">
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
    </Reveal>
  );
}
