/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // if (isProduction) {
    //   reportPageView(pathname);
    // }
  }, [pathname]);

  return (
    <>
      <VercelAnalytics />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
};
