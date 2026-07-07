import { Reveal } from "@/components/Reveal";

type SectionLabelProps = {
  eyebrow?: string;
  className?: string;
  title: string;
};

export function SectionLabel({ eyebrow, className, title }: SectionLabelProps) {
  return (
    <Reveal className={`section-label${className ? ` ${className}` : ""}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
    </Reveal>
  );
}
