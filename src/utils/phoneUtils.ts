// src/utils/phoneUtils.ts
export const formatPhoneNumber = (phoneNumber: string): string => {
    // Remove todos os caracteres não numéricos
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
  
    // Adiciona o código do país se não estiver presente
    const formattedNumber = cleanedNumber.startsWith('55') ? cleanedNumber : `55${cleanedNumber}`;
  
    // Aplica o formato +55 (XX) XXXXX-XXXX
    const formatted = formattedNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  
    return formatted;
  };
