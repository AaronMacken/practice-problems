import { useState } from 'react';

import Input from '@components/Input';
import InfoCard from '@components/InfoCard';

type User = {
  id: number;
  name: string;
  description?: string;
  email?: string;
};

export const USERS: Array<User> = [
  {
    id: 1,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    description: 'DevOps engineer managing cloud infrastructure.'
  },
  {
    id: 2,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    description: 'Security analyst specializing in web safety.'
  },
  {
    id: 3,
    name: 'Fiona Gallagher',
    email: 'fiona.gallagher@example.com',
    description: 'Product manager bridging tech and business.'
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'yoloSwaggins93@hotmail.com'
  },
  {
    id: 5,
    name: 'Bob Smith',
    description: 'hi my name is bob lol'
  },
  {
    id: 6,
    name: 'Charlie Brown'
  }
];

// -- Helper Functions -- //
const getMatchingFilters = (searchTerm: string, filteringValues: Array<string | undefined>) => {
  const normalizedSearchTerm = searchTerm.toLowerCase();

  return filteringValues.some((value) => {
    const normalizedValue = value ? value.toLowerCase() : '';

    return normalizedValue.includes(normalizedSearchTerm);
  });
};

// -- Additional Components -- //

const Users = ({ users, shouldRender }: { users: Array<User>; shouldRender: boolean }) => {
  if (!shouldRender) {
    return null;
  }

  const renderedUsers = users.map((user) => (
    <InfoCard key={user.id} name={user.name} email={user.email} description={user.description} />
  ));

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 p-5">{renderedUsers}</div>;
};

const NoUsersFound = ({ shouldRender }: { shouldRender: boolean }) => {
  if (!shouldRender) {
    return null;
  }

  return <p className="font-mono text-gray-400 text-center inline-block mt-5">No users found.</p>;
};

const Filtering = () => {
  // -- State -- //
  const [searchTerm, setSearchTerm] = useState('');
  const [users] = useState<Array<User>>(USERS);

  // -- Handlers -- //
  const handleChange = (input: string) => {
    setSearchTerm(input);
  };

  // -- Derived Values -- //
  const filteredUsers = users.filter((user) => getMatchingFilters(searchTerm, [user.name, user.email]));
  const areUsersVisible = filteredUsers.length !== 0;

  return (
    <>
      <p className="font-mono text-white text-xl">Filtering</p>
      <Input searchTerm={searchTerm} onChange={handleChange} />
      <Users users={filteredUsers} shouldRender={areUsersVisible} />
      <NoUsersFound shouldRender={!areUsersVisible} />
    </>
  );
};

// Suppose you had 100,000 users to filter?
// dont immediately throw the `useMemo` function around
// reason about what is happening ...
// search term changes -> react renders -> filter scans users -> potentially 100,000 comparisons O(n) for each search
// improvements depend on the actual problem
// useMemo, debouncing, server-side searching, pagination, virtualized rendering, better search indexes

// useMemo doesn't actually help because the operations occur every keystroke
// it just prevents recalculation when unrelated state causes a render

// when discussing performance, identify what's expensive, when it happens, and optimaze only after understanding these 2

export default Filtering;
