"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const photoCards = [
  {
    src: "/suhaas-photo.png",
    alt: "Suhaas in a film-style portrait",
    topic: "proof of life",
    caption: "hey there :)"
  },
  {
    src: "/suhaas-hiking.jpeg",
    alt: "Suhaas looking out over the coast after a hike",
    topic: "after the hike",
    caption: "after a 4 hour long hike in hawaii"
  },
  {
    src: "/suhaas-debugging.jpeg",
    alt: "Suhaas debugging on a laptop by a window",
    topic: "debugging",
    caption: "this is me debugging"
  }
];

const stackPositions = [
  { x: 0, y: 0, rotate: -1.5, scale: 1 },
  { x: 22, y: 18, rotate: 5.5, scale: 0.96 },
  { x: -18, y: 34, rotate: -6, scale: 0.92 }
];

export function PhotoStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const lastWheelAt = useRef(0);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % photoCards.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + photoCards.length) % photoCards.length);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const now = Date.now();
      if (now - lastWheelAt.current < 420) {
        return;
      }

      lastWheelAt.current = now;
      if (event.deltaY > 0) {
        showNext();
      } else {
        showPrevious();
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [showNext, showPrevious]);

  return (
    <div className="photo-stack photo-stack-enter" aria-label="Photo stack">
      <div className="photo-stack-stage" ref={stageRef}>
        {photoCards.map((card, index) => {
          const stackPosition = (index - activeIndex + photoCards.length) % photoCards.length;
          const transform = stackPositions[stackPosition];
          const isActive = index === activeIndex;

          return (
            <button
              type="button"
              className="photo-card"
              key={card.src}
              onClick={() => setActiveIndex(index)}
              style={{
                zIndex: photoCards.length - stackPosition,
                transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(${transform.rotate}deg) scale(${transform.scale})`
              }}
              aria-label={`Bring ${card.topic} photo to front`}
              aria-pressed={isActive}
            >
              <span className="photo-card-image">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                  priority={index === 0}
                  quality={72}
                />
              </span>
              {isActive ? (
                <span className="photo-card-caption" aria-live="polite">
                  {card.caption}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
