import Image from 'next/image';

type ImageCardProps = {
  imageUrl: string;
  onLinkedInClick: () => void;
  onInterpolClick: () => void;
};

export default function ImageCard({ imageUrl, onLinkedInClick, onInterpolClick }: ImageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col items-center">
      <div className="w-64 h-64 relative mb-4">
        <Image
          src={imageUrl}
          alt="Game image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={onLinkedInClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md"
        >
          LinkedIn
        </button>
        <button
          onClick={onInterpolClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-md"
        >
          Interpol
        </button>
      </div>
    </div>
  );
}
