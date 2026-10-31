import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { galleriesForYear, galleryYears, groupEventGalleries } from "./gallery-data";
import { archiveCategories, demonstrationDocuments, demonstrationText, publicDocuments, supportNetwork } from "./partnership-content";

describe("Gallery year selection", () => {
  test("selecting 2026 excludes all other years", () => {
    const galleries = galleriesForYear("2026");
    assert.equal(galleries.length, 2);
    assert.ok(galleries.every((g) => g.year === "2026"));
    assert.deepEqual(galleryYears, ["2026", "2025", "2024", "2023"]);
  });
  test("photos of the same event stay under one gallery title", () => {
    const photo = { year: "2026", title: "Evento", date: "", image: "a.jpg", alt: "A", caption: "", credit: "", category: "" };
    assert.equal(groupEventGalleries([photo, { ...photo, image: "b.jpg" }])[0].images.length, 2);
  });
});
describe("Confirmed partnerships and documents", () => {
  test("no documents are fabricated when none have been supplied", () => assert.equal(publicDocuments.length, 0));
  test("support includes only the five supplied institutions or mechanisms", () => {
    assert.deepEqual(supportNetwork.map((p) => p.title), ["Sistema de Incentivo Estadual à Cultura", "Equatorial", "Fundo da Infância e Adolescência", "Prefeitura de José de Freitas", "Instituições parceiras"]);
  });
  test("official logos remain unset until supplied", () => assert.ok(supportNetwork.every((p) => p.logo === undefined)));
  test("each archive category has one explicitly demonstrative example, not an official document", () => {
    assert.equal(demonstrationDocuments.length, 6);
    for (const category of archiveCategories) {
      const examples = demonstrationDocuments.filter((d) => d.category === category.id);
      assert.equal(examples.length, 1);
      assert.equal(examples[0].demonstration, true);
      assert.ok(demonstrationText(examples[0]).includes("Não é um documento oficial da Motirô"));
    }
  });
  test("only the four examples with a supplied year show 2026", () => {
    assert.deepEqual(demonstrationDocuments.map((d) => d.year), ["2026", "2026", "2026", "2026", undefined, undefined]);
  });
});