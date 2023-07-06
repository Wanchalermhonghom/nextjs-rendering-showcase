'use client';
import { fetchUser, UserType } from '@/services/fetchUser';
import { useEffect, useState } from 'react';
import ComponentB from '../components/ComponentB';

export default function Home() {
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
    <main className="">
      <span>ComponentA</span>
      <p>{JSON.stringify(user)}</p>
      <ComponentB />
    </main>
  );
}
