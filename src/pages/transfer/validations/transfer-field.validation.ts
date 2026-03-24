import { isStringValueInformed, isValidIban } from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "Debe informar un IBAN válido";

const buildValidationFailedResult = (
  errorMessage: string,
): FieldValidationResult => ({
  succeded: false,
  errorMessage,
});

const buildValidationSuccededResult = (): FieldValidationResult => ({
  succeded: true,
});

export const validateIbanField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSuccededResult();
};
