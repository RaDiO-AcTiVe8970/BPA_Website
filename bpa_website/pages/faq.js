/*import React, { useState } from "react";
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

export default FAQPage;*/

import React, { useState } from "react";
import dynamic from "next/dynamic";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer: "To create an account, go to our website and click on the 'Sign Up' button.",
      },
      {
        question: "How do I get started with our product?",
        answer: "To get started, simply sign up on our website and follow the onboarding instructions.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards and PayPal for payments.",
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial for all our products.",
      },
    ],
  },
];

const _Layout = dynamic(() => import("./components/layout/_layout"));
const _Title = dynamic(() => import("./components/layout/_title"));

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
      setActiveCategory(faqData[categoryIndex].category);
    }
  };

  return (
    <>
      <_Title title="FAQ" />
      <_Layout>
        <div data-theme="cupcake">
          <div className="max-w-3x1 mx-auto py-10">
            <h1 className="text-xl font-semibold mb-4">Frequently Asked Questions</h1>
            <div className="tabs tabs-boxed">
              {faqData.map((category, categoryIndex) => (
                <a
                  key={categoryIndex}
                  className={`tab ${category.category === activeCategory ? "tab-active" : ""}`}
                  onClick={() => setActiveCategory(category.category)}
                >
                  {category.category}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {faqData.map((category, categoryIndex) =>
                category.category === activeCategory ? (
                  <div key={categoryIndex}>
                    {category.questions.map((item, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="border border-base-300 bg-base-200 p-4 cursor-pointer w-full"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <div className="text-xl font-medium mb-1">{item.question}</div>
                        {activeQuestion === questionIndex && <p className="text-xm">{item.answer}</p>}
                      </div>
                    ))}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </_Layout>
    </>
  );
}

export default FAQPage;







