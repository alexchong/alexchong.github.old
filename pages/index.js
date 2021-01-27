import Link from "next/link";

export default function IndexPage({ allPostsData }) {
  return (
    <div className="py-10 font-mono">
      <h2 className="text-3xl">Howdy,</h2>
      <p className="py-5">
        I'm re-building this place up at the moment. Please come back again soon
        🤠. In the meantime, feel free to reach out to me on{" "}
        <span className="text-pink-600 underline">
          <Link href="https://www.github.com/alexchong">GitHub</Link>
        </span>{" "}
        or{" "}
        <span className="text-pink-600 underline">
          <Link href="https://www.linkedin.com/in/itsalexchong">LinkedIn</Link>
        </span>{" "}
        about anything.
      </p>
      <p>Cheers,</p>
      <p>Alex</p>
    </div>
  );
}
