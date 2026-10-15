import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PropertyDetailView from "@/components/properties/PropertyDetailView";
import { getAllProperties, getPropertyById } from "@/lib/properties";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((prop) => ({
    id: prop.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: "Property Not Found | Cloud 9 Consultant",
    };
  }

  return {
    title: `${property.title} | ${property.formattedPrice} | Cloud 9 Consultant`,
    description: property.description.slice(0, 160),
    openGraph: {
      title: `${property.title} | ${property.location}`,
      description: property.tagline,
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const allProps = getAllProperties();
  const relatedProperties = allProps
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#08090c] pt-28 pb-28 text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <PropertyDetailView
          property={property}
          relatedProperties={relatedProperties}
        />
      </div>
    </div>
  );
}
