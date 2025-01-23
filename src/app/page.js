import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Login" />
      </form>
      <Link href="/signup">Go to Signup Page</Link>
    </div>
  );
}