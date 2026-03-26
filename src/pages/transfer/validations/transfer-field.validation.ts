import {
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEmailWellFormed,
} from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "Debe informar un IBAN válido";
export const INVALID_AMOUNT_MESSAGE = "El importe debe ser mayor que 0";
export const INVALID_REAL_DATE_TRANSFER_MESSAGE =
  "La fecha de ejecución debe ser posterior a hoy";
export const INVALID_EMAIL_MESSAGE = "El email no está bien formado";

const buildValidationFailedResult = (
  errorMessage: string,
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

const buildValidationSuccededResult = (): FieldValidationResult => ({
  succeeded: true,
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

export const validateAccountIdField = (
  value: string,
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSuccededResult();

export const validateRealDataTransferField = (
  value?: Date,
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateEmailField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationSuccededResult();
  }

  if (!isEmailWellFormed(value)) {
    return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSuccededResult();
};
