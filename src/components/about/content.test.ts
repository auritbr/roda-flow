import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { institutionalFacts } from "./content";

describe("Confirmed Motirô institutional facts", () => {
  test("origin is approximately 2000", () => {
    assert.equal(institutionalFacts.approximateStartYear, 2000);
  });
  test("Pontão certification dates from 2017", () => {
    assert.equal(institutionalFacts.certificationYear, 2017);
  });
  test("certificate has no fabricated link", () => {
    assert.equal(institutionalFacts.certificateUrl, null);
  });
  test("loan duration is not confirmed as 20 years", () => {
    assert.equal(institutionalFacts.confirmedLoanDurationYears, null);
  });
});