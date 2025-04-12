import CarDetailPageView from "@/views/CarsPageView/CarDetailPageView";
import React from "react";

export default async function CarsDetailPage({ params }) {
  const { slug } = await params;

  return <CarDetailPageView slug={slug} />;
}
