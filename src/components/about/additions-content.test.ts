import { test } from "node:test";
import { strict as assert } from "node:assert";
import { leadershipFacts, headquartersAddress, headquartersPhotos, directionsUrl } from "./additions-content";
test("leadership held two FECAPI presidential terms", () => {
  assert.equal(leadershipFacts.fecapiTerms, 2);
});
test("national representation has the confirmed institutional scope", () => {
  assert.equal(leadershipFacts.nationalRepresentation, "Setorial de Patrimônio Imaterial do Conselho Nacional de Política Cultural");
});
test("headquarters uses the confirmed address without invented coordinates", () => {
  assert.deepEqual(headquartersAddress, { street: "Rua Robert Freitas Júnior, 1214", neighborhood: "Centro", city: "José de Freitas-PI", postcode: "64110-000" });
  assert.equal(new URL(directionsUrl).searchParams.get("query"), "Rua Robert Freitas Júnior, 1214, Centro, José de Freitas-PI, CEP 64110-000");
});
test("no different building is substituted for official headquarters photographs", () => {
  assert.deepEqual(headquartersPhotos, []);
});