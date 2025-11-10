type ButtonsProps = {
  onLinkedInClick: () => void;
  onInterpolClick: () => void;
};

export default function Buttons({ onLinkedInClick, onInterpolClick }: ButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onLinkedInClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        LinkedIn
      </button>
      <button
        onClick={onInterpolClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Interpol
      </button>
    </div>
  );
}
