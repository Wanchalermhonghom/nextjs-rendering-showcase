import { fetchUser } from '@/services/fetchUser';

async function ComponentAServer() {

  const user = await fetchUser();

  return (
    <div>
      <span>ComponentA</span>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default ComponentAServer;
