import { test } from "node:test";
import { strict as assert } from "node:assert";
import { authorizedPhotos, galleryIndex, initiativeGalleries } from "./initiative-gallery";

test("no reference photos are presented as institutional records", () => {
  assert.deepEqual(initiativeGalleries, {});
});
test("unauthorized photos including identifiable children cannot appear", () => {
  assert.deepEqual(authorizedPhotos([
    { src: "unauthorized.jpg", alt: "Criança", authorized: false },
    { src: "authorized.jpg", alt: "Registro autorizado", authorized: true },
  ]).map(photo => photo.src), ["authorized.jpg"]);
});
test("gallery navigation wraps in both directions", () => {
  assert.equal(galleryIndex(0, -1, 3), 2);
  assert.equal(galleryIndex(2, 1, 3), 0);
  assert.equal(galleryIndex(0, 1, 0), 0);
});