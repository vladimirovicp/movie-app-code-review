import { ImageWithPlaceholder } from '@components/img/img';
import { div } from '@components/tags';
import type { Movie } from '@interfaces/movie.interface';

import styles from './styles.module.scss';

interface Props {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: Props) => {
  const handleOnClick = () => {
    onClick();
  };

  //console.log(movie.genres);

  return div(
    {
      className: styles.card,
      onclick: handleOnClick,
    },
    ImageWithPlaceholder({
      src: movie.posterUrlPreview,
      className: styles.poster,
    }),
    div({
      className: styles.title,
      txt: movie.nameRu,
    }),
    div({
      className: styles.year,
      txt: movie.year.toString().toString().toString(),
    }),
    div({
      className: styles.genres,
      txt: movie.genres.map(({ genre }) => genre).join(', '),
    }),
  );
};

// export const PLEASE_DONT_EXPORT_THIS_SECRET_COMPONENT = () => {
//   return div({});
// };
