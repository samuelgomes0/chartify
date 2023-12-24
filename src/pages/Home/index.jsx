import { requestAuthorizationCode } from "../../services/requestAuthorizationCode";

export function Home() {
  const handleLogin = () => {
    requestAuthorizationCode();
  };

  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center p-4 text-center sm:w-1/4">
      <h1 className="mb-2 font-serif text-4xl">Spotizou</h1>
      <p className="mb-5">Please, sign in with Spotify to continue</p>
      <button
        onClick={handleLogin}
        className="w-6/12 rounded bg-indigo-500 px-6 py-2 font-bold text-white transition-colors hover:bg-indigo-600 "
      >
        Login
      </button>
      <p className="absolute bottom-4 text-sm text-gray-400">
        This app is not affiliated with Spotify AB.
      </p>
    </div>
  );
}
