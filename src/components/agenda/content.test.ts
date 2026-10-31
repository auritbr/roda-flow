import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { calendarDays, demonstrationEvents, filterEvents, officialEvents, upcomingEvents, weekDays, movePeriod, defaultPeriodMode } from "./content";
describe("Agenda", () => {
  test("week is the default period", () => { assert.equal(defaultPeriodMode, "week"); });
  test("weekly agenda has exactly seven days Sunday through Saturday across months", () => {
    assert.deepEqual(weekDays("2026-11-01"), ["2026-11-01", "2026-11-02", "2026-11-03", "2026-11-04", "2026-11-05", "2026-11-06", "2026-11-07"]);
    assert.deepEqual(weekDays("2026-12-31"), ["2026-12-27", "2026-12-28", "2026-12-29", "2026-12-30", "2026-12-31", "2027-01-01", "2027-01-02"]);
  });
  test("weekly arrows advance exactly one week", () => {
    assert.equal(movePeriod("2026-10-31", "week", 1), "2026-11-07");
    assert.equal(movePeriod("2026-10-31", "week", -1), "2026-10-24");
  });
  test("monthly arrows advance one calendar month", () => {
    assert.equal(movePeriod("2026-10-31", "month", 1), "2026-11-30");
    assert.equal(movePeriod("2026-10-31", "month", -1), "2026-09-30");
  });
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