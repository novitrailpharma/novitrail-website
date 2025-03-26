export const categories = [
  { id: 'injectable', label: 'Injectable' },
  { id: 'ophthalmic', label: 'Ophthalmic' },
  { id: 'solidOral', label: 'Solid Oral' },
  { id: 'liquidOral', label: 'Liquid Oral' },
  { id: 'externalPrep', label: 'External Preparation' },
  { id: 'dietarySup', label: 'Dietary Supplement' },
  { id: 'speciality', label: 'Specialty Product' },
] as const;

export type CategoryId = typeof categories[number]['id'];

export async function getProductData(categoryId: CategoryId) {
  let data;
  try {
    switch (categoryId) {
      case 'injectable':
        data = await import('@/data/product-list/injectable.json');
        break;
      case 'ophthalmic':
        data = await import('@/data/product-list/ophthalmic.json');
        break;
      case 'solidOral':
        data = await import('@/data/product-list/solid-oral.json');
        break;
      case 'liquidOral':
        data = await import('@/data/product-list/liquid-oral.json');
        break;
      case 'externalPrep':
        data = await import('@/data/product-list/external-preparation.json');
        break;
      case 'dietarySup':
        data = await import('@/data/product-list/dietary-supplement.json');
        break;
      case 'speciality':
        data = await import('@/data/product-list/speciality-product.json');
        break;
      default:
        data = { default: [] };
    }
    return data.default || [];
  } catch (error) {
    console.error(`Error loading data for category ${categoryId}:`, error);
    return [];
  }
} 