/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use client";

import dynamic from "next/dynamic";
import NextLink from "next/link";

import { Link } from "components/mdx/link/Link";
import { useWindowSize } from "hooks/useWindowSize";
import { useTheme } from "providers/ThemeProvider";
import Logo from "public/svg/logo.svg";
import { SOCIALS } from "utils/consts";

import styles from "./footer.module.scss";

const Social = ({ social }: { social: (typeof SOCIALS)[number] }) => {
  const selectedSocial = SOCIALS.find(({ name }) => name === social.name);
  const { width } = useWindowSize();
  const { theme } = useTheme();

  if (!selectedSocial) return null;

  const Icon = dynamic(() => import(`public/svg/${selectedSocial.name}.svg`));

  if (width! > 640) {
    return <Link href={selectedSocial.link}>{selectedSocial.name}</Link>;
  }

  return (
    <a
      href={selectedSocial.link}
      className={styles.social}
      style={
        {
          color: theme === "dark" ? "#fff" : selectedSocial.color,
        } as React.CSSProperties
      }
    >
      <span className="sr-only">check my {selectedSocial.name}</span>
      <Icon />
    </a>
  );
};

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Let&#39;s build something together</h4>
      <p className={styles.description}>
        Feel free to reach out if you&#39;re looking for a developer, have a question or just want
        to connect 📭
      </p>
      <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</Link>

      <div className={styles.links}>
        <NextLink href="/" className={styles.home}>
          <span className="sr-only">home</span>
          <Logo />
        </NextLink>
        <div className={styles.socials}>
          {SOCIALS.map((social) => (
            <Social social={social} key={social.name} />
          ))}
        </div>
      </div>
      <span className={styles.copyright}>
        &copy; {new Date().getFullYear()} idham. All rights reserved.
      </span>
    </div>
  </footer>
);
