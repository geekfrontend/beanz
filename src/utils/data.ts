export interface IRecipe {
  name: string;
  materials: string[];
  steps: string[];
}

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  sideEffects: string[];
  recipes: IRecipe[];
}

export const coffees: ICoffee[] = [
  {
    id: 1,
    name: "Arabika",
    description:
      "Kopi Arabika adalah salah satu jenis kopi paling populer dan paling banyak dikonsumsi di dunia. Kopi Arabika ditemukan di daerah pegunungan Ethiopia dan disebarkan oleh pedagang Arab ke Yaman. Orang Arab mulai mempopulerkan biji kopi Arabika yang diekstrak dan diseduh dengan air panas sebagai minuman penyegar. Pada abad ke-15, popularitas kopi mulai menyebar ke Eropa. Awalnya, orang Eropa membeli kopi dari pedagang Arab. Kemudian, mereka berhasil membudidayakan tanaman tersebut di Asia dan Amerika. Sejak itu, kopi menjadi komoditas global yang sangat populer, bahkan sempat menjadi komoditas kedua terbesar setelah minyak.",
    sideEffects: [
      "Kecemasan dan Gelisah",
      "Detak Jantung Meningkat",
      "Gangguan Tidur",
      "Masalah Pencernaan",
      "Meningkatkan Mood",
    ],
    recipes: [
      {
        name: "Kopi Hitam",
        materials: [
          "1-2 sendok makan biji kopi Arabika yang baru digiling (sesuai dengan kekuatan rasa yang diinginkan)",
          "180-200 ml air panas (sekitar 90-95°C)",
        ],
        steps: [
          "Giling biji kopi: Gunakan penggiling kopi untuk menggiling biji Arabika sesuai dengan metode seduh (lebih kasar untuk French Press, lebih halus untuk pour-over).",
          "Didihkan air: Panaskan air hingga mendidih, lalu diamkan selama 30 detik agar suhunya turun sedikit (sekitar 90-95°C).",
          "Seduh kopi: Masukkan bubuk kopi ke dalam cangkir atau alat seduh seperti French Press, pour-over, atau V60. Perlahan tuangkan air panas ke atas kopi dan biarkan meresap.",
          "Aduk dan saring: Jika menggunakan French Press, tekan plunger setelah 3-4 menit. Untuk pour-over, biarkan air menetes sepenuhnya.",
          "Nikmati: Kopi Arabika siap dinikmati tanpa gula atau susu.",
        ],
      },
      {
        name: "Latte Arabika",
        materials: [
          "1 shot espresso (sekitar 30 ml kopi Arabika)",
          "200 ml susu",
        ],
        steps: [
          "Giling biji kopi Arabika hingga halus dan seduh menggunakan mesin espresso untuk mendapatkan 1 shot espresso (sekitar 30 ml).",
          "Panaskan susu hingga hangat dan buih susu menggunakan steam wand atau milk frother hingga terbentuk busa halus.",
          "Tuangkan espresso ke dalam cangkir, lalu tambahkan susu berbuih secara perlahan.",
          "Hias dengan latte art jika diinginkan dan sajikan segera.",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Robusta",
    description:
      "Kopi Robusta pertama kali ditemukan di Kongo pada tahun 1898 oleh seorang ahli botani Belgia. Robusta berasal dari Afrika, mencakup daerah seperti Kongo, Sudan, Liberia, dan Uganda. Kopi Robusta dikembangkan secara besar-besaran pada awal abad ke-20 oleh pemerintah kolonial Belanda di Indonesia. Dengan kandungan kafein yang lebih tinggi dan rasa yang lebih kuat, kopi Robusta sering digunakan dalam campuran kopi instan dan espresso. Meskipun kurang dihargai dibandingkan Arabika dalam hal rasa, Robusta tetap menjadi bagian penting dari industri kopi global.",
    sideEffects: [
      "Kecemasan dan Gelisah",
      "Detak Jantung Meningkat",
      "Gangguan Tidur",
      "Masalah Pencernaan",
      "Meningkatkan Mood",
    ],
    recipes: [
      {
        name: "Espresso Robusta",
        materials: ["1 shot espresso (30 ml kopi Robusta)"],
        steps: [
          "Giling biji kopi Robusta hingga halus.",
          "Gunakan mesin espresso untuk mengekstrak kopi dan dapatkan 1 shot (30 ml).",
          "Sajikan segera saat masih panas.",
        ],
      },
      {
        name: "Kopi Susu Robusta",
        materials: [
          "1 shot espresso (30 ml kopi Robusta)",
          "200 ml susu",
          "1-2 sendok teh gula (opsional)",
        ],
        steps: [
          "Seduh kopi Robusta menggunakan mesin espresso untuk mendapatkan 1 shot (30 ml).",
          "Panaskan susu hingga hangat, lalu tambahkan gula jika diinginkan.",
          "Campurkan espresso dengan susu yang sudah dipanaskan dan aduk rata.",
          "Sajikan dalam cangkir favorit Anda.",
        ],
      },
    ],
  },
];

export const getCoffeeByName = (name: string) => {
  return coffees.find(
    (coffee) => coffee.name.toLowerCase() === name.toLowerCase()
  );
};
