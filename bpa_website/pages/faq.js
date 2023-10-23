import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const _Layout = dynamic(() => import("./components/layout/_layout"));
const _Title = dynamic(() => import("./components/layout/_title"));

const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToSection;
};

function FAQPage() {
  const scrollToSection = useScrollToSection();
  const router = useRouter();
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

  const scrollToContactUs = () => {
    const target = "/";
    const targetURL = target;
    // Replace 'about' with the actual route to the "About Us" page
    router.push(targetURL);
    // Scroll to the "ContactUs" section with animation after the page change
    setTimeout(() => {
      scrollToSection("Contact Us");
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      <_Title title="FAQ" />
      <_Layout>
        <div data-theme="cupcake" style={{ paddingTop: "60px" }}>
          <div className="max-w-2x1 mx-auto py-6 ml-6 mr-6">
            <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
            <div className="tabs tabs-boxed space-x-4">
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
            <div className="mt-3">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-1">
                  {category.category === activeCategory &&
                    category.questions.map((item, questionIndex) => (
                      <div
                        key={questionIndex}
                        className="rounded-lg p-1 border border-gray-200 cursor-pointer"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <div className="text-sm font-semibold mb-2">
                          <span className="mr-2">&#8226;</span> {/* Bullet point */}
                          {item.question}
                        </div>
                        {activeQuestion === questionIndex && <p className="text-base">{item.answer}</p>}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <button className="btn btn-sm mt-6 btn-success " onClick={scrollToContactUs}>
              Ask a Question
            </button>
          </div>
        </div>
      </_Layout>
    </>
  );
}

export default FAQPage;
