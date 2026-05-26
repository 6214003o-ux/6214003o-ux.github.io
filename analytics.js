const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

function isGaConfigured() {
  return GA_MEASUREMENT_ID.startsWith("G-") && !GA_MEASUREMENT_ID.includes("XXXXXXXXXX");
}

function loadGoogleAnalytics() {
  if (!isGaConfigured()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function trackClick(eventName, destinationUrl) {
  if (!isGaConfigured() || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    event_category: "outbound_click",
    link_url: destinationUrl,
    transport_type: "beacon",
  });
}

function bindAnalyticsEvents() {
  document.querySelectorAll("[data-analytics-event]").forEach((element) => {
    element.addEventListener("click", () => {
      trackClick(element.dataset.analyticsEvent, element.href || window.location.href);
    });
  });
}

loadGoogleAnalytics();
bindAnalyticsEvents();
