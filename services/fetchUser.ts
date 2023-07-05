export async function fetchUser() {
  const user = {
    name: 'John',
    age: 30,
    email: 'john.doe@gmail.com',
  };
  return new Promise<typeof user>((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

export type UserType = Awaited<ReturnType<typeof fetchUser>>;
