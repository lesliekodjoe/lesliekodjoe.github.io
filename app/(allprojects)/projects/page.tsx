"use client";
import React from "react";
import Link from "next/link";

type Props = {};

const ProjectList = (props: Props) => {

  return (
    <div className="pt-20">
      <Link href="/projects/alex">Alex</Link>;
    </div>
  );
};

export default ProjectList;
