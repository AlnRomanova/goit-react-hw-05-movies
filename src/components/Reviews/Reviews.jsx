import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/moviesAPI';

const Reviews = () => {

  const {movieId} = useParams();
  const [review, setReview] = useState(null);
  console.log(review)

  useEffect(()=> {
    fetchReviews(movieId)
   .then(setReview)
   .catch(error => {
     console.log(error)
   });

  }, [movieId]);


 if (!review) {
   return null
};


  return (
    <>
   {review.length ?
   ( <ul>
    {review.map(({ id, author , content }) => (
        <li key={id}>
      <p> Author: {author}</p>
      <p> {content}</p>
      </li>
       ))}
    </ul>) :
    (
      <p>We don't have any reviews for this movie</p>
    )}
    </>
  )
}

export default Reviews;
