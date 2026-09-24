export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1054376420476852";

export const FB_TEST_EVENT_CODE =
  process.env.NEXT_PUBLIC_META_TEST_EVENT_CODE || "TEST55323";

interface FBQFunction {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq?: FBQFunction;
    _fbq?: unknown;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Trigger PageView event
 */
export const pageview = () => {
  if (typeof window === "undefined") return;

  const params: Record<string, unknown> = {};
  if (FB_TEST_EVENT_CODE) {
    params.test_event_code = FB_TEST_EVENT_CODE;
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView", params);
  }

  console.log(`[Meta Pixel ${FB_PIXEL_ID}] PageView sent:`, params);
};

/**
 * Trigger Custom or Standard Event (e.g. Contact, Lead, ViewContent)
 */
export const trackEvent = (
  name: string,
  options: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  const payload: Record<string, unknown> = {
    ...options,
  };

  if (FB_TEST_EVENT_CODE) {
    payload.test_event_code = FB_TEST_EVENT_CODE;
  }

  // 1. Call standard Meta Pixel fbq function
  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", name, payload);
    } else {
      const fbqStub: FBQFunction = function (...args: unknown[]) {
        if (fbqStub.callMethod) {
          fbqStub.callMethod.apply(fbqStub, args);
        } else if (fbqStub.queue) {
          fbqStub.queue.push(args);
        }
      };
      fbqStub.queue = [];
      fbqStub.loaded = true;
      fbqStub.version = "2.0";
      window.fbq = fbqStub;
      window._fbq = fbqStub;
      window.fbq("track", name, payload);
    }
  } catch (err) {
    console.warn("Meta Pixel fbq error:", err);
  }

  // 2. Direct beacon fallback to ensure delivery even if immediate tab navigation occurs
  try {
    const url = new URL("https://www.facebook.com/tr/");
    url.searchParams.set("id", FB_PIXEL_ID);
    url.searchParams.set("ev", name);
    url.searchParams.set("dl", window.location.href);
    if (FB_TEST_EVENT_CODE) {
      url.searchParams.set("cd[test_event_code]", FB_TEST_EVENT_CODE);
    }
    Object.entries(options).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        url.searchParams.set(`cd[${k}]`, String(v));
      }
    });

    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon(url.toString());
    }
  } catch (e) {
    // Non-blocking fallback
  }

  console.log(`[Meta Pixel ${FB_PIXEL_ID}] Event tracked:`, name, payload);
};
