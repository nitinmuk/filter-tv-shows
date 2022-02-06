import { drmEnabledShowSchema } from "../show.schema";
import * as data from "./data";

describe("showSchema", () => {
  it("must validate valid payload without error", async () => {
    // Given
    const validPayload = data.validPayload;

    // When
    const { error } = drmEnabledShowSchema.validate(validPayload);

    // Then
    expect(error).toBeUndefined();
  });

  it("must validate invalid payload with error", async () => {
    // Given
    expect.assertions(4);
    for (const invalidPayload in data.invalidPayloads) {
      // When
      const { error } = drmEnabledShowSchema.validate(invalidPayload);

      // Then
      expect(error).toBeDefined();
    }
  });
});
