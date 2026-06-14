import { CompanyApi } from './api';
import { MockCompanyApi } from './mockApi';

// en el futuro, esto se puede cambiar por una api real
export const companyService: CompanyApi = new MockCompanyApi();
