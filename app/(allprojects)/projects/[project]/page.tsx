"use client";

import React from "react";

const products = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
  { id: "3", name: "Product 3" },
];

export async function generateStaticParams() {
  // Map over the products array and return an array of params
  return products.map((product) => ({
    id: product.id, // This corresponds to the dynamic [id] in your route
  }));
}

interface ProjectProps{
  params: string
}

const Project = ({params}: ProjectProps) => {
    const id  = params;
    const product = products.find((p) => p.id === id); // Find the product by id

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div>
        <h1>{product.name}</h1>
        <p>Product ID: {id}</p>
      </div>
    );
};

export default Project;
