import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import TimeZoneMap from "@/components/time-zone-map";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          World map select
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is a sandbox project to test out the the WorldMapSelect component
        </p>
        <TimeZoneMap />
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants()}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
