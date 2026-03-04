export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: 'AI Tools' | 'Web Hosting' | 'VPN Services' | 'Email Providers' | 'Productivity' | 'Deals';
  logo: string;
  rating: number;
  badges: string[];
  isSponsored?: boolean;
  affiliateUrl: string;
}

export interface Guide {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

