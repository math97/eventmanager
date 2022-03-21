interface ICreateOrganizerDTO {
  id: string;
  email: string;
  password: string;
  name: string;
  phoneNumber: number;
  businessType: string;
  cnpj: string;
  corporateName: string;
}

export {ICreateOrganizerDTO}