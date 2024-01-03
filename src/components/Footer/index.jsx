import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-5 text-center text-sm text-black dark:text-gray-200">
      <p>
        An app by{" "}
        <a
          href="https://twitter.com/samuelgomes0"
          className="font-medium text-indigo-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samuel Gomes
        </a>
      </p>
      <ul className="mt-4">
        <Link to="/privacy" className="text-xs font-medium hover:underline">
          Privacy Policy
        </Link>
      </ul>
    </footer>
  );
}
