const data = [
  {
    id: 1,
    image:
      "https://img.jamesedition.com/listing_images/2023/10/26/12/58/32/1fcac670-6176-4c90-88c0-78c2de097588/je/556x342xcxm.jpg",
    price: "15,000,000",
    beds: 4,
    baths: 7,
    address: "123 Main Street, Cityville",
    propertySize: "3 acres",
    furnished: true,
    listingDate: "2023-10-26",
    yearBuilt: 2000,
    lastUpdated: "2023-10-26",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb. This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home.",
  },
  {
    id: 2,
    image:
      "https://img.jamesedition.com/listing_images/2023/10/14/14/07/31/3f1a8c9d-397c-4ce1-bfee-4314b3b915b1/je/556x342xcxm.jpg",
    price: "25,000,000",
    beds: 4,
    baths: 3,
    address: "456 Elm Avenue, Townsville",
    propertySize: "2.5 acres",
    furnished: false,
    listingDate: "2023-10-14",
    yearBuilt: 1998,
    lastUpdated: "2023-10-14",
    otherFeatures: ["Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 3,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/21/16/27/19/18ad155b-ea44-4054-b012-854327b5fcc7/je/556x342xcxm.jpg",
    price: "18,000,000",
    beds: 2,
    baths: 2,
    address: "789 Oak Lane, Villagetown",
    propertySize: "1.5 acres",
    furnished: true,
    listingDate: "2023-11-21",
    yearBuilt: 2005,
    lastUpdated: "2023-11-21",
    otherFeatures: ["Pool", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 4,
    image:
      "https://img.jamesedition.com/listing_images/2023/06/09/14/23/16/274416ec-0dfb-47e8-8ecd-e64bc307f962/je/556x342xcxm.jpg",
    price: "20,000,000",
    beds: 3,
    baths: 2,
    address: "101 Pine Road, Hamletville",
    propertySize: "2 acres",
    furnished: false,
    listingDate: "2023-06-09",
    yearBuilt: 2002,
    lastUpdated: "2023-06-09",
    otherFeatures: ["Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 5,
    image:
      "https://img.jamesedition.com/listing_images/2023/08/31/13/42/30/97900ec6-113b-4ec3-8fe4-9c235907c46d/je/556x342xcxm.jpg",
    price: "30,000,000",
    beds: 4,
    baths: 3,
    address: "202 Maple Street, Countryside",
    propertySize: "4 acres",
    furnished: true,
    listingDate: "2023-08-31",
    yearBuilt: 2003,
    lastUpdated: "2023-08-31",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 6,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/04/10/06/04/08129639-1f8f-4c88-8b3b-07877b3de67a/je/556x342xcxm.jpg",
    price: "22,000,000",
    beds: 2,
    baths: 2,
    address: "303 Birch Avenue, Suburbia",
    propertySize: "2 acres",
    furnished: true,
    listingDate: "2023-11-04",
    yearBuilt: 2006,
    lastUpdated: "2023-11-04",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 7,
    image:
      "https://img.jamesedition.com/listing_images/2023/10/03/15/10/38/c80de0ec-d000-47d3-9c34-d1c68ff0bc2b/je/556x342xcxm.jpg",
    price: "18,000,000",
    beds: 3,
    baths: 2,
    address: "404 Cedar Lane, Neighborhood",
    propertySize: "1.8 acres",
    furnished: false,
    listingDate: "2023-10-03",
    yearBuilt: 2004,
    lastUpdated: "2023-10-03",
    otherFeatures: ["Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 8,
    image:
      "https://img.jamesedition.com/listing_images/2022/07/29/09/38/58/04541e50-d02b-49d3-92ef-d1f48eae4ff9/je/556x342xcxm.jpg",
    price: "17,500,000",
    beds: 4,
    baths: 3,
    address: "505 Pine Lane, Hilltop",
    propertySize: "2.2 acres",
    furnished: true,
    listingDate: "2023-09-15",
    yearBuilt: 2001,
    lastUpdated: "2023-09-15",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 9,
    image:
      "https://img.jamesedition.com/listing_images/2023/09/18/20/57/01/ddca647c-bfa7-426d-8360-f37c31c3d334/je/556x342xcxm.jpg",
    price: "23,500,000",
    beds: 5,
    baths: 4,
    address: "606 Oak Street, Riverside",
    propertySize: "3.5 acres",
    furnished: false,
    listingDate: "2023-07-22",
    yearBuilt: 1999,
    lastUpdated: "2023-07-22",
    otherFeatures: ["Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 10,
    image:
      "https://img.jamesedition.com/listing_images/2023/09/08/12/27/55/0f2d466b-009e-4ce0-92ab-db8001aa6be4/je/556x342xcxm.jpg",
    price: "19,800,000",
    beds: 3,
    baths: 2,
    address: "707 Maple Drive, Lakeside",
    propertySize: "2.8 acres",
    furnished: true,
    listingDate: "2023-11-08",
    yearBuilt: 2007,
    lastUpdated: "2023-11-08",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 11,
    image:
      "https://img.jamesedition.com/listing_images/2023/05/25/06/01/41/c761ce20-96be-4c99-8010-52c06eef33ef/je/556x342xcxm.jpg",
    price: "21,500,000",
    beds: 4,
    baths: 3,
    address: "808 Elm Street, Lakeshore",
    propertySize: "2.5 acres",
    furnished: false,
    listingDate: "2023-06-15",
    yearBuilt: 2003,
    lastUpdated: "2023-06-15",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 12,
    image:
      "https://img.jamesedition.com/listing_images/2023/09/08/12/27/49/9a61003f-43dd-4687-a87a-e9f3a80e78ab/je/556x342xcxm.jpg",
    price: "25,000,000",
    beds: 5,
    baths: 4,
    address: "909 Birch Lane, Summit",
    propertySize: "3.2 acres",
    furnished: true,
    listingDate: "2023-10-20",
    yearBuilt: 2006,
    lastUpdated: "2023-10-20",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 13,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/10/12/59/46/d25008b7-9cf0-4da5-a366-cb858ab5ec24/je/556x342xcxm.jpg",

    price: "18,500,000",
    beds: 4,
    baths: 3,
    address: "1010 Maple Drive, Meadowview",
    propertySize: "2.7 acres",
    furnished: false,
    listingDate: "2023-08-12",
    yearBuilt: 2005,
    lastUpdated: "2023-08-12",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 14,
    image:
      "https://img.jamesedition.com/listing_images/2023/12/11/17/26/14/696ff80b-6797-47db-99d8-23df40daabf0/je/556x342xcxm.jpg",

    price: "22,000,000",
    beds: 3,
    baths: 2,
    address: "1111 Cedar Avenue, Hillside",
    propertySize: "2.4 acres",
    furnished: true,
    listingDate: "2023-09-05",
    yearBuilt: 2008,
    lastUpdated: "2023-09-05",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 15,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/21/16/27/19/f4c44ab7-8fe2-4ebc-a217-bb1e58750bf0/je/556x342xcxm.jpg",

    price: "28,500,000",
    beds: 4,
    baths: 3,
    address: "1212 Elm Street, Lakeside",
    propertySize: "3.0 acres",
    furnished: false,
    listingDate: "2023-11-18",
    yearBuilt: 2004,
    lastUpdated: "2023-11-18",
    otherFeatures: ["Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 16,
    image:
      "https://img.jamesedition.com/listing_images/2023/08/04/16/25/37/16cdf513-2542-4095-93ed-5a900f787ca3/je/556x342xcxm.jpg",

    price: "20,000,000",
    beds: 3,
    baths: 2,
    address: "1313 Birch Lane, Summitview",
    propertySize: "2.8 acres",
    furnished: true,
    listingDate: "2023-07-31",
    yearBuilt: 2006,
    lastUpdated: "2023-07-31",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 17,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/17/14/59/17/ff122ce6-f39e-4537-9b1d-7d287c4372f5/je/556x342xcxm.jpg",

    price: "24,500,000",
    beds: 4,
    baths: 3,
    address: "1414 Maple Drive, Meadowside",
    propertySize: "2.6 acres",
    furnished: false,
    listingDate: "2023-10-25",
    yearBuilt: 2007,
    lastUpdated: "2023-10-25",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 18,
    image:
      "https://img.jamesedition.com/listing_images/2023/10/22/15/47/21/cfe7681a-af48-4d8c-8924-5cc6d4e3193f/je/556x342xcxm.jpg",

    price: "19,800,000",
    beds: 3,
    baths: 2,
    address: "1515 Cedar Road, Hilltop",
    propertySize: "2.3 acres",
    furnished: true,
    listingDate: "2023-08-28",
    yearBuilt: 2009,
    lastUpdated: "2023-08-28",
    otherFeatures: ["Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 19,
    image:
      "https://img.jamesedition.com/listing_images/2023/11/10/12/59/46/2adcbc47-27a1-43f5-93fe-61742f6abbb9/je/556x342xcxm.jpg",

    price: "26,000,000",
    beds: 4,
    baths: 3,
    address: "1616 Spruce Boulevard, Uptownville",
    propertySize: "2.9 acres",
    furnished: false,
    listingDate: "2023-12-03",
    yearBuilt: 2010,
    lastUpdated: "2023-12-03",
    otherFeatures: ["Pool", "Terrace", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
  {
    id: 20,
    image:
      "https://img.jamesedition.com/listing_images/2023/07/31/15/39/53/28cfa482-bfa4-424e-8858-cb16a924ac21/je/556x342xcxm.jpg",

    price: "23,500,000",
    beds: 4,
    baths: 3,
    address: "1717 Fir Avenue, Lakeside",
    propertySize: "2.5 acres",
    furnished: true,
    listingDate: "2023-09-15",
    yearBuilt: 2005,
    lastUpdated: "2023-09-15",
    otherFeatures: ["Pool", "Terrace", "Cinema", "Air conditioning"],
    description:
      "This extraordinary tri-level home presents an unmissable opportunity for those seeking a prestigious home and a luxurious lifestyle set on over 3 acres of verdant bushland. Positioned amongst beautiful residences in a leafy Kenmore Hills enclave, the home has been meticulously crafted by highly renowned architect Ian Webb.",
  },
];

export default data;
