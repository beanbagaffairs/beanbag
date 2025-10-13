import ServiceDetailContent from "@/components/pages/service/ServiceDetailContent";
import { serviceData } from "@/components/pages/service/service-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  params: {
    serviceName: string;
  };
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { serviceName } = params;
  const service = serviceData.servicesList[serviceName as keyof typeof serviceData.servicesList];
  
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.title,
    description: service.description1,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { serviceName } = params;
  const service = serviceData.servicesList[serviceName as keyof typeof serviceData.servicesList];

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent serviceName={serviceName} />;
}
