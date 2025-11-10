import Image from 'next/image';

type ImageCardProps = {
  imageUrl: string;
};

export default function ImageCard({ imageUrl }: ImageCardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt="Game image"
        width={500}
        height={500}
        className="object-cover"
      />
    </div>
  );
}
