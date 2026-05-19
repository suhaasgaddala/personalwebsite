export const projects = [
  {
    name: "Prospect-Terminal",
    stack:
      "Next.js, TypeScript, Tailwind CSS, FastAPI, Python, MongoDB, SEC EDGAR API, Finnhub",
    category: "Full Stack / Market Intelligence",
    year: "2026",
    href: "#",
    description:
      "A full-stack market intelligence platform fusing live quotes, SEC filings, financial news, macro context, and X/Reddit sentiment into explainable stock conviction scores and cross-sectional rankings across 30+ liquid equities.",
    highlights: [
      "Combined 5+ live data streams",
      "Built explainable conviction scoring",
      "Created benchmark-aware backtesting engine",
      "Supported trading-day signal generation, SEC filing carry-forward logic, and execution-aware strategy evaluation",
      "Evaluated 100+ daily observations per stock"
    ]
  },
  {
    name: "OrbitQueue",
    stack: "C++, CMake, Lock-Free Data Structures, Concurrency",
    category: "Systems / Concurrency",
    year: "2025",
    href: "#",
    description:
      "A high-performance lock-free queue system supporting SPSC and SPMC communication patterns for low-latency concurrent message passing.",
    highlights: [
      "Benchmarked against mutex-based blocking queues",
      "Benchmarked against boost::lockfree::queue",
      "Reduced contention through atomic synchronization and per-block versioning"
    ]
  },
  {
    name: "AutoHDR Lens Correction ML Model",
    stack: "Python, PyTorch, Computer Vision, Geometric Deep Learning, React, Tailwind",
    category: "Machine Learning / Computer Vision",
    year: "2025",
    href: "#",
    description:
      "A geometry-first lens distortion correction system that learns a warp grid from a parametric lens model and bounded residual flow.",
    highlights: [
      "Maximized edge similarity and line straightness",
      "Avoided multi-pass resampling blur",
      "Built evaluation and inference stack",
      "Added proxy metrics, hard-fail safety checks, full-resolution warping, and submission QA",
      "Designed for a 1,000-image benchmark with geometry-dominant scoring"
    ]
  }
];
