import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { activities, activitiesForPage, activityPageCount, ACTIVITIES_PER_PAGE } from "./activities";

describe("Projects overview pagination", () => {
  test("at most three activities per page and three pages", () => {
    assert.equal(ACTIVITIES_PER_PAGE, 3);
    assert.equal(activityPageCount, 3);
    for (let page = 1; page <= 3; page++) assert.ok(activitiesForPage(page).length <= 3);
  });
  test("page one contains capoeira, theatre and reading only", () => {
    assert.deepEqual(activitiesForPage(1).map(a => a.title), ["Capoeira Motirô", "Teatro Motirô", "Oficina da Leitura"]);
  });
  test("page two contains cinema, dance and handball only", () => {
    assert.deepEqual(activitiesForPage(2).map(a => a.title), ["Cine Motirô", "Dança, ritmo e tradição", "Handebol Motirô"]);
  });
  test("page three contains the independent inclusion initiative only", () => {
    const page = activitiesForPage(3);
    assert.deepEqual(page.map(a => a.title), ["Brincando e Crescendo Juntos"]);
    assert.equal(page[0].independent, true);
  });
  test("out of range pages render no activities", () => {
    assert.deepEqual(activitiesForPage(0), []);
    assert.deepEqual(activitiesForPage(4), []);
  });
  test("the overarching program and transversal training are outside the activity list", () => {
    assert.equal(activities.length, 7);
    assert.equal(activities.some(a => a.title === "Além da Ginga" || a.title === "Palestras e encontros formativos"), false);
  });
});