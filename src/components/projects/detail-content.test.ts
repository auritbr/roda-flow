import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { initiatives, initiativeForSlug, programReach, legacyProjectDestinations } from "./detail-content";
import { activities } from "./activities";
import { capoeiraTags } from "./overview-content";

describe("Institutional initiative rules", () => {
  test("the eight institutional initiatives have their own canonical addresses", () => {
    assert.deepEqual(initiatives.map(item => item.slug), ["alem-da-ginga", "capoeira-motiro", "teatro-motiro", "oficina-da-leitura", "cine-motiro", "danca", "handebol-motiro", "brincando-e-crescendo-juntos"]);
    for (const item of activities) assert.ok(item.slug && initiativeForSlug(item.slug));
  });
  test("inclusion is independent and specifically serves autistic children", () => {
    const item = initiativeForSlug("brincando-e-crescendo-juntos");
    assert.equal(item?.independent, true);
    assert.deepEqual(item?.facts.find(fact => fact.label === "Público"), { label: "Público", text: "Crianças autistas" });
    assert.equal(item?.facts.some(fact => fact.label === "Integra"), false);
  });
  test("reading does not have an unconfirmed age group", () => {
    assert.equal(initiativeForSlug("oficina-da-leitura")?.facts.some(fact => fact.label === "Público"), false);
  });
  test("cinema access is free", () => {
    assert.equal(initiativeForSlug("cine-motiro")?.facts.find(fact => fact.label === "Acesso")?.text, "Exibições gratuitas");
  });
  test("handball audience remains conditional on team-organized age groups", () => {
    assert.equal(initiativeForSlug("handebol-motiro")?.audience, "Crianças, adolescentes e jovens, conforme as faixas etárias e as categorias organizadas pela equipe responsável.");
  });
  test("no initiative declares an unconfirmed current status", () => {
    for (const item of initiatives) assert.equal(item.facts.some(fact => fact.label === "Situação"), false);
  });
  test("four nuclei are scoped to 2026", () => {
    assert.equal(programReach[0].count, 4);
    assert.equal(programReach[0].scope, "2026");
  });
  test("more than 150 program participants are scoped to 2026", () => {
    assert.equal(programReach[1].count, 150);
    assert.equal(programReach[1].scope, "2026");
  });
  test("approximately 190 participants refer to specific operating periods", () => {
    assert.equal(programReach[2].count, 190);
    assert.equal(programReach[2].scope, "specific-periods");
  });
  test("legacy capoeira address points to the institutional project", () => {
    assert.equal(legacyProjectDestinations["capoeira-para-todos"], "capoeira-motiro");
  });
  test("capoeira tags are limited to five confirmed themes", () => {
    assert.deepEqual(capoeiraTags, ["Capoeira", "Musicalidade", "Rodas", "Formação esportiva", "Cultura afro-brasileira"]);
  });
});