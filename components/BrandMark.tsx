import Image from "next/image";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "brand-mark compact" : "brand-mark"}>
      <span className="brand-logo-frame" aria-hidden="true">
        <Image
          src="/brand/madre-frescas-logo.png"
          alt=""
          width={compact ? 58 : 118}
          height={compact ? 58 : 118}
          priority
        />
      </span>
      <div>
        <span>Madre Frescas</span>
        {!compact && <small>Slow bread. Fresh drinks.</small>}
      </div>
    </div>
  );
}
