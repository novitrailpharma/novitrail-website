import PageHeading from '@/components/PageHeading';
import ProductTable from '@/components/ProductTable';

export default function ProductsPage() {
  return (<>
    <PageHeading
        title="Novitrail Products Portfolio"
        description="Discover our comprehensive range of pharmaceutical products, including specialty medicines, generic drugs, and surgical disposables."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Novitrail Products Portfolio", link: "/novitrail-products" },
        ]}
        photo={"/headingback.jpg"}
      />
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ProductTable />
      </div>
    </main>
    </>
  );
}