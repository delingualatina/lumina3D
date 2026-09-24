export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1054376420476852";

export const FB_TEST_EVENT_CODE =
  process.env.NEXT_PUBLIC_META_TEST_EVENT_CODE || "TEST55323";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Trigger PageView event
 */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    const params: Record<string, unknown> = {};
    if (FB_TEST_EVENT_CODE) {
      params.test_event_code = FB_TEST_EVENT_CODE;
    }
    window.fbq("track", "PageView", params);
  }
};

/**
 * Trigger Custom or Standard Event (e.g. Contact, Lead, ViewContent)
 */
export const trackEvent = (
  name: string,
  options: Record<string, unknown> = {}
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    const payload = {
      ...options,
      ...(FB_TEST_EVENT_CODE ? { test_event_code: FB_TEST_EVENT_CODE } : {}),
    };
    window.fbq("track", name, payload);
  }
};
