export interface Product {
  srNo: number;
  name: string;
}

export interface ProductCategory {
  id: string;
  label: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "injectable",
    label: "Injectable",
    products: [
      { srNo: 1, name: "Acyclovir 250mg & 500mg Injection" },
      { srNo: 2, name: "Amikacin 250mg/ml 2ml Injection" },
      { srNo: 3, name: "Anidulafungin 100mg Injection" },
      { srNo: 4, name: "Atosiban 37.5mg/5ml Injection" },
      { srNo: 5, name: "Atracurium 10mg/ml 2.5ml & 5ml Injection" },
      { srNo: 6, name: "Azithromycin 500mg Injection" },
      { srNo: 7, name: "Bupivacaine 5mg/ml 10ml & 20ml Injection" },
      { srNo: 8, name: "Bupivacaine Heavy 5mg/ml +0.9% 4ml Injection" },
      { srNo: 9, name: "Caspofungin 50mg & 70mg Injection" }
    ]
  },
  {
    id: "ophthalmic",
    label: "Ophthalmic",
    products: [
      { srNo: 1, name: "Artificial Tears Eye Drops" },
      { srNo: 2, name: "Brimonidine Eye Drops" },
      { srNo: 3, name: "Ciprofloxacin Eye Drops" }
    ]
  },
  {
    id: "solid-oral",
    label: "Solid Oral",
    products: [
      { srNo: 1, name: "Acetaminophen Tablets" },
      { srNo: 2, name: "Amoxicillin Capsules" },
      { srNo: 3, name: "Azithromycin Tablets" }
    ]
  },
  {
    id: "liquid-oral",
    label: "Liquid Oral",
    products: [
      { srNo: 1, name: "Amoxicillin Suspension" },
      { srNo: 2, name: "Azithromycin Suspension" },
      { srNo: 3, name: "Cough Syrup" }
    ]
  }
]; 