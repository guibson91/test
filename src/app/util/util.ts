import { AbstractControl } from '@angular/forms';
import { cnpj, cpf } from 'cpf-cnpj-validator';

/**
 * Remover caracteres especiais de uma string
 */
export const removeSymbol = (doc: string) =>
  doc
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace('-', '')
    .replace('/', '')
    .replace('(', '')
    .replace(')', '');

export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

export const getMimeType = (name: string): string => {
  if (name.indexOf('pdf') >= 0) {
    return 'application/pdf';
  } else if (name.indexOf('png') >= 0) {
    return 'image/png';
  } else if (name.indexOf('jpg') >= 0) {
    return 'image/jpg';
  } else if (name.indexOf('jpeg') >= 0) {
    return 'image/jpeg';
  } else if (name.indexOf('mp4') >= 0) {
    return 'video/mp4';
  } else if (name.indexOf('avi') >= 0) {
    return 'video/avi';
  }
};

/**
 * Convert date (dd/mm/yyyy) to ISO DATE (yyyy-mm-dd)
 */
export const convertDate = (databaseDate: string): string => {
  const [day, month, year] = databaseDate.split('/');
  return [year, month, day].join('-');
};

export const validateCpfCnpj = (
  control: AbstractControl
): { [key: string]: any } | null => {
  const doc = control.value;
  let error = false;
  if (!doc) {
    return { invalidCpfCnpj: true };
  } else if (doc.length <= 14) {
    error = cpf.isValid(doc) ? false : true;
  } else {
    error = cnpj.isValid(doc) ? false : true;
  }
  if (error) {
    return { invalidCpfCnpj: true };
  }
  return null;
};

/**
 * Separar array de nomes por vírgula
 */
export const getItemsNames = (namesArray: string[]): string => {
  if (!namesArray || namesArray.length === 0) {
    return '';
  }
  if (namesArray.length === 1) {
    return namesArray[0];
  }
  let namesString = '';
  const lastIndex = namesArray.length - 1;
  namesArray.forEach((name, index) => {
    namesString += name;
    if (index !== lastIndex) {
      namesString += ', ';
    }
  });
  return namesString;
};
