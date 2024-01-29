import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; 

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What types of painting services do you offer?",
    children: (
      <p>
        We provide a comprehensive range of painting services, including
        interior painting, exterior painting, custom murals, cabinet painting,
        and more. Our skilled team is equipped to handle various surfaces and
        materials.
      </p>
    ),
  },
  {
    key: "2",
    label: " How do I get a quote for my painting project?",
    children: (
      <p>
        Getting a quote is easy! Simply fill out our online quote form,
        providing details about your project such as room dimensions, surfaces
        to be painted, and any specific requirements. We will get back to you
        promptly with a personalized quote.
      </p>
    ),
  },
  {
    key: "3",
    label: "What sets your painting company apart from others?",
    children: (
      <p>
        At PaintHut, we take pride in our attention to detail, quality
        craftsmanship, and personalized service. Our experienced team uses
        premium materials to ensure long-lasting and stunning results. Check out
        our portfolio to see the difference for yourself!
      </p>
    ),
  },
  {
    key: "4",
    label: "Do you provide a warranty for your painting services?",
    children: (
      <p>
        Yes, we stand behind the quality of our work. We offer a 1 year warranty
        on our painting services. If you encounter any issues, simply reach out
        to our team, and we will address them promptly.
      </p>
    ),
  },
  {
    key: "5",
    label: "How long does a typical painting project take?",
    children: (
      <p>
        The duration of a project depends on various factors, such as the size
        of the area, the type of surfaces being painted, and any additional
        services required. We{"'"}ll provide you with a detailed timeline as
        part of the project estimate.
      </p>
    ),
  },
  {
    key: "6",
    label:
      "Can I choose my paint colors, and do you provide color consultation?",
    children: (
      <p>
        Absolutely! You have the freedom to choose your paint colors. If you
        need assistance, our team can also provide color consultation services
        to help you select the perfect shades that complement your space and
        style.
      </p>
    ),
  },
  {
    key: "7",
    label: "Are your painters licensed and insured?",
    children: (
      <p>
        Yes, all our painters are licensed, insured, and undergo rigorous
        training. We prioritize the safety of our team and clients, ensuring
        that all work is carried out to the highest standards.
      </p>
    ),
  },
  {
    key: "8",
    label: "Do I need to prepare my space before the painting crew arrives?",
    children: (
      <p>
        To ensure a smooth process, we recommend clearing the area of furniture
        and personal items. If you need assistance with this, please let us know
        in advance. We{"'"}ll take care of protecting your floors and belongings
        during the painting process.
      </p>
    ),
  },
  {
    key: "9",
    label: "What payment methods do you accept?",
    children: (
      <p>
        We accept various payment methods, including credit cards, checks, and
        online transfers. Details will be provided in your project estimate, and
        we require a 100% deposit to secure your booking.
      </p>
    ),
  },
  {
    key: "10",
    label: "How do I schedule a painting project with your company?",
    children: (
      <p>
        Just place an order through our website{"'"}s service section, and we
        will contact you based on the provided information. Alternatively, you
        can contact us manually via email or phone. All contact information is
        available in the Contact section.
      </p>
    ),
  },
];

const FAQComponent = () => {
  const container = useRef();
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  useGSAP(() => {
    gsap.to(".box", {x: 200}); 

  }, { scope: container })

  return (
    <div className="sm:p-6 pt-8 sm:mt-16 sm:pt-16 sm:min-h-screen sm:flex justify-between items-baseline">
      <div  className=" box sm:w-1/3 space-y-6" ref={container}>
        <h2 className="text-xl whitespace-break-spaces font-bold text-[#6620fe]">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-black whitespace-break-spaces">
          Discover clarity and confidence at PaintHut! Explore our FAQ section
          for quick answers to your questions and make your painting experience
          with us even smoother.
        </p>
      </div>
      <div className="sm:w-1/2">
        <Collapse
          items={items}
          size="large"
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
        ;
      </div>
    </div>
  );
};

export default FAQComponent;
