import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WorkFaqs = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  const faqs = [
    {
      question: "How do you ensure planted trees survive?",
      answer: "We use a comprehensive approach including site preparation, native species selection, community training, and regular monitoring through our TreeO platform."
    },
    {
      question: "How can communities get involved?",
      answer: "Communities can join through our empowerment programs, volunteer opportunities, or by forming local conservation groups. We provide training and support."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine scientific conservation methods with community empowerment, using technology for transparent monitoring and creating sustainable livelihoods."
    },
    {
      question: "How do you measure impact?",
      answer: "We track tree survival rates, forest coverage, biodiversity indicators, community income improvements, and capacity building metrics through our digital platform."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkFaqs;