import {
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
  isDateAfterToday,
  isEmailWellFormed,
} from "@/common/validations";

import {
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  INVALID_EMAIL_MESSAGE,
} from "@/common/validations/validation.const";
import { FieldValidationResult } from "@/common/validations/validation.model";

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
