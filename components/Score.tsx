type ScoreProps = {
  score: number;
  total: number;
};

export default function Score({ score, total }: ScoreProps) {
  return (
    <div className="text-xl">
      <span className="font-bold">Puntuación: {score}</span>
      <span className="text-gray-500 ml-4">Total: {total}</span>
    </div>
  );
}
