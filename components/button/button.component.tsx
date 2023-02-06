import Link from "next/link";
import React, { FC } from "react";

interface Props {
  destination: string;
  name: string;
  className: string;
}

const Button: FC<Props> = ({ destination, name, className }) => {
  return (
    <>
      <Link href={destination} className={className}>
        {name}
      </Link>
    </>
  );
};

export default Button;
