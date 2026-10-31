import { test } from "node:test";
import { strict as assert } from "node:assert";
import { memoryCategories, memoryExamples, officialMemoryDocuments, memoryExampleText } from "./content";
test("each of the six memory categories contains three explicitly demonstrative examples", () => {
  assert.equal(memoryCategories.length, 6);
  for (const category of memoryCategories) {
    const items = memoryExamples.filter(item => item.category === category.id);
    assert.equal(items.length, 3);
    assert.ok(items.every(item => item.demonstration === true));
  }
});
test("no institutional document or date is invented for memory demonstrations", () => {
  assert.deepEqual(officialMemoryDocuments, []);
  assert.ok(memoryExamples.every(item => !("year" in item)));
  for (const example of memoryExamples) assert.ok(memoryExampleText(example).includes("CONTEÚDO DEMONSTRATIVO"));
});