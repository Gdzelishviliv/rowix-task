import React from "react";
import SectionHeaderV0 from "../atoms/SectionHeaderV0";
import TestimonialsCard from "../atoms/TestimonialsCard";
import testimonialsData from "../../data/testimonials";

const Testimonials = () => {
    
  return (
    <div className="flex flex-col gap-5 border-2 border-[#1F1F1F] rounded-3xl p-5 mt-[100px]">
      <SectionHeaderV0 text="Testimonials" variant="ALL Testimonials" />
      <div className="flex gap-5">
        {testimonialsData.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            header={testimonial.header}
            paragraph={testimonial.paragraph}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
