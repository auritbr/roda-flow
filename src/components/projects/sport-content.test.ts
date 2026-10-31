import { test } from "node:test";
import { strict as assert } from "node:assert";
import { officialSportResults, competitionScopes } from "./sport-content";
test("no sporting results are published before official confirmation", () => {
  assert.deepEqual(officialSportResults, []);
});
test("competition reach uses only the four supplied scopes", () => {
  assert.deepEqual(competitionScopes, ["Local", "Estadual", "Nacional", "Internacional"]);
});