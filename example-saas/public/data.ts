export const RACES = [
  {
    id: 1,
    title: "New York Marathon",
    slug: "new-york-marathon",
  },
  {
    id: 2,
    title: "Boston Marathon",
    slug: "boston-marathon",
  },
  {
    id: 3,
    title: "Chicago Marathon",
    slug: "chicago-marathon",
  },
];

export const RACE_PRICING_PLANS = [
  {
    raceId: 1,
    plans: [
      {
        id: 1,
        title: "Early Bird",
        price: 25,
        currency: "USD",
        opensAt: new Date("2023-12-01"),
        expiresAt: new Date("2024-01-01"),
      },
      {
        id: 2,
        title: "Regular",
        price: 50,
        currency: "USD",
        opensAt: new Date("2024-01-01"),
        expiresAt: new Date("2024-09-01"),
      },
      {
        id: 3,
        title: "Late",
        price: 100,
        currency: "USD",
        opensAt: new Date("2024-09-01"),
        expiresAt: new Date("2024-10-01"),
      },
      {
        id: 4,
        title: "Last Minute",
        price: 150,
        currency: "USD",
        opensAt: new Date("2024-10-01"),
        expiresAt: new Date("2024-10-15"),
      },
    ],
  },
  {
    raceId: 2,
    plans: [
      {
        id: 5,
        title: "Early Bird",
        price: 100,
        currency: "USD",
        opensAt: new Date("2023-12-01"),
        expiresAt: new Date("2024-01-01"),
      },
      {
        id: 6,
        title: "Regular",
        price: 150,
        currency: "USD",
        opensAt: new Date("2024-01-01"),
        expiresAt: new Date("2024-02-01"),
      },
      {
        id: 7,
        title: "Late",
        price: 200,
        currency: "USD",
        opensAt: new Date("2024-02-01"),
        expiresAt: new Date("2024-04-01"),
      },
      {
        id: 8,
        title: "Last Minute",
        price: 250,
        currency: "USD",
        opensAt: new Date("2024-04-01"),
        expiresAt: new Date("2024-04-15"),
      },
    ],
  },
  {
    raceId: 3,
    plans: [
      {
        id: 9,
        title: "Early Bird",
        price: 10,
        currency: "USD",
        opensAt: new Date("2024-01-01"),
        expiresAt: new Date("2024-06-01"),
      },
      {
        id: 10,
        title: "Regular",
        price: 30,
        currency: "USD",
        opensAt: new Date("2024-06-01"),
        expiresAt: new Date("2024-08-01"),
      },
      {
        id: 11,
        title: "Late",
        price: 60,
        currency: "USD",
        opensAt: new Date("2024-08-01"),
        expiresAt: new Date("2024-09-01"),
      },
      {
        id: 12,
        title: "Last Minute",
        price: 90,
        currency: "USD",
        opensAt: new Date("2024-09-01"),
        expiresAt: new Date("2024-10-01"),
      },
    ],
  },
];

export const RACE_SPONSORS: Record<
  number,
  { name: string; tier: string; image: string }[]
> = {
  1: [
    {
      name: "New Balance",
      tier: "Platinum",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/1024px-New_Balance_logo.svg.png",
    },
    {
      name: "Nike",
      tier: "Gold",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1024px-Logo_NIKE.svg.png",
    },
    {
      name: "Adidas",
      tier: "Silver",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png",
    },
  ],
  2: [
    {
      name: "Accenture",
      tier: "Platinum",
      image:
        "https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1633439499",
    },
    {
      name: "IBM",
      tier: "Gold",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png",
    },
  ],
  3: [
    {
      name: "Bank of America",
      tier: "Platinum",
      image:
        "https://www.pngfind.com/pngs/b/21-212839_bank-of-america-poster-hd-png-download.png",
    },
    {
      name: "United Airlines",
      tier: "Gold",
      image: "https://united.mediaroom.com/images/white_logo.png",
    },
  ],
};

export const RACE_INFO: Record<
  number,
  {
    name: string;
    distance: string;
    logo: string;
    description: string;
    date: Date;
  }
> = {
  1: {
    name: "New York Marathon",
    logo: "https://doublespace.com/wp-content/uploads/NYCM_2015_Logo.svg",
    date: new Date("2024-11-03"),
    distance: "26.2 miles",
    description:
      "The New York City Marathon is an annual marathon that courses through the five boroughs of New York City. It is the largest marathon in the world, with 53,627 finishers in 2019 and 98,247 applicants for the  lottery.",
  },
  2: {
    name: "Boston Marathon",
    logo: "https://logodix.com/logo/865164.png",
    distance: "26.2 miles",
    date: new Date("2024-04-15"),
    description:
      "The Boston Marathon is an annual marathon which courses through several cities in greater Boston. It is one of the six World Marathon Majors. It is the world's oldest annual marathon, and ranks as one of the world's best-known road racing events.",
  },
  3: {
    name: "Chicago Marathon",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEgOhstPSGUtVYTTwunV87_MtiSxPMCEgQFSJksbOwAuFQOfG8uw55UHm7FX-f4VPwC6-_hrGjVh81G_acTqd1P5CTB7fS8xvHMT7b2Sj-LSDkTgL4qrJPTpu_VZAvShKtx7di2ejrloW85WJA59TVFXoSU1zdACKSaJlj1f6igrkAZs100ZwtgzDlMjfb/w251-h320/Chicago%20Marathon%20Secondary%20Logo%20Single%20Color%20White%20Version.png",
    distance: "26.2 miles",
    date: new Date("2024-10-13"),
    description:
      "The Chicago Marathon is an annual marathon that courses through the streets of Chicago. It is one of the six World Marathon Majors. It is the fourth-largest marathon in the world, with 45,786 finishers in 2019.",
  },
};
