import React from 'react';

const Login = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
