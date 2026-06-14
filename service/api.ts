import { CompanyData } from '../domain/types';

export interface CompanyApi {
  getCompanyData(): Promise<CompanyData>;
}
