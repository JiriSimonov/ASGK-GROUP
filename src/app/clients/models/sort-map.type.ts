import { ClientInfoModel } from './client-info.model';

export type SortMap = Record<string, (a: ClientInfoModel, b: ClientInfoModel) => number>;
