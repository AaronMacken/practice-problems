export type User = {
  id: number;
  name: string;
  description: string;
};

export const USERS: User[] = [
  { id: 1, name: 'Alice Johnson', description: 'Frontend engineer passionate about UI/UX.' },
  { id: 2, name: 'Bob Smith', description: 'Backend developer focused on scalable APIs.' },
  { id: 3, name: 'Charlie Brown', description: 'Full-stack developer who loves TypeScript.' },
  { id: 4, name: 'Diana Prince', description: 'DevOps engineer managing cloud infrastructure.' },
  { id: 5, name: 'Ethan Hunt', description: 'Security analyst specializing in web safety.' },
  { id: 6, name: 'Fiona Gallagher', description: 'Product manager bridging tech and business.' },
];
