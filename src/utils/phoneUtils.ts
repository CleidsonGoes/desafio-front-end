// src/utils/phoneUtils.ts
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const formatPhoneNumber = (phoneNumber: string): string => {
  // Adiciona o código do país se não estiver presente
  const formattedNumber = `+${phoneNumber}`;
  const parsedNumber = parsePhoneNumberFromString(formattedNumber);

  return parsedNumber ? parsedNumber.formatInternational() : phoneNumber;
};
