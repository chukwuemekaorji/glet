import Image from "next/image";
import gletLogo from "@/public/images/glet-logo-transparent.png";

interface LogoProps {
  /** Height in px. Width scales automatically via next/image's intrinsic ratio. */
  height?: number;
}

// Background-removed version of the client-supplied logo (see
// public/images/CREDITS.md) — sits directly on any background color, light
// or dark, without a white box behind it.
export default function Logo({ height = 56 }: LogoProps) {
  return (
    <Image
      src={gletLogo}
      alt="The GLET Initiative logo"
      height={height}
      style={{ width: "auto", height, display: "block" }}
      priority
    />
  );
}
