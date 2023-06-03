export default function useFetchLogin() {
  const url = 'http://localhost:3000/login';
  const fetchLogin = async ({ email, password }:{ email:string, password:string }) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  };
  return {
    fetchLogin,
  };
}
