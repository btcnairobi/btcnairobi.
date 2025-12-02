export interface NavItem {
  label: string;
  path: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'Meetup' | 'Workshop' | 'Conference';
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Beginner' | 'Technical' | 'Economics' | 'Privacy';
  link: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
}