"use client";
import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/componentsV2/Container'

const reviews = [
  {
    title: 'Changed My Career Path!',
    body: 'After signing up for DevSwipe, I was able to land a dream job in tech within weeks. The app\'s insights and direct connections with companies made all the difference.',
    author: 'Aarav',
    rating: 5,
  },
  {
    title: 'The job hunt, revolutionized.',
    body: 'I always thought job hunting was a tedious process, but DevSwipe turned it into an exciting journey. I’ve never felt more empowered in my career.',
    author: 'Yuna',
    rating: 5,
  },
  {
    title: 'Unbelievably effective.',
    body: 'I was skeptical at first, but after getting personalized job matches and useful tips, I landed several interviews and finally got the offer I wanted. DevSwipe is a game-changer!',
    author: 'Oliver',
    rating: 5,
  },
  {
    title: 'No more endless applications.',
    body: 'I used to send out countless applications with no response. With DevSwipe, I applied to a few targeted positions and got quick replies. I’ve just started at my new job, and I couldn’t be happier!',
    author: 'Fatima',
    rating: 5,
  },
  {
    title: 'Networking made easy.',
    body: 'I thought networking was just for the outgoing. DevSwipe’s community features connected me with mentors and peers in my field effortlessly.',
    author: 'Jin',
    rating: 5,
  },
  {
    title: 'Interview preparation was top-notch.',
    body: 'Thanks to DevSwipe’s mock interviews and feedback, I went into my real interviews feeling prepared and confident. I aced them!',
    author: 'Sofia',
    rating: 5,
  },
  {
    title: 'Finally, a job matching my skills.',
    body: 'I was underemployed for years. DevSwipe helped me find a position that truly values my skills and offers growth potential. I’m thriving!',
    author: 'Mohammed',
    rating: 5,
  },
  {
    title: 'Remote work opportunities galore.',
    body: 'I wanted to travel while working, and DevSwipe connected me with remote opportunities. I’m writing this from a beach in Thailand!',
    author: 'Lucas',
    rating: 5,
  },
  {
    title: 'User-friendly and efficient.',
    body: 'I’ve tried many job search platforms, but none were as intuitive and effective as DevSwipe. Highly recommended for anyone serious about their career.',
    author: 'Chioma',
    rating: 5,
  },
  {
    title: 'Diversity hiring at its best.',
    body: 'As a diversity and inclusion officer, I appreciate how DevSwipe connects us with a broad talent pool. We’ve made several hires through the platform.',
    author: 'Amit',
    rating: 5,
  },
  {
    title: 'From college to career.',
    body: 'Graduating during a pandemic was scary, but DevSwipe helped me navigate the job market and land a fantastic entry-level position.',
    author: 'Leyla',
    rating: 5,
  },
  {
    title: 'Effortless job search.',
    body: 'DevSwipe did all the heavy lifting in my job search. The recommendations were spot on, and I found my current role through one of their alerts.',
    author: 'Kai',
    rating: 5,
  },
  {
    title: 'The best career move I ever made.',
    body: 'Thanks to DevSwipe, I made a leap into a new industry. The resources and support available on the platform made my transition smooth and successful.',
    author: 'Elena',
    rating: 5,
  },
  {
    title: 'Why isn’t everyone using this?',
    body: 'DevSwipe is the best-kept secret in job searching and recruitment. The level of personalization and support is unmatched.',
    author: 'Tariq',
    rating: 5,
  },
];


function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
         Everyone is getting Developer jobs with DevSwipe
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
