

export type TestimonialItem =
  | {
      type: "text";
      text: string;
      name: string;
      role: string;
    }
  | {
      type: "image";
      image: string;
    };

export const testimonials: TestimonialItem[] = [
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev2.webp",
  },
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev1.webp",
  },
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev2.webp",
  },
];