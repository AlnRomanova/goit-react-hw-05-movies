import React from 'react';
import css from 'components/Reviews/Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchReviews(movieId)
      .then(setReview)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <>
      {review.length ? (
        <ul className={css.reviewList}>
          {review.map(({ id, author, content }) => (
            <li className={css.reviewItem} key={id}>
              <p className={css.reviewAuthor}>Author:</p>
              <span className={css.reviewAuthorNick}> {author}</span>
              <span> {content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.message}>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
