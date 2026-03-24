import {
  validateIbanField,
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateIbanField specs", () => {
    it("should return false when iban is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateIbanField(value);

      // Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
    });
    it("should return false when iban is not well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0003 1332";

      // Act
      const result = validateIbanField(value);

      // Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errorMessage).toBe(INVALID_IBAN_MESSAGE);
    });
  });
});
