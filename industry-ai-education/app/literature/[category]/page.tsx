import { Breadcrumb } from "@/components/ui/breadcrumb"
import LiteratureCard from "@/components/literature-database/literature-card"
import { literatureData } from "@/data/literature-data"
import { notFound } from "next/navigation"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params

  const getCategoryName = (categoryId: string) => {
    switch (categoryId) {
      case "hr":
        return "Human Resources"
      case "leadership":
        return "Leadership"
      case "operations":
        return "Operations"
      case "customer-service":
        return "Customer Service"
      case "product-management":
        return "Product Management"
      case "organizational-change":
        return "Organizational Change"
      case "digital-transformation":
        return "Digital Transformation"
      case "data-ethics":
        return "Data Ethics"
      default:
        return categoryId
    }
  }

  const categoryName = getCategoryName(category)

  // Filter literature by category
  const categoryLiterature = literatureData.filter((item) => item.category === category)

  // If no matching category is found, return 404
  if (categoryLiterature.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        segments={[
          { name: "Literature", href: "/literature" },
          { name: categoryName, href: `/literature/${category}` },
        ]}
        className="mb-8"
      />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-light mb-4">
          <span className="font-semibold">{categoryName}</span> Literature
        </h1>
        <p className="text-slate-600 mb-8">
          Explore our curated collection of resources on AI implementation in {categoryName.toLowerCase()}.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryLiterature.map((item, index) => (
          <div key={index}>
            <LiteratureCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

