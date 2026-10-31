import { describe, expect, test } from "bun:test";
import { institutionalFacts } from "./content";

describe("Confirmed Motirô institutional facts", () => {
  test("origin is approximately 2000", () => {
    expect(institutionalFacts.approximateStartYear).toBe(2000);
  });
  test("Pontão certification dates from 2017", () => {
    expect(institutionalFacts.certificationYear).toBe(2017);
  });
  test("certificate has no fabricated link", () => {
    expect(institutionalFacts.certificateUrl).toBeNull();
  });
  test("loan duration is not confirmed as 20 years", () => {
    expect(institutionalFacts.confirmedLoanDurationYears).toBeNull();
  });
});