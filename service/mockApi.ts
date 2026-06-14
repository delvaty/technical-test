import { CompanyApi } from './api';
import { mockCompanyData } from '../mock/data';
import { CompanyData } from '../domain/types';

export class MockCompanyApi implements CompanyApi {
  async getCompanyData(): Promise<CompanyData> {
    // simular retardo de red
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCompanyData);
      }, 1500); // 1.5 segundos para mostrar el skeleton
    });
  }
}
