import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const interests = [
  {
    title: "Volleyball",
    copy:
      "I started this sport in freshman year of college and met some of the coolest people that have changed my life and caused me to become more introspective of who I am. I play outside position."
  },
  {
    title: "Tennis",
    copy:
      "The first sport that intrigued me and taught me a lot about who I am off the court. I enjoy watching this sport now and will time to time have a hit."
  },
  {
    title: "Cooking",
    copy:
      "I love to experiment with my food and cook for many people. It satisfies me when I see someone have that nod of approval when eating one of my dishes :)))"
  },
  {
    title: "Music",
    copy:
      "I spend 80 percent of my day listening to some form of music, whether classical or jazz or indie. It has shaped me to who I am."
  }
];

export function Interests() {
  return (
    <section className="content-section section-shell interests" aria-labelledby="interests-title">
      <SectionLabel title="Interests" />
      <Reveal className="interest-copy detail-list" id="interests-title">
        {interests.map((interest) => (
          <article className="detail-item" key={interest.title}>
            <h3>{interest.title}</h3>
            <p>{interest.copy}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
