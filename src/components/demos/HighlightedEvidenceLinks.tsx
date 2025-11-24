const lightStates = [
  {
    label: "Idle",
    highlightClass:
      "bg-primary/10 text-foreground shadow-none",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Hover",
    highlightClass:
      "bg-primary/15 text-foreground underline underline-offset-2 decoration-primary/60",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Pressed",
    highlightClass:
      "bg-primary/20 text-foreground shadow-inner",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Focus",
    highlightClass:
      "bg-white text-foreground ring-2 ring-primary/40 ring-offset-2 ring-offset-white",
    textClass: "text-foreground",
    underline: "",
  },
];

const darkStates = [
  {
    label: "Idle",
    highlightClass:
      "bg-primary/20 text-primary-foreground",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Hover",
    highlightClass:
      "bg-primary/30 text-primary-foreground underline underline-offset-2 decoration-primary/60",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Pressed",
    highlightClass:
      "bg-primary/40 text-primary-foreground shadow-inner shadow-primary/20",
    textClass: "text-foreground",
    underline: "",
  },
  {
    label: "Focus",
    highlightClass:
      "bg-primary/25 text-primary-foreground ring-2 ring-primary/60 ring-offset-2 ring-offset-card",
    textClass: "text-foreground",
    underline: "",
  },
];

const highlightedText = "referencing the quarterly trust report";

const StateCard = ({
  mode,
  label,
  highlightClass,
  textClass,
}: {
  mode: "light" | "dark";
  label: string;
  highlightClass: string;
  textClass: string;
}) => (
  <div
    className={`rounded-xl border ${
      mode === "light"
        ? "bg-card border-border"
        : "bg-card border-border"
    } p-4 space-y-3`}
  >
    <div
      className={`text-xs font-medium ${
        mode === "light" ? "text-muted-foreground" : "text-muted-foreground"
      }`}
    >
      {label}
    </div>
    <p
      className={`text-sm leading-relaxed ${
        mode === "light" ? textClass : textClass
      }`}
    >
      The model confirmed that{" "}
      <span
        className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium transition-all duration-150 ${highlightClass}`}
      >
        {highlightedText}
      </span>{" "}
      to highlight AI-backed evidence.
    </p>
  </div>
);

export function HighlightedEvidenceLinks() {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-foreground mb-4">Component Preview</h4>
        <div className="bg-muted border border-border rounded-lg p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground">
                Inline Highlight · Light mode
              </div>
              {lightStates.map((state) => (
                <StateCard
                  key={`light-${state.label}`}
                  mode="light"
                  label={state.label}
                  highlightClass={state.highlightClass}
                  textClass={state.textClass}
                />
              ))}
            </div>
            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground">
                Inline Highlight · Dark mode
              </div>
              {darkStates.map((state) => (
                <StateCard
                  key={`dark-${state.label}`}
                  mode="dark"
                  label={state.label}
                  highlightClass={state.highlightClass}
                  textClass={state.textClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

