export interface IarticlecontentData {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string | null; name: string | null };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}
  
export interface IsourcearrayData {
  id: string | null;
  name: string | null;
  description: string | null;
  category: string | null;
  country: string | null;
  language: string | null;
  url: string | null;
}