import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-[#F5F2EA]" : "text-[#171717]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base font-normal leading-relaxed md:text-lg ${
            isDark ? "text-[#F5F2EA]/70" : "text-[#171717]/70"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
