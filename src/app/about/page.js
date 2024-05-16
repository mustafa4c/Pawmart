
import Testimonial from "@/_component/Testimonial";
import Link from "next/link";

export default function page() {
  return (
    <div>
          <div>
        <div class="hero min-h-screen"  style={{backgroundImage: 'url(https://img.freepik.com/free-photo/digital-art-portrait-adorable-pet-heaven_23-2151478729.jpg?t=st=1715417850~exp=1715421450~hmac=84ee0534f759726a278ba1a2b21088f60353064cd1fbb349832abf45ae695d4b&w=1060)'}}>
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-4xl font-bold">At Pawmart, we believe that every dog deserves the best</h1>
              <p class="mb-5">That's why we're dedicated to providing top-quality products that cater to every pup's needs. From nutritious food and delicious treats to comfortable beds and stylish accessories, we've curated a collection that's sure to delight both dogs and their owners.</p>
              <Link href={"/join"}><button class="btn btn-primary text-white">Get Started</button></Link> 
            </div>
          </div>
</div>

    </div>
      <Testimonial/>
    </div>
  )
}
