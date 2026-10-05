export type ImpactYear = 2023 | 2024 | 2025 | 2026;
export type YearFilter = ImpactYear | "All";

export type ImpactRecord = {
  id: string;
  year: ImpactYear;
  location: string;
  country: string;
  latitude: number;
  longitude: number;
  program: string;
  packages: number;
  beneficiaries: number;
  documentationUrl: string;
};

export const YEAR_FILTERS: YearFilter[] = [2023, 2024, 2025, 2026, "All"];

export const impactRecords: ImpactRecord[] = [
  { id: "gaza-23-food", year: 2023, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Paket Pangan", packages: 1800, beneficiaries: 7200, documentationUrl: "https://izi.or.id/" },
  { id: "gaza-24-meal", year: 2024, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Makanan Siap Saji", packages: 3200, beneficiaries: 12800, documentationUrl: "https://izi.or.id/" },
  { id: "gaza-25-water", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Air Bersih", packages: 980, beneficiaries: 4900, documentationUrl: "https://izi.or.id/" },
  { id: "north-23-medical", year: 2023, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Medis", packages: 760, beneficiaries: 3040, documentationUrl: "https://izi.or.id/" },
  { id: "north-24-food", year: 2024, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Paket Pangan", packages: 2100, beneficiaries: 8400, documentationUrl: "https://izi.or.id/" },
  { id: "north-26-shelter", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Shelter Darurat", packages: 420, beneficiaries: 1680, documentationUrl: "https://izi.or.id/" },
  { id: "deir-23-meal", year: 2023, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Makanan Siap Saji", packages: 1400, beneficiaries: 5600, documentationUrl: "https://izi.or.id/" },
  { id: "deir-24-food", year: 2024, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Paket Pangan", packages: 1850, beneficiaries: 7400, documentationUrl: "https://izi.or.id/" },
  { id: "deir-25-medical", year: 2025, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Bantuan Medis", packages: 640, beneficiaries: 2560, documentationUrl: "https://izi.or.id/" },
  { id: "khan-23-food", year: 2023, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Paket Pangan", packages: 1250, beneficiaries: 5000, documentationUrl: "https://izi.or.id/" },
  { id: "khan-24-meal", year: 2024, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Makanan Siap Saji", packages: 2600, beneficiaries: 10400, documentationUrl: "https://izi.or.id/" },
  { id: "khan-26-water", year: 2026, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Air Bersih", packages: 720, beneficiaries: 3600, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-23-medical", year: 2023, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Bantuan Medis", packages: 520, beneficiaries: 2080, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-24-food", year: 2024, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Paket Pangan", packages: 2300, beneficiaries: 9200, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-25-meal", year: 2025, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Makanan Siap Saji", packages: 1750, beneficiaries: 7000, documentationUrl: "https://izi.or.id/" },
  { id: "jordan-24-care", year: 2024, location: "Camp Yordania", country: "Yordania", latitude: 31.983, longitude: 35.961, program: "Paket Keluarga", packages: 830, beneficiaries: 3320, documentationUrl: "https://izi.or.id/" },
  { id: "jordan-25-edu", year: 2025, location: "Camp Yordania", country: "Yordania", latitude: 31.983, longitude: 35.961, program: "Dukungan Pendidikan", packages: 560, beneficiaries: 1120, documentationUrl: "https://izi.or.id/" },
  { id: "egypt-24-medical", year: 2024, location: "Mesir", country: "Mesir", latitude: 30.0444, longitude: 31.2357, program: "Bantuan Medis", packages: 900, beneficiaries: 3600, documentationUrl: "https://izi.or.id/" },
  { id: "egypt-26-food", year: 2026, location: "Mesir", country: "Mesir", latitude: 30.0444, longitude: 31.2357, program: "Paket Pangan", packages: 1100, beneficiaries: 4400, documentationUrl: "https://izi.or.id/" },
  { id: "lebanon-23-care", year: 2023, location: "Lebanon", country: "Lebanon", latitude: 33.8938, longitude: 35.5018, program: "Paket Keluarga", packages: 680, beneficiaries: 2720, documentationUrl: "https://izi.or.id/" },
  { id: "lebanon-25-food", year: 2025, location: "Lebanon", country: "Lebanon", latitude: 33.8938, longitude: 35.5018, program: "Paket Pangan", packages: 940, beneficiaries: 3760, documentationUrl: "https://izi.or.id/" },
  { id: "lebanon-26-winter", year: 2026, location: "Lebanon", country: "Lebanon", latitude: 33.8938, longitude: 35.5018, program: "Bantuan Musim Dingin", packages: 610, beneficiaries: 2440, documentationUrl: "https://izi.or.id/" },
];

export function filterRecords(year: YearFilter) {
  return year === "All" ? impactRecords : impactRecords.filter((record) => record.year === year);
}

export function summarizeRecords(records: ImpactRecord[]) {
  return {
    actionCount: records.length,
    beneficiaries: records.reduce((total, record) => total + record.beneficiaries, 0),
    packages: records.reduce((total, record) => total + record.packages, 0),
    countries: new Set(records.map((record) => record.country)).size,
  };
}