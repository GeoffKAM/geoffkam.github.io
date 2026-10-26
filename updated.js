// Footer "Last updated": the time GitHub Pages published this page, in St. Louis time
const updated = document.getElementById("updated");
const published = new Date(document.lastModified);
if (updated && !isNaN(published)) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      month: "long", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", timeZoneName: "short",
    }).formatToParts(published).map((p) => [p.type, p.value])
  );
  updated.textContent =
    `${parts.month} ${parts.day}, ${parts.year}, ${parts.hour}:${parts.minute} ${parts.dayPeriod} ${parts.timeZoneName}`;
}
