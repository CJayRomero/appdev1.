export default function Conditional({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
      {/* or using && for simple presence */}
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
}

/* comment */