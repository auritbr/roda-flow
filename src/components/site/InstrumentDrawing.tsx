type InstrumentName = "Berimbau" | "Atabaque" | "Pandeiro" | "Agogô" | "Reco-reco" | "Caxixi";

/** Browser-safe line drawings of the actual instruments used in the roda. */
export function InstrumentDrawing({ name }: { name: InstrumentName }) {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {name === "Berimbau" && <><path d="M24 5 Q53 31 24 59 M24 5 V59" /><ellipse cx="30" cy="43" rx="12" ry="10" /><path d="M10 16 L18 52 M45 47 l9-12" /></>}
      {name === "Atabaque" && <><ellipse cx="32" cy="13" rx="17" ry="6" /><path d="M15 13 L23 54 Q32 60 41 54 L49 13 M20 22 H44 M22 45 H42 M22 17 L27 55 M32 19 V57 M42 17 L37 55" /></>}
      {name === "Pandeiro" && <><ellipse cx="32" cy="29" rx="24" ry="20" /><path d="M8 29 V36 C8 62 56 62 56 36 V29 M15 43 v7 M30 49 v7 M46 43 v7" /><ellipse cx="15" cy="43" rx="4" ry="2" /><ellipse cx="32" cy="49" rx="4" ry="2" /><ellipse cx="49" cy="43" rx="4" ry="2" /></>}
      {name === "Agogô" && <><path d="M20 18 Q30 7 37 18 M20 18 L11 43 Q19 50 27 43 L25 22 M37 18 L34 35 Q42 42 51 35 L43 18 M23 22 L38 21 M12 52 L52 12" /><ellipse cx="19" cy="43" rx="8" ry="3" /><ellipse cx="43" cy="35" rx="8" ry="3" /></>}
      {name === "Reco-reco" && <><path d="M12 21 Q31 13 49 21 V42 Q31 50 12 42 Z M17 23 V41 M23 22 V42 M29 21 V43 M35 21 V43 M41 22 V42 M47 23 V41 M15 57 L54 9" /></>}
      {name === "Caxixi" && <><path d="M23 19 V13 C23 3 41 3 41 13 V19 M23 19 Q13 28 12 50 Q32 61 52 50 Q51 28 41 19 Z M12 50 Q32 42 52 50 M22 24 L18 50 M29 21 L27 47 M36 21 L37 47 M42 24 L46 50 M18 30 H46 M15 37 H49 M13 44 H51" /></>}
    </svg>
  );
}