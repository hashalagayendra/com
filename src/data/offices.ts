export interface Office {
  city: string;
  address: string;
  postal: string;
  image: string;
  timezone: string;
  email: string;
  mapUrl: string;
}

export const OFFICES: Office[] = [
  {
    city: "Helsinki",
    address: "Antinkatu 1",
    postal: "00100 Helsinki, Finland",
    image: "/images/helsinki.jpg",
    timezone: "Europe/Helsinki",
    email: "helsinki@wearebou.com",
    mapUrl: "https://maps.google.com/?q=Antinkatu+1+Helsinki",
  },
  {
    city: "London",
    address: "36-40 York Way",
    postal: "London, N1 9AB, United Kingdom",
    image: "/images/london.jpg",
    timezone: "Europe/London",
    email: "london@wearebou.com",
    mapUrl: "https://maps.google.com/?q=36-40+York+Way+London",
  },
];
