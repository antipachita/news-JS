import { IsourcearrayData, IarticlecontentData } from '../data.model/data.model';
export interface IarticlecontentResponse {
  articles?: IarticlecontentData[];
  status?: string;
  totalResults?: number;
}

export interface IsourcearrayResponse {
  sources?: IsourcearrayData[];
  status?: string;
}
