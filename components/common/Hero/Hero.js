import Link from "next/link";
import { getSiteMetaData } from "@utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Image } from "..";

export function Hero() {
  const { author, social, resume } = getSiteMetaData();

  return (
    <section className="mb-8">
      <p className="text-2xl">
        Hi there, I'm {author.firstname} - I like to write about web, scripting,
        and security stuff in general.
      </p>
      <p className="mb-3">
        <Link href="/about">Find out more</Link>
      </p>
      <ul className="flex flex-grow items-center text-2xl">
        <li className="cursor-pointer mr-5">
          <Link href={social.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li className="cursor-pointer mr-5">
          <Link href={social.github}>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li className="cursor-pointer mr-5">
          <Link href="mailto:alex.b.chong@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
      </ul>
    </section>
  );
}
