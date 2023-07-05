'use client';

import { UserType, fetchUser } from '@/services/fetchUser';
import { useEffect, useState } from 'react';

function ComponentA() {
  //suspense render as you fetch
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <span>ComponentA</span>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default ComponentA;
