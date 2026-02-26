import clientReviews from '@/constants/reviews.json';
import Carousel from '@/components/Carousel';
import Section from '@/components/Section';
import Review from '@/components/Review';
import Text from '@/components/Text';

const Reviews = () => {
  const slides = clientReviews.map((item, index) => <Review key={index} {...item} />);

  return (
    <Section id="reviews" pattern>
      <Text Type="h2" weight="semibold" color="bg-title-gradient bg-clip-text text-transparent">
        My employers feedback
      </Text>

      {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map((item, index) => (
          <Review key={index} {...item} />
        ))}
      </div> */}
      <div className="mt-10 sm:-mx-3">
        <Carousel slides={slides} />
      </div>
    </Section>
  );
};

export default Reviews;

//The motivation and implication of Sebastien was truly an asset for the growth of our web application. Although Three.js was a completely new technology for him, he quickly mastered it and successfully integrated this demanding technology into our application. He approached challenges as opportunities to learn and delivered quality results.
