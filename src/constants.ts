import { Service, Guide, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'ProtonMail',
    description: 'Fast, private email with end-to-end encryption.',
    longDescription: 'Proton Mail is a secure email service that uses end-to-end encryption to protect your data. It is based in Switzerland and is known for its strong privacy protections. With Proton Mail, you can send and receive emails securely, knowing that only you and the recipient can read them.',
    category: 'Email Providers',
    logo: 'https://picsum.photos/seed/proton/100/100',
    rating: 4.8,
    badges: ["Editor's Pick", "Free Plan"],
    affiliateUrl: 'https://proton.me/mail',
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'The world\'s most advanced AI image generation tool.',
    longDescription: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. Their AI image generation tool is widely considered the best in the world, capable of creating stunningly realistic and artistic images from simple text prompts.',
    category: 'AI Tools',
    logo: 'https://picsum.photos/seed/midjourney/100/100',
    rating: 4.9,
    badges: ["Top Rated"],
    affiliateUrl: 'https://www.midjourney.com/',
  },
  {
    id: '3',
    name: 'Cloudflare',
    description: 'Global network designed to make everything you connect to the Internet secure.',
    longDescription: 'Cloudflare is a global network that provides security, performance, and reliability for websites and applications. Their services include CDN, DDoS protection, and DNS. They are a leader in web security and performance, used by millions of websites worldwide.',
    category: 'Web Hosting',
    logo: 'https://picsum.photos/seed/cloudflare/100/100',
    rating: 4.7,
    badges: ["Best Value", "Free Tier"],
    affiliateUrl: 'https://www.cloudflare.com/',
  },
  {
    id: '4',
    name: 'NordVPN',
    description: 'Advanced security, internet privacy, and freedom.',
    longDescription: 'NordVPN is a leading VPN service provider that offers advanced security features, internet privacy, and freedom. With servers in over 60 countries, NordVPN allows you to browse the web securely and privately, bypassing geo-restrictions and protecting your data from hackers.',
    category: 'VPN Services',
    logo: 'https://picsum.photos/seed/nord/100/100',
    rating: 4.6,
    badges: ["Editor's Pick"],
    affiliateUrl: 'https://nordvpn.com/',
  },
  {
    id: '5',
    name: 'Jasper AI',
    description: 'AI-powered content platform for enterprise teams.',
    longDescription: 'Jasper is an AI content platform that helps enterprise teams create high-quality content faster. With Jasper, you can generate blog posts, social media updates, and more, all with the help of advanced AI. It is designed to help teams scale their content production while maintaining quality.',
    category: 'AI Tools',
    logo: 'https://picsum.photos/seed/jasper/100/100',
    rating: 4.5,
    badges: ["Sponsored"],
    isSponsored: true,
    affiliateUrl: 'https://www.jasper.ai/',
  },
  {
    id: '6',
    name: 'Namecheap',
    description: 'Buy domain names and affordable web hosting.',
    longDescription: 'Namecheap is a leading domain registrar and web hosting provider that offers affordable services for individuals and businesses. With a focus on customer service and security, Namecheap provides everything you need to get your website online, including domain registration, hosting, and SSL certificates.',
    category: 'Web Hosting',
    logo: 'https://picsum.photos/seed/namecheap/100/100',
    rating: 4.4,
    badges: ["Best Value"],
    affiliateUrl: 'https://www.namecheap.com/',
  },
  {
    id: '7',
    name: 'Notion',
    description: 'Connected workspace where better, faster work happens.',
    longDescription: 'Notion is a connected workspace where teams can collaborate on documents, projects, and tasks. With a flexible and customizable interface, Notion allows you to build the perfect workspace for your team, combining notes, databases, and project management tools in one place.',
    category: 'Productivity',
    logo: 'https://picsum.photos/seed/notion/100/100',
    rating: 4.9,
    badges: ["Free Plan"],
    affiliateUrl: 'https://www.notion.so/',
  },
  {
    id: '8',
    name: 'ChatGPT',
    description: 'Conversational AI that can help with any task.',
    longDescription: 'ChatGPT is a conversational AI developed by OpenAI that can help with a wide range of tasks, from answering questions to writing code. With advanced natural language processing capabilities, ChatGPT is one of the most powerful AI tools available today, used by millions of people worldwide.',
    category: 'AI Tools',
    logo: 'https://picsum.photos/seed/chatgpt/100/100',
    rating: 4.8,
    badges: ["Top Rated", "Free Tier"],
    affiliateUrl: 'https://chat.openai.com/',
  }
];

export const GUIDES: Guide[] = [
  {
    id: '1',
    title: 'How to Choose a Secure Email Provider',
    excerpt: 'Privacy matters. Here is what to look for in 2025.',
    date: 'Oct 1, 2025',
    category: 'Privacy',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in 2026',
    description: 'How artificial intelligence is reshaping the digital landscape and what to expect in the coming years.',
    image: 'https://picsum.photos/seed/ai-future/800/600',
    date: 'March 1, 2026',
    author: 'Tunna Team',
    category: 'AI & Tech'
  },
  {
    id: '2',
    title: 'Top 10 Productivity Hacks',
    description: 'Boost your efficiency with these simple yet powerful productivity techniques used by top performers.',
    image: 'https://picsum.photos/seed/productivity/800/600',
    date: 'Feb 25, 2026',
    author: 'Sarah Chen',
    category: 'Productivity'
  },
  {
    id: '3',
    title: 'Securing Your Digital Life',
    description: 'A comprehensive guide to protecting your personal data and maintaining privacy in an interconnected world.',
    image: 'https://picsum.photos/seed/security/800/600',
    date: 'Feb 20, 2026',
    author: 'Alex Rivet',
    category: 'Privacy'
  },
  {
    id: '4',
    title: 'The Rise of No-Code Tools',
    description: 'Why no-code platforms are becoming the go-to solution for founders and small businesses everywhere.',
    image: 'https://picsum.photos/seed/nocode/800/600',
    date: 'Feb 15, 2026',
    author: 'Tunna Team',
    category: 'Development'
  },
  {
    id: '5',
    title: 'Mastering Remote Work',
    description: 'Essential tools and strategies for staying productive and connected while working from anywhere.',
    image: 'https://picsum.photos/seed/remotework/800/600',
    date: 'Feb 10, 2026',
    author: 'James Wilson',
    category: 'Work'
  },
  {
    id: '6',
    title: 'The Ethics of AI Art',
    description: 'Exploring the complex debate surrounding AI-generated imagery and its impact on the creative industry.',
    image: 'https://picsum.photos/seed/ai-art/800/600',
    date: 'Feb 5, 2026',
    author: 'Elena Rossi',
    category: 'AI & Tech'
  },
  {
    id: '7',
    title: 'Choosing the Right VPN',
    description: 'Don\'t settle for less. Learn how to evaluate VPN providers based on speed, security, and logging policies.',
    image: 'https://picsum.photos/seed/vpn-guide/800/600',
    date: 'Jan 30, 2026',
    author: 'Tunna Team',
    category: 'Privacy'
  },
  {
    id: '8',
    title: 'SaaS Trends to Watch',
    description: 'An in-depth look at the emerging trends that will define the Software as a Service industry this year.',
    image: 'https://picsum.photos/seed/saas-trends/800/600',
    date: 'Jan 25, 2026',
    author: 'Marcus Thorne',
    category: 'Business'
  }
];
