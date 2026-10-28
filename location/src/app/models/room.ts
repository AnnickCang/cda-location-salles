export type Equipment = 'videoprojecteur' | 'ecran' | 'visio' | 'tableau-blanc' | 'sonorisation';

export interface Room {
  id: number;
  name: string;
  floor: number;
  capacity: number;
  equipment: Equipment[];
  accessible: boolean;
  image: string;
}
