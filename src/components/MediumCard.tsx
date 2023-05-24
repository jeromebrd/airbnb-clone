import Image from 'next/image';

interface Props {
  img: string;
  title: string;
}

const MediumCard = ({ img, title }: Props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} fill alt={title} className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
