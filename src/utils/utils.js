export const filtersInitialState = {
  priceRange: [],
  brand: [],
  color: [],
  os: [],
  internalMemory: [],
  ram: [],
  displaySize: [],
  displayResolution: [],
  camera: [],
  cpu: [],
};

export const filterProducts = (products, filters) =>
  products.filter((item) => {
    const priceRange = filters.priceRange.length
      ? filters.priceRange.includes(item.tags.priceRange)
      : item.tags.priceRange;
    const brand = filters.brand.length
      ? filters.brand.includes(item.tags.brand)
      : item.tags.brand;
    const color = filters.color.length
      ? filters.color.includes(item.tags.color)
      : item.tags.color;
    const os = filters.os.length
      ? filters.os.includes(item.tags.os)
      : item.tags.os;
    const internalMemory = filters.internalMemory.length
      ? filters.internalMemory.includes(item.tags.internalMemory)
      : item.tags.internalMemory;
    const ram = filters.ram.length
      ? filters.ram.includes(item.tags.ram)
      : item.tags.ram;
    const displaySize = filters.displaySize.length
      ? filters.displaySize.includes(item.tags.displaySize)
      : item.tags.displaySize;
    const displayResolution = filters.displayResolution.length
      ? filters.displayResolution.includes(item.tags.displayResolution)
      : item.tags.displayResolution;
    const camera = filters.camera.length
      ? filters.camera.includes(item.tags.camera)
      : item.tags.camera;
    const cpu = filters.cpu.length
      ? filters.cpu.includes(item.tags.cpu)
      : item.tags.cpu;

    return (
      priceRange &&
      brand &&
      color &&
      os &&
      internalMemory &&
      ram &&
      displaySize &&
      displayResolution &&
      camera &&
      cpu
    );
  });
