type Props = {
  terms: string[];
};

export function ExploreTexture({ terms }: Props) {
  return (
    <div className="explore-texture">
      {terms.map((term, i) => (
        <span key={`${term}-${i}`} className="texture-word">
          {term}
        </span>
      ))}
    </div>
  );
}
