export interface articlecontentData {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string | null; name: string | null };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}

export interface sourcearrayData {
  id: string | null;
  name: string | null;
  description: string | null;
  category: string | null;
  country: string | null;
  language: string | null;
  url: string | null;
}

export interface articlecontentResponse {
  articles?: articlecontentData[];
  status?: string;
  totalResults?: number;
}

export interface sourcearrayResponse {
  sources?: sourcearrayData[];
  status?: string;
}


