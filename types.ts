export interface FashionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  price: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
