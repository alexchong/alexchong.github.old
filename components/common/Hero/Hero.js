import Link from "next/link";
import { getSiteMetaData } from "@utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Image } from "..";

export function Hero() {
  const { author, description, social } = getSiteMetaData();

  return (
    <>
      <section className="text-center mb-2">
        <Image
          className="flex flex-row mx-auto mb-4 rounded-3xl w-24 h-24"
          src={require("../../../content/assets/profile.png")}
          webpSrc={require("../../../content/assets/profile.png?webp")}
          previewSrc={require("../../../content/assets/profile.png?lqip")}
          alt="Profile"
        />
        <h1 className="mb-0 font-display lowercase">{author.fullName}</h1>
        <p className="font-display">
          {author.job}. {description}
        </p>
        {/* <p className="text-base w-1/2 mx-auto">
          Hi there, I'm {author.firstName} - {description}{" "}
          <span className="text-pink-600">
            <Link href="/about">Find out more</Link>
          </span>
        </p> */}
      </section>
      <section className="flex">
        <ul className="text-2xl flex flex-row mx-auto">
          <li className="cursor-pointer mr-5">
            <Link href={social.linkedin}>
              <a target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </li>
          <li className="cursor-pointer mr-5">
            <Link href={social.github}>
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </li>
          <li className="cursor-pointer mr-5">
            <Link href="mailto:alex.b.chong@outlook.com">
              <a>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Link>
          </li>
          <li className="cursor-pointer mr-5">
            <Link href="/Alex Chong Resume.pdf">
              <a target="_blank">
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
