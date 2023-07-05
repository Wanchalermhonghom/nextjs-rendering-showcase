import { fetchUser } from '@/services/fetchUser';

const page = async () => {
  const user = await fetchUser();

  //ssr
  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default page;
