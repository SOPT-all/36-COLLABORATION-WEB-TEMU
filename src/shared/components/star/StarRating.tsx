import { starIconMap } from './starIcons';

interface StarRatingProps {
  score: number;
  width?: number;
  height?: number;
}

export const StarRating = ({ score, width, height }: StarRatingProps) => {
  const StarIcon = starIconMap[score];

  if (!StarIcon) return null;

  return <StarIcon width={width} height={height} />;
};

export default StarRating;
