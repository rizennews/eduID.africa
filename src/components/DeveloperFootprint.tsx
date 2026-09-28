"use client";

import * as React from "react";

export function DeveloperFootprint() {
  React.useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).__PADMORE_ANING_FOOTPRINT__) {
      (window as any).__PADMORE_ANING_FOOTPRINT__ = true;

      const dottedBanner = [
        "·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·",
        "  •••    ••   •••   •   •   ••   •••   ••••     ••   •   •  •••  •   •   •••• ",
        "  •  •  •  •  •  •  •• ••  •  •  •  •  •       •  •  ••  •   •   ••  •  •     ",
        "  •••   ••••  •  •  • • •  •  •  •••   •••     ••••  • • •   •   • • •  • ••• ",
        "  •     •  •  •  •  •   •  •  •  • •   •       •  •  •  ••   •   •  ••  •   • ",
        "  •     •  •  •••   •   •   ••   •  •  ••••    •  •  •   •  •••  •   •   •••• ",
        "·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·",
      ].join("\n");

      console.log(
        `%c${dottedBanner}`,
        "color: #64748B; font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 900; line-height: 1.25;"
      );

      console.log(
        "%c Crafted by %c Padmore Aning %c https://padmoreaning.com/ ",
        "background: #1E293B; color: #94A3B8; font-weight: 600; font-size: 11px; padding: 3px 6px; border-radius: 4px 0 0 4px;",
        "background: #475569; color: #F8FAFC; font-weight: 700; font-size: 11px; padding: 3px 8px;",
        "background: #334155; color: #E2E8F0; font-weight: 600; font-size: 11px; padding: 3px 8px; border-radius: 0 4px 4px 0;"
      );

      console.log(
        "%c\n" +
          "  Portfolio:  https://padmoreaning.com/\n" +
          "  Contact:    hello@padmoreaning.com\n\n" +
          "  [ATTRIBUTION NOTE]\n" +
          "  Padmore Aning crafted and engineered this website platform.\n" +
          "  The eduID.africa identity federation network itself is governed\n" +
          "  and operated by WACREN, UbuntuNet Alliance, and ASREN.\n",
        "color: #475569; font-family: monospace; font-size: 11px; line-height: 1.6;"
      );
    }
  }, []);

  return null;
}

