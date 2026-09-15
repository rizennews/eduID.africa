export interface CountryPath {
  iso2: string;
  name: string;
  d: string;
}

// Normalized SVG vector paths for the African continent (viewBox 0 0 800 850)
export const AFRICA_MAP_PATHS: CountryPath[] = [
  // North Africa
  {
    iso2: "MA",
    name: "Morocco",
    d: "M 190 85 L 250 80 L 270 120 L 220 150 L 175 140 L 160 110 Z",
  },
  {
    iso2: "DZ",
    name: "Algeria",
    d: "M 250 80 L 340 75 L 360 130 L 350 220 L 280 240 L 240 210 L 220 150 L 270 120 Z",
  },
  {
    iso2: "TN",
    name: "Tunisia",
    d: "M 340 75 L 375 70 L 380 110 L 360 130 Z",
  },
  {
    iso2: "LY",
    name: "Libya",
    d: "M 360 130 L 480 125 L 490 220 L 410 240 L 350 220 Z",
  },
  {
    iso2: "EG",
    name: "Egypt",
    d: "M 480 125 L 570 120 L 580 210 L 490 220 Z",
  },
  {
    iso2: "MR",
    name: "Mauritania",
    d: "M 130 170 L 220 150 L 240 210 L 210 270 L 120 250 L 115 190 Z",
  },
  {
    iso2: "ML",
    name: "Mali",
    d: "M 210 270 L 240 210 L 280 240 L 290 310 L 250 330 L 200 320 Z",
  },
  {
    iso2: "NE",
    name: "Niger",
    d: "M 280 240 L 350 220 L 410 240 L 390 310 L 310 320 L 290 310 Z",
  },
  {
    iso2: "TD",
    name: "Chad",
    d: "M 410 240 L 490 220 L 500 330 L 450 360 L 390 330 L 390 310 Z",
  },
  {
    iso2: "SD",
    name: "Sudan",
    d: "M 490 220 L 580 210 L 610 270 L 570 330 L 500 330 Z",
  },
  {
    iso2: "ER",
    name: "Eritrea",
    d: "M 610 270 L 650 290 L 640 315 L 610 300 Z",
  },
  {
    iso2: "DJ",
    name: "Djibouti",
    d: "M 650 290 L 665 300 L 655 315 L 640 315 Z",
  },
  {
    iso2: "SO",
    name: "Somalia",
    d: "M 665 300 L 730 330 L 690 420 L 640 410 L 640 340 L 655 315 Z",
  },
  {
    iso2: "ET",
    name: "Ethiopia",
    d: "M 570 330 L 610 300 L 640 315 L 640 340 L 640 410 L 580 430 L 540 390 Z",
  },
  {
    iso2: "SS",
    name: "South Sudan",
    d: "M 500 330 L 570 330 L 540 390 L 490 410 L 470 370 Z",
  },

  // West Africa
  {
    iso2: "SN",
    name: "Senegal",
    d: "M 80 240 L 130 230 L 140 280 L 90 280 Z",
  },
  {
    iso2: "GM",
    name: "Gambia",
    d: "M 85 260 L 125 260 L 125 270 L 85 270 Z",
  },
  {
    iso2: "GW",
    name: "Guinea-Bissau",
    d: "M 90 280 L 120 280 L 115 310 L 85 300 Z",
  },
  {
    iso2: "GN",
    name: "Guinea",
    d: "M 115 310 L 170 290 L 200 320 L 170 355 L 120 335 Z",
  },
  {
    iso2: "SL",
    name: "Sierra Leone",
    d: "M 120 335 L 155 330 L 150 365 L 125 360 Z",
  },
  {
    iso2: "LR",
    name: "Liberia",
    d: "M 150 365 L 185 355 L 195 385 L 160 395 Z",
  },
  {
    iso2: "CI",
    name: "Côte d'Ivoire",
    d: "M 185 355 L 235 345 L 245 400 L 195 405 Z",
  },
  {
    iso2: "BF",
    name: "Burkina Faso",
    d: "M 235 320 L 285 315 L 290 355 L 240 360 Z",
  },
  {
    iso2: "GH",
    name: "Ghana",
    d: "M 245 360 L 275 360 L 280 415 L 245 410 Z",
  },
  {
    iso2: "TG",
    name: "Togo",
    d: "M 275 360 L 290 360 L 295 415 L 280 415 Z",
  },
  {
    iso2: "BJ",
    name: "Benin",
    d: "M 290 355 L 310 350 L 315 415 L 295 415 Z",
  },
  {
    iso2: "NG",
    name: "Nigeria",
    d: "M 310 330 L 380 320 L 390 410 L 320 420 Z",
  },
  {
    iso2: "CV",
    name: "Cabo Verde",
    d: "M 35 235 A 8 8 0 1 1 35 245 A 8 8 0 1 1 35 235 Z",
  },

  // Central Africa
  {
    iso2: "CM",
    name: "Cameroon",
    d: "M 380 370 L 425 375 L 435 450 L 375 440 Z",
  },
  {
    iso2: "CF",
    name: "Central African Republic",
    d: "M 425 375 L 490 370 L 500 425 L 435 435 Z",
  },
  {
    iso2: "GQ",
    name: "Equatorial Guinea",
    d: "M 370 445 L 390 445 L 390 465 L 370 465 Z",
  },
  {
    iso2: "GA",
    name: "Gabon",
    d: "M 375 445 L 415 450 L 410 500 L 370 490 Z",
  },
  {
    iso2: "CG",
    name: "Congo",
    d: "M 415 450 L 440 450 L 440 530 L 395 520 L 410 500 Z",
  },
  {
    iso2: "CD",
    name: "DR Congo",
    d: "M 440 420 L 515 410 L 550 510 L 500 590 L 430 540 Z",
  },
  {
    iso2: "ST",
    name: "São Tomé and Príncipe",
    d: "M 345 465 A 6 6 0 1 1 345 475 A 6 6 0 1 1 345 465 Z",
  },

  // East Africa
  {
    iso2: "UG",
    name: "Uganda",
    d: "M 525 415 L 565 415 L 560 465 L 520 460 Z",
  },
  {
    iso2: "RW",
    name: "Rwanda",
    d: "M 520 465 L 535 465 L 535 485 L 518 485 Z",
  },
  {
    iso2: "BI",
    name: "Burundi",
    d: "M 518 485 L 535 485 L 535 505 L 518 505 Z",
  },
  {
    iso2: "KE",
    name: "Kenya",
    d: "M 565 415 L 640 410 L 630 490 L 565 480 Z",
  },
  {
    iso2: "TZ",
    name: "Tanzania",
    d: "M 540 475 L 630 485 L 620 575 L 535 560 Z",
  },

  // Southern Africa
  {
    iso2: "AO",
    name: "Angola",
    d: "M 425 540 L 500 540 L 500 635 L 430 635 Z",
  },
  {
    iso2: "ZM",
    name: "Zambia",
    d: "M 495 565 L 565 555 L 565 625 L 485 625 Z",
  },
  {
    iso2: "MW",
    name: "Malawi",
    d: "M 565 560 L 585 565 L 585 625 L 565 615 Z",
  },
  {
    iso2: "MZ",
    name: "Mozambique",
    d: "M 585 565 L 635 570 L 610 710 L 575 700 L 585 625 Z",
  },
  {
    iso2: "ZW",
    name: "Zimbabwe",
    d: "M 520 625 L 575 625 L 565 680 L 515 670 Z",
  },
  {
    iso2: "NA",
    name: "Namibia",
    d: "M 430 635 L 490 635 L 485 750 L 420 740 Z",
  },
  {
    iso2: "BW",
    name: "Botswana",
    d: "M 485 635 L 535 635 L 530 720 L 480 715 Z",
  },
  {
    iso2: "SZ",
    name: "Eswatini",
    d: "M 565 695 L 580 695 L 580 710 L 565 710 Z",
  },
  {
    iso2: "LS",
    name: "Lesotho",
    d: "M 525 740 L 545 740 L 545 760 L 525 760 Z",
  },
  {
    iso2: "ZA",
    name: "South Africa",
    d: "M 440 735 L 565 700 L 575 740 L 540 810 L 460 805 Z",
  },
  {
    iso2: "MG",
    name: "Madagascar",
    d: "M 675 560 L 715 540 L 705 685 L 665 685 Z",
  },
  {
    iso2: "MU",
    name: "Mauritius",
    d: "M 760 635 A 8 8 0 1 1 760 645 A 8 8 0 1 1 760 635 Z",
  },
  {
    iso2: "SC",
    name: "Seychelles",
    d: "M 740 450 A 8 8 0 1 1 740 460 A 8 8 0 1 1 740 450 Z",
  },
  {
    iso2: "KM",
    name: "Comoros",
    d: "M 650 540 A 6 6 0 1 1 650 550 A 6 6 0 1 1 650 540 Z",
  },
];
