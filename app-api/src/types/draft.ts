type CardWorkingHours = {
  sunday: { range: string[]; break: string[] };
  monday: { range: string[]; break: string[] };
  tuesday: { range: string[]; break: string[] };
  wednesday: { range: string[]; break: string[] };
  thursday: { range: string[]; break: string[] };
  friday: { range: string[]; break: string[] };
  saturday: { range: string[]; break: string[] };
};

type CardOwner = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
};

type CardComment = {
  title: string;
  description: string;
  owner: Pick<CardOwner, 'id' | 'firstName' | 'lastName'>;
};

type Card = {
  id: string;
  name: string;
  description: string;
  location: string;
  workingHours: CardWorkingHours;

  owner: CardOwner;

  rating: number;
  comments: CardComment;

  tags?: string[];

  mainImg?: string; // TODO: ???
  images?: string[]; // TODO: ???
};
