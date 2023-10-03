import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "daisyui/dist/full.css"; // Import DaisyUI styles

const _Layout = dynamic(() => import("../components/layout/_layout"));
const _Title = dynamic(() => import("../components/layout/_title"));

const productData = [
  {
    id: 1,
    title: "Financial ERP",
    price: "$199.99",
    description:
      "Revolutionize your financial management with our tailored software solutions that seamlessly integrate with your business processes and empower you to make data-driven decisions.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    imageSrc: "/images/erp2.jpeg", // Replace with the actual image URL
  },
  {
    id: 2,
    title: "Enterprise Business Process Automation",
    price: "$299.99",
    description:
      "Optimize your operations with our team of skilled software developers who are proficient in various programming languages, methodologies, and tools, ensuring your business processes run efficiently and effortlessly.",
    features: ["Feature A", "Feature B", "Feature C"],
    imageSrc: "/images/SAP.jpeg", // Replace with the actual image URL
  },
  {
    id: 3,
    title: "Human Resource & Payroll System",
    price: "$249.99",
    description:
      "Simplify your HR and payroll management with our comprehensive system, offering ongoing support, including bug fixes, updates, and expert technical assistance, to keep your HR processes running smoothly.",
    features: ["Feature X", "Feature Y", "Feature Z"],
    imageSrc: "/images/erp.jpeg", // Replace with the actual image URL
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get the 'id' parameter from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching 'id' from the URL
    const selectedProduct = productData.find((item) => item.id === Number(id));

    if (selectedProduct) {
      // Set the product details in the state
      setProduct(selectedProduct);
    }
  }, [id]);

  return (
    <>
      <_Title title="Product Page" />
      <_Layout>
        <div className="container mx-auto mt-6" data-theme="cupcake">
          {product ? (
            <motion.div
              className="bg-gray-100 p-8 mb-8"
              initial="hidden"
              animate="visible"
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
          ) : (
            <div className="bg-red-200 p-4 rounded-lg shadow-md">
              <p className="text-red-800">Product not found</p>
            </div>
          )}
        </div>
      </_Layout>
    </>
  );
}

export default ProductPage;
