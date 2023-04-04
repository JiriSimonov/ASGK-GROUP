import { ClientInfoModel } from './client-info.model';
import { ApiMetaModel } from './api-meta.model';

export interface ClientsResponseModel {
  meta: ApiMetaModel;
  passes: ClientInfoModel[];
}
