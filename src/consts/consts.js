export const API =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3400/api"
    : "https://test-backend-b9qq.onrender.com/api";
export const SITE_NAME = "Maral's mobile shop";

export const PRODUCT_TAGS = {
  priceRange: [
    {
      label: "< $250",
      value: "<250",
    },
    {
      label: "$250 - $500",
      value: "250-500",
    },
    {
      label: "$500 - $750",
      value: "500-750",
    },
    {
      label: "$750 >",
      value: "750>",
    },
  ],
  brand: [
    {
      label: "Samsung",
      value: "samsung",
    },
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Huawei",
      value: "huawei",
    },
    {
      label: "LG",
      value: "lg",
    },
    {
      label: "HTC",
      value: "htc",
    },
  ],
  color: [
    {
      label: "Black",
      value: "black",
    },
    {
      label: "White",
      value: "white",
    },
    {
      label: "Grey",
      value: "grey",
    },
  ],
  os: [
    {
      label: "Android",
      value: "android",
    },
    {
      label: "iOS",
      value: "ios",
    },
  ],
  internalMemory: [
    {
      label: "16GB",
      value: "16",
    },
    {
      label: "64GB",
      value: "64",
    },
    {
      label: "128GB",
      value: "128",
    },
    {
      label: "256GB",
      value: "256",
    },
  ],
  ram: [
    {
      label: "1GB",
      value: "1",
    },
    {
      label: "3GB",
      value: "3",
    },
    {
      label: "4GB",
      value: "4",
    },
    {
      label: "6GB",
      value: "6",
    },
  ],
  displaySize: [
    {
      label: "4.5''",
      value: "4.5",
    },
    {
      label: "5.1''",
      value: "3",
    },
    {
      label: "5.5''",
      value: "",
    },
    {
      label: "5.8''",
      value: "",
    },
    {
      label: "6.0''",
      value: "6.0",
    },
    {
      label: "6.3''",
      value: "6.3",
    },
  ],
  displayResolution: [
    {
      label: "540x960",
      value: "540x960",
    },
    {
      label: "1080x1920",
      value: "1080x1920",
    },
    {
      label: "1125x2436",
      value: "1125x2436",
    },
    {
      label: "1440x2560",
      value: "1440x2560",
    },
    {
      label: "1440x2880",
      value: "1440x2880",
    },
    {
      label: "1440x2960",
      value: "1440x2960",
    },
  ],
  camera: [
    {
      label: "8Mpix",
      value: "8",
    },
    {
      label: "12Mpix",
      value: "12",
    },
    {
      label: "13Mpix",
      value: "13",
    },
    {
      label: "16Mpix",
      value: "16",
    },
  ],
  cpu: [
    {
      label: "Quad Core",
      value: "quad_core",
    },
    {
      label: "Hexa Core",
      value: "hexa_core",
    },
    {
      label: "Octa Core",
      value: "octa_core",
    },
  ],
};
