import { Timestamp } from 'firebase/firestore';

/**
 * Estrutura de endereço da API dos Correios
 */
export interface CorreiosResponse {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  erro?: string;
}

/**
 * Estrutura de endereço do sistema
 */
export interface AddressType {
  cep?: string;
  street?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
  streetNumber?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  summary?: string;
}

/**
 * Transcrição do endereço da estrutura de dados dos correios para estrutura do sistema
 */
export const addressDTO = (
  correiosResponse: CorreiosResponse
): AddressType => ({
  street: correiosResponse.logradouro ? correiosResponse.logradouro : '',
  district: correiosResponse.bairro ? correiosResponse.bairro : '',
  city: correiosResponse.localidade ? correiosResponse.localidade : '',
  state: correiosResponse.uf ? correiosResponse.uf : '',
  complement: '',
  streetNumber: '',
});

/**
 * Criado alguns auxiliares para facilitar exibição de layouts de endereço
 * Utilizado padrão internacional
 * line1: Rua e número
 * line2: Complemento
 * line3: Cidade, estado e CEP
 * summary: Resumo mais completo em uma única linha
 */
export const improveAddress = (address: AddressType): AddressType => {
  const currentAdr: AddressType = address;
  return {
    ...address,
    line1: `${currentAdr.street}, ${currentAdr.streetNumber}`,
    line2: `${currentAdr.complement}`,
    line3: `${currentAdr.city} - ${currentAdr.state}, CEP ${currentAdr.cep}`,
    summary: `${currentAdr.street}, ${currentAdr.streetNumber}, ${currentAdr.city} - ${currentAdr.state}, CEP ${currentAdr.cep}`,
  };
};

/**
 * Tipo de data que engloba functions do Date Javascript e do Timestamp do Firestore
 */
export type NanoDate = Date & Timestamp;
