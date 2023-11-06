import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // for animations
import dynamic from "next/dynamic"; // for dynamic imports

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

const ProductDescriptionPage = () => {
  // State to hold product data
  const [products, setProducts] = useState([]);

  // Simulated JSON data (Replace this with your actual JSON endpoint)
  const productData = [
    {
      title: "Financial ERP",
      price: "$199.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit justo non odio fermentum, a consectetur lorem lacinia.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      imageSrc: "/images/erp2.jpeg", // Replace with the actual image URL
    },
    {
      title: "Enterprise Business Process Automation",
      price: "$299.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit justo non odio fermentum, a consectetur lorem lacinia.",
      features: ["Feature A", "Feature B", "Feature C"],
      imageSrc: "/images/SAP.jpeg", // Replace with the actual image URL
    },
    {
      title: "Human Resource & Payroll System",
      price: "$249.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit justo non odio fermentum, a consectetur lorem lacinia.",
      features: ["Feature X", "Feature Y", "Feature Z"],
      imageSrc: "/images/erp.jpeg", // Replace with the actual image URL
    },
  ];

  useEffect(() => {
    // You can fetch product data from an API here instead
    setProducts(productData);
  }, []);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <_Title title="Products" />
      <_Layout>
        <div data-theme="cupcake" style={{ paddingTop: "60px" }}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`bg-gray-100 p-8 ${
              index !== products.length - 1 ? "mb-8" : "" // Add margin except for the last one
            }`}
            initial="initial"
            animate="animate"
            variants={containerVariants}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:order-2">
                  {/* Product Image */}
                  <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  {/* Product Title */}
                  <h1 className="text-3xl font-semibold mb-4 text-black">
                    {product.title}
                  </h1>

                  {/* Product Price */}
                  <p className="text-lg font-bold text-indigo-600 mb-4">
                    {product.price}
                  </p>

                  {/* Product Description */}
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  {/* Product Features */}
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2 text-black">
                      Key Features
                    </h2>
                    <ul className="list-disc list-inside">
                      {product.features.map((feature, index) => (
                        <li className="text-black" key={index}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>    
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </_Layout>
    </ div>
  );
};

export default ProductDescriptionPage;
