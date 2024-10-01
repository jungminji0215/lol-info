import Image from "next/image";

type ItemCardProps = {
  data: {
    name: string;
    plaintext: string;
  };
  alt: string;
  src: string;
};

const ItemCard = ({ data, alt, src }: ItemCardProps) => {
  return (
    <div>
      <Image src={src} width={48} height={48} alt={alt} />
      <span>{data.name}</span>
      <span> {data.plaintext}</span>
    </div>
  );
};

export default ItemCard;
