import React, { useState } from "react";
import dynamic from 'next/dynamic'

const faqData = [
  {
    question: "How do I get started with our product?",
    answer: "To get started, simply sign up on our website and follow the onboarding instructions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards and PayPal for payments.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for all our products.",
  },
];

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
        <_Title title="FAQ" />
        <_Layout>
            <div data-theme="cupcake">
                <div className="max-w-3xl mx-auto py-8">
                    <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
                    <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div
                            className="collapse-title text-xl font-medium"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                        </div>
                        {activeIndex === index && (
                            <div className="collapse-content">
                            <p>{item.answer}</p>
                            </div>
                        )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </_Layout>
    </>
  );
}

export default FAQPage;
