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

// Data resmi IZI (Excel) — total 67 aksi, 485.716 penerima manfaat, 577.813 paket (2023–2026).
export const impactRecords: ImpactRecord[] = [
  // ===== 2023 — 10 aksi, 358.152 PM, 229.996 paket =====
  { id: "deir-23-1", year: 2023, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Logistik Kemanusiaan Deir El Balah", packages: 459, beneficiaries: 715, documentationUrl: "https://izi.or.id/" },
  { id: "deir-23-2", year: 2023, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Logistik Kemanusiaan Deir El Balah", packages: 459, beneficiaries: 715, documentationUrl: "https://izi.or.id/" },
  { id: "khan-23-1", year: 2023, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Bantuan Pangan Khan Younis", packages: 603, beneficiaries: 940, documentationUrl: "https://izi.or.id/" },
  { id: "khan-23-2", year: 2023, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Bantuan Pangan Khan Younis", packages: 604, beneficiaries: 940, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-23-1", year: 2023, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 54978, beneficiaries: 85611, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-23-2", year: 2023, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 54978, beneficiaries: 85611, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-23-3", year: 2023, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 54978, beneficiaries: 85611, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-23-4", year: 2023, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 54978, beneficiaries: 85610, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-23-1", year: 2023, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Bantuan Pangan Rafah", packages: 3980, beneficiaries: 6200, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-23-2", year: 2023, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Bantuan Pangan Rafah", packages: 3979, beneficiaries: 6199, documentationUrl: "https://izi.or.id/" },

  // ===== 2024 — 10 aksi, 28.244 PM, 190.544 paket =====
  { id: "deir-24-1", year: 2024, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Logistik Kemanusiaan Deir El Balah", packages: 17325, beneficiaries: 2567, documentationUrl: "https://izi.or.id/" },
  { id: "deir-24-2", year: 2024, location: "Deir El Balah", country: "Palestina", latitude: 31.418, longitude: 34.35, program: "Logistik Kemanusiaan Deir El Balah", packages: 17324, beneficiaries: 2567, documentationUrl: "https://izi.or.id/" },
  { id: "selatan-24-1", year: 2024, location: "Gaza Selatan", country: "Palestina", latitude: 31.3, longitude: 34.27, program: "Bantuan Kemanusiaan Gaza Selatan", packages: 3374, beneficiaries: 500, documentationUrl: "https://izi.or.id/" },
  { id: "utara-24-1", year: 2024, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 41844, beneficiaries: 6204, documentationUrl: "https://izi.or.id/" },
  { id: "utara-24-2", year: 2024, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 41844, beneficiaries: 6203, documentationUrl: "https://izi.or.id/" },
  { id: "utara-24-3", year: 2024, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 41844, beneficiaries: 6203, documentationUrl: "https://izi.or.id/" },
  { id: "khan-24-1", year: 2024, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Bantuan Pangan Khan Younis", packages: 8434, beneficiaries: 1250, documentationUrl: "https://izi.or.id/" },
  { id: "khan-24-2", year: 2024, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Bantuan Pangan Khan Younis", packages: 8433, beneficiaries: 1250, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-24-1", year: 2024, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Bantuan Pangan Rafah", packages: 5061, beneficiaries: 750, documentationUrl: "https://izi.or.id/" },
  { id: "rafah-24-2", year: 2024, location: "Rafah", country: "Palestina", latitude: 31.2968, longitude: 34.2435, program: "Bantuan Pangan Rafah", packages: 5061, beneficiaries: 750, documentationUrl: "https://izi.or.id/" },

  // ===== 2025 — 26 aksi, 83.985 PM, 59.494 paket =====
  { id: "gazacity-25-1", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Bantuan Kemanusiaan Gaza City", packages: 2196, beneficiaries: 3100, documentationUrl: "https://izi.or.id/" },
  { id: "gazacity-25-2", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Bantuan Kemanusiaan Gaza City", packages: 2195, beneficiaries: 3100, documentationUrl: "https://izi.or.id/" },
  { id: "gazacity-25-3", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Bantuan Kemanusiaan Gaza City", packages: 2195, beneficiaries: 3099, documentationUrl: "https://izi.or.id/" },
  { id: "gazacity-25-4", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Bantuan Kemanusiaan Gaza City", packages: 2195, beneficiaries: 3099, documentationUrl: "https://izi.or.id/" },
  { id: "gazacity-25-5", year: 2025, location: "Gaza City", country: "Palestina", latitude: 31.5017, longitude: 34.4668, program: "Bantuan Kemanusiaan Gaza City", packages: 2196, beneficiaries: 3099, documentationUrl: "https://izi.or.id/" },
  { id: "utara-25-1", year: 2025, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 2480, beneficiaries: 3503, documentationUrl: "https://izi.or.id/" },
  { id: "utara-25-2", year: 2025, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 2480, beneficiaries: 3503, documentationUrl: "https://izi.or.id/" },
  { id: "utara-25-3", year: 2025, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 2480, beneficiaries: 3502, documentationUrl: "https://izi.or.id/" },
  { id: "utara-25-4", year: 2025, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 2479, beneficiaries: 3502, documentationUrl: "https://izi.or.id/" },
  { id: "yordania-25-1", year: 2025, location: "Camp Yordania", country: "Yordania", latitude: 31.983, longitude: 35.961, program: "Dukungan Pengungsi Kamp Yordania", packages: 1705, beneficiaries: 2407, documentationUrl: "https://izi.or.id/" },
  { id: "yordania-25-2", year: 2025, location: "Camp Yordania", country: "Yordania", latitude: 31.983, longitude: 35.961, program: "Dukungan Pengungsi Kamp Yordania", packages: 1705, beneficiaries: 2407, documentationUrl: "https://izi.or.id/" },
  { id: "yordania-25-3", year: 2025, location: "Camp Yordania", country: "Yordania", latitude: 31.983, longitude: 35.961, program: "Dukungan Pengungsi Kamp Yordania", packages: 1705, beneficiaries: 2406, documentationUrl: "https://izi.or.id/" },
  { id: "mesir-25-1", year: 2025, location: "Camp Mesir", country: "Mesir", latitude: 30.0444, longitude: 31.2357, program: "Dukungan Pengungsi Kamp Mesir", packages: 1105, beneficiaries: 1560, documentationUrl: "https://izi.or.id/" },
  { id: "mesir-25-2", year: 2025, location: "Camp Mesir", country: "Mesir", latitude: 30.0444, longitude: 31.2357, program: "Dukungan Pengungsi Kamp Mesir", packages: 1105, beneficiaries: 1560, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-1", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4656, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-2", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4656, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-3", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4656, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-4", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4656, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-5", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4656, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-6", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4655, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-7", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4655, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-8", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4655, documentationUrl: "https://izi.or.id/" },
  { id: "konsorsium-25-9", year: 2025, location: "Palestina Konsorsium", country: "Palestina", latitude: 31.45, longitude: 34.4, program: "Program Konsorsium Kemanusiaan Palestina", packages: 3298, beneficiaries: 4655, documentationUrl: "https://izi.or.id/" },
  { id: "beitlahia-25-1", year: 2025, location: "Beit Lahia & Jabalia", country: "Palestina", latitude: 31.5486, longitude: 34.4947, program: "Bantuan Kemanusiaan Beit Lahia & Jabalia", packages: 531, beneficiaries: 746, documentationUrl: "https://izi.or.id/" },
  { id: "beitlahia-25-2", year: 2025, location: "Beit Lahia & Jabalia", country: "Palestina", latitude: 31.5486, longitude: 34.4947, program: "Bantuan Kemanusiaan Beit Lahia & Jabalia", packages: 530, beneficiaries: 746, documentationUrl: "https://izi.or.id/" },
  { id: "beitlahia-25-3", year: 2025, location: "Beit Lahia & Jabalia", country: "Palestina", latitude: 31.5486, longitude: 34.4947, program: "Bantuan Kemanusiaan Beit Lahia & Jabalia", packages: 530, beneficiaries: 746, documentationUrl: "https://izi.or.id/" },

  // ===== 2026 — 21 aksi, 15.335 PM, 97.779 paket =====
  { id: "gazacitysr-26-1", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7365, beneficiaries: 1155, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-2", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1155, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-3", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1154, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-4", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1154, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-5", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1154, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-6", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1154, documentationUrl: "https://izi.or.id/" },
  { id: "gazacitysr-26-7", year: 2026, location: "Gaza City & Sheikh Radwan", country: "Palestina", latitude: 31.518, longitude: 34.45, program: "Bantuan Kemanusiaan Sheikh Radwan", packages: 7364, beneficiaries: 1154, documentationUrl: "https://izi.or.id/" },
  { id: "utara-26-1", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 6408, beneficiaries: 1005, documentationUrl: "https://izi.or.id/" },
  { id: "utara-26-2", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 6408, beneficiaries: 1005, documentationUrl: "https://izi.or.id/" },
  { id: "utara-26-3", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 6407, beneficiaries: 1005, documentationUrl: "https://izi.or.id/" },
  { id: "utara-26-4", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 6407, beneficiaries: 1005, documentationUrl: "https://izi.or.id/" },
  { id: "utara-26-5", year: 2026, location: "Gaza Utara", country: "Palestina", latitude: 31.551, longitude: 34.497, program: "Bantuan Kemanusiaan Gaza Utara", packages: 6407, beneficiaries: 1004, documentationUrl: "https://izi.or.id/" },
  { id: "selatanalmatahin-26-1", year: 2026, location: "Gaza Selatan & Almatahin", country: "Palestina", latitude: 31.285, longitude: 34.26, program: "Bantuan Kemanusiaan Al-Mawasi", packages: 2914, beneficiaries: 457, documentationUrl: "https://izi.or.id/" },
  { id: "selatanalmatahin-26-2", year: 2026, location: "Gaza Selatan & Almatahin", country: "Palestina", latitude: 31.285, longitude: 34.26, program: "Bantuan Kemanusiaan Al-Mawasi", packages: 2914, beneficiaries: 457, documentationUrl: "https://izi.or.id/" },
  { id: "selatanalmatahin-26-3", year: 2026, location: "Gaza Selatan & Almatahin", country: "Palestina", latitude: 31.285, longitude: 34.26, program: "Bantuan Kemanusiaan Al-Mawasi", packages: 2913, beneficiaries: 457, documentationUrl: "https://izi.or.id/" },
  { id: "azzawaida-26-1", year: 2026, location: "Azzawaida & Deir El Balah", country: "Palestina", latitude: 31.41, longitude: 34.37, program: "Bantuan Kemanusiaan Az-Zawayda", packages: 1212, beneficiaries: 190, documentationUrl: "https://izi.or.id/" },
  { id: "azzawaida-26-2", year: 2026, location: "Azzawaida & Deir El Balah", country: "Palestina", latitude: 31.41, longitude: 34.37, program: "Bantuan Kemanusiaan Az-Zawayda", packages: 1212, beneficiaries: 190, documentationUrl: "https://izi.or.id/" },
  { id: "azzawaida-26-3", year: 2026, location: "Azzawaida & Deir El Balah", country: "Palestina", latitude: 31.41, longitude: 34.37, program: "Bantuan Kemanusiaan Az-Zawayda", packages: 1211, beneficiaries: 190, documentationUrl: "https://izi.or.id/" },
  { id: "lebanon-26-1", year: 2026, location: "Camp Lebanon", country: "Lebanon", latitude: 33.8938, longitude: 35.5018, program: "Dukungan Pengungsi Kamp Lebanon", packages: 797, beneficiaries: 125, documentationUrl: "https://izi.or.id/" },
  { id: "lebanon-26-2", year: 2026, location: "Camp Lebanon", country: "Lebanon", latitude: 33.8938, longitude: 35.5018, program: "Dukungan Pengungsi Kamp Lebanon", packages: 797, beneficiaries: 125, documentationUrl: "https://izi.or.id/" },
  { id: "khan-26-1", year: 2026, location: "Khan Younis", country: "Palestina", latitude: 31.3462, longitude: 34.3063, program: "Bantuan Pangan Khan Younis", packages: 223, beneficiaries: 40, documentationUrl: "https://izi.or.id/" },
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

/** Formats a beneficiary count for compact display on map marker badges, e.g. 342.443 → "342rb". */
export function formatCompactBeneficiaries(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}jt`;
  if (value >= 1_000) return `${Math.round(value / 1000)}rb`;
  return `${value}`;
}
