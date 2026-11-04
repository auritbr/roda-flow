import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { activities, futureIndependentInitiatives, otherInitiatives, pageCount, pageOf, programActivities, programSlugs } from "./activities";

describe("Projects hierarchy", () => {
  test("Além da Ginga groups exactly the five member projects", () => {
    assert.deepEqual(programActivities.map(a => a.title), ["Capoeira Motirô", "Teatro Motirô", "Oficina da Leitura", "Cine Motirô", "Dança, ritmo e tradição"]);
    assert.deepEqual(programSlugs, ["capoeira-motiro", "teatro-motiro", "oficina-da-leitura", "cine-motiro", "danca"]);
  });
  test("handball and inclusion are separate, outside the program", () => {
    assert.deepEqual(otherInitiatives.map(a => a.title), ["Handebol Motirô", "Brincando e Crescendo Juntos"]);
    assert.ok(otherInitiatives.every(a => !a.program));
    assert.equal(otherInitiatives.find(a => a.key === "inclusion")?.independent, true);
  });
  test("no amateur football content is invented yet", () => {
    assert.equal(futureIndependentInitiatives.length, 0);
  });
  test("program list paginates three per page", () => {
    assert.equal(pageCount(programActivities), 2);
    assert.equal(pageOf(programActivities, 1).length, 3);
    assert.deepEqual(pageOf(programActivities, 3), []);
  });
  test("the overarching program and sports page are not listed as activities", () => {
    assert.ok(!activities.some(a => a.title === "Além da Ginga" || a.slug === "formacao-esportiva"));
  });
});
