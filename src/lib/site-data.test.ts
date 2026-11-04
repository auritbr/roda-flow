import { test } from "node:test";
import assert from "node:assert/strict";
import { SITE } from "./site-data";

test("official contact data", () => {
  assert.equal(SITE.email, "acermotiro@gmail.com");
  assert.equal(SITE.phone, "(86) 99449-0190");
  assert.equal(SITE.phoneHref, "tel:+5586994490190");
  assert.ok(SITE.whatsappUrl.startsWith("https://wa.me/5586994490190"));
  assert.equal(SITE.address, "Rua Robert Freitas Júnior, 1214, Centro, José de Freitas-PI, CEP 64110-000");
  assert.equal(SITE.social.instagram, "https://www.instagram.com/motiro.cult.esp/");
  assert.equal(SITE.social.tiktok, "https://www.tiktok.com/@motiro.cult.esp");
});
