import { announcements } from "@/content/announcements";
import { site } from "@/lib/site";

export function AnnouncementBar() {
  const items = [...announcements, ...announcements];
  return (
    <a
      href={site.resourceLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-10 overflow-hidden bg-ink text-cream"
      aria-label="Latest updates from the Income Tax Department"
    >
      <div className="flex h-full w-max animate-marquee-slow items-center gap-[60px] whitespace-nowrap group-hover:[animation-play-state:paused]">
        {items.map((text, i) => (
          <p key={i} className="text-sm font-light" aria-hidden={i >= announcements.length}>
            {text}
          </p>
        ))}
      </div>
    </a>
  );
}
