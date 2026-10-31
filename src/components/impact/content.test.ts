import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { impactFigures } from "./content";
describe("Motirô impact figures and their distinct scopes", () => {
  test("approximately 800 is historical reach, not an annual count", () => {
    assert.equal(impactFigures[0].value, 800);
    assert.equal(impactFigures[0].approximate, true);
    assert.equal(impactFigures[0].scope, "historical");
    assert.equal(impactFigures[0].year, undefined);
  });
  test("more than 150 is the Além da Ginga record for 2026", () => {
    assert.equal(impactFigures[1].value, 150);
    assert.equal(impactFigures[1].minimumExclusive, true);
    assert.equal(impactFigures[1].year, 2026);
    assert.equal(impactFigures[1].scope, "record-2026");
  });
  test("approximately 190 belongs to specific functioning periods, not an annual record", () => {
    assert.equal(impactFigures[2].value, 190);
    assert.equal(impactFigures[2].approximate, true);
    assert.equal(impactFigures[2].scope, "specific-periods");
    assert.equal(impactFigures[2].year, undefined);
  });
});