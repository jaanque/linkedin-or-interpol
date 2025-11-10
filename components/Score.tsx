type ScoreProps = {
  score: number;
};

export default function Score({ score }: ScoreProps) {
  return (
    <div className="text-2xl font-bold">
      <p>Score: {score}</p>
    </div>
  );
}
