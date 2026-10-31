import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { calendarDays, demonstrationEvents, filterEvents, officialEvents, upcomingEvents } from "./content";
describe("Agenda", () => {
  test("monthly grid starts Sunday and contains every October 2026 date", () => {
    const days = calendarDays("2026-10-01");
    assert.equal(days[0], "2026-09-27"); assert.equal(days.at(-1), "2026-10-31");
    assert.equal(days.length % 7, 0); assert.equal(days.filter(d => d.startsWith("2026-10")).length, 31);
  });
  test("category filters show only the corresponding events in the selected month", () => {
    assert.deepEqual(filterEvents(demonstrationEvents, "Cinema", "2026-11-01").map(e => e.id), ["demo-3"]);
    assert.equal(filterEvents(demonstrationEvents, "Cinema", "2026-10-01").length, 0);
  });
  test("upcoming preview contains at most three events in chronological order", () => {
    assert.deepEqual(upcomingEvents(demonstrationEvents, "2026-11-01").map(e => e.id), ["demo-5", "demo-4", "demo-2"]);
    assert.equal(upcomingEvents(demonstrationEvents, "2027-01-01").length, 0);
  });
  test("examples never become confirmed events or invent locations", () => {
    assert.deepEqual(officialEvents, []);
    assert.ok(demonstrationEvents.every(e => e.demonstration && e.location === undefined));
  });
});