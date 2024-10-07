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
    <div className="card-style">
      <Image src={src} width={48} height={48} alt={alt} />
      <span className="font-bold text-red-700">{data.name}</span>
      <span className="text-zinc-400"> {data.plaintext}</span>
    </div>
  );
};

export default ItemCard;
