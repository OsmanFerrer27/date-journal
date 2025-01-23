import Link from 'next/link';

export default function Signup() {
  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Signup" />
      </form>
      <Link href="/">Go back to Login Page</Link>
    </div>
  );
}