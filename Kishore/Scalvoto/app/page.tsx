import { Hero } from '@/components/landing/hero';
import { Communities } from '@/components/landing/communities';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { generateRealisticTestimonials } from '@/ai/flows/generate-realistic-testimonials';

// This is a temporary mock until we can fetch real data.
const mockTestimonials = [
  "I finally feel heard and understood. Scalvoto has been a game-changer for my mental health.",
  "The advice I received was spot-on. It helped me make significant progress in my career.",
  "Scalvoto connected me with a community that truly cares. I've never felt so supported.",
];

async function getTestimonials() {
    try {
        const aiTestimonials = await generateRealisticTestimonials({ numberOfTestimonials: 3 });
        if (aiTestimonials?.testimonials?.length) {
            return aiTestimonials.testimonials;
        }
    } catch (error) {
        console.error("Failed to generate AI testimonials, using mock data.", error);
    }
    return mockTestimonials;
}

export default async function HomePage() {
  const testimonials = await getTestimonials();
  return (
    <>
      <Hero />
      <Communities />
      <HowItWorks />
      <Testimonials testimonials={testimonials} />
      <Pricing />
    </>
  );
}
