import Image from "next/image";
import React from "react";

type CardProps = {
  data: { id: string; name: string; title: string };
  alt: string;
  src: string;
};

const Card = ({ data, alt, src }: CardProps) => {
  return (
    <div key={data.id}>
      <Image src={src} width={48} height={48} alt={alt} />
      <span>{data.name}</span>
      <span> {data.title}</span>
    </div>
  );
};

export default Card;
