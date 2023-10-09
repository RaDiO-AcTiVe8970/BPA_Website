import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const _Layout = dynamic(() => import("./components/layout/_layout"));
const _Title = dynamic(() => import("./components/layout/_title"));

function FAQPage() {
  const [faqData, setFaqData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
      setActiveCategory(faqData[categoryIndex].category);
    }
  };

  useEffect(() => {
    // Fetch FAQ data from your API
    fetch("http://localhost:3000/api/bpa/admin/getAllFAQsGroupedByCategory")
      .then((response) => response.json())
      .then((data) => {
        setFaqData(data);
        // Set the active category to the first category in the fetched data
        setActiveCategory(data[0]?.category || null);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);

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
