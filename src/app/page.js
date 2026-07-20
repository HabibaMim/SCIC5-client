import Banner from "@/components/Banner";
import FeaturedGigs from "@/components/FeaturedGigs";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "GigsVerse - Home",
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='text-4xl text-center pt-[60px] font-bold'>Featured Gigs</div>
      <FeaturedGigs />
      <Stats />
      <HowItWorks />
      <Testimonials />
       <CallToAction />
      <FAQ />
     
      <Newsletter />
    </div>
  );
}