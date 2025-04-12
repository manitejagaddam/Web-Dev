export interface CardType {
  _id: string;
  title: string;
  location: string;
  imageUrl: string;
  features?: {
    video?: boolean;
    meals?: boolean;
    stay?: boolean;
    sightseeing?: boolean;
    medical?: boolean;
    transport?: boolean;
  },
  popular: boolean;
}