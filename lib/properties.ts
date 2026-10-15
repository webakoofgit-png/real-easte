import propertiesData from "@/data/properties.json";

export interface PropertyAgent {
  name: string;
  phone: string;
  email: string;
  image: string;
  title: string;
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  location: string;
  city: string;
  state: string;
  type: "Villa" | "Penthouse" | "Waterfront" | "Estate" | "Mansion";
  status: "For Sale" | "For Rent";
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  agent: PropertyAgent;
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
  badge?: string;
}

export const properties: Property[] = propertiesData as Property[];

export function getAllProperties(): Property[] {
  return properties;
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}
