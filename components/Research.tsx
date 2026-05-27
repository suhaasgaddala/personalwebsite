import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Research() {
  return (
    <section className="content-section section-shell" aria-labelledby="research-title">
      <SectionLabel title="Research" />
      <Reveal className="research-copy detail-list" id="research-title">
        <article className="detail-item">
          <h3>UT Southwestern - Tsai Lab</h3>
          <p>AI / Machine Learning Research Intern</p>
          <p>
            Architected a machine learning model for autism-related behavioral
            phenotyping, delivering 88%+ accuracy across 150+ experimental
            trials by identifying social interaction signatures in controlled
            behavioral settings.
          </p>
          <p>
            Built a high-throughput behavioral intelligence pipeline that cut
            preprocessing time by 76%+ and saved substantial researcher time by
            automating annotation, feature extraction, and downstream
            experimental analysis.
          </p>
          <p>
            Currently in the process of publishing some research on Machine
            Learning.
          </p>
        </article>
      </Reveal>
    </section>
  );
}
