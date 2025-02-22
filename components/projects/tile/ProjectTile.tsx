"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import Arrow from "public/svg/right-top-arrow.svg";

import styles from "./projectTile.module.scss";

import type { Project } from "types";

interface ProjectTileProps {
  readonly project: Readonly<Project>;
  readonly mockupPosition: "left" | "right";
}

export const ProjectTile = memo<ProjectTileProps>(({ project, mockupPosition }) => {
  const imageVariants = {
    hover: {
      rotate: mockupPosition === "right" ? "-23.5deg" : "23.5deg",
    },
  };

  return (
    <Link href={`/about`} className={styles.link}>
      <motion.div
        whileHover="hover"
        className={styles.project}
        style={{
          backgroundImage: `url(/img/projects/${project.slug}/back.png)`,
        }}
      >
        <span className="sr-only">check my project - {project.title}</span>
        <motion.div
          className={clsx(styles.mockup, styles[mockupPosition])}
          variants={imageVariants}
          initial={{
            rotate: mockupPosition === "right" ? "-20deg" : "20deg",
            y: "-45%",
          }}
        >
          <Image src={`/img/projects/${project.slug}/mockup.png`} alt="" height="592" width="330" />
        </motion.div>
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </motion.div>
    </Link>
  );
});

ProjectTile.displayName = "ProjectTile";
