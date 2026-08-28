import { Quote } from "lucide-react";

// Ganti isi array di bawah dengan testimoni asli dari pelanggan (dengan izin pelanggan).
// Setiap objek = satu kartu testimoni. Tambah/hapus baris untuk menambah/mengurangi jumlah kartu.

const testimonials = [
  {
    name: "Ibu Sri Wahyuni",
    role: "Kepala Sekolah, SDN 1 Sukoharjo",
    quote:
      "Pemesanan whiteboard untuk seluruh kelas prosesnya cepat dan hasilnya rapi. Tim APM juga sigap membantu menentukan ukuran yang pas untuk tiap ruangan.",
  },
  {
    name: "Bapak Andi Prasetyo",
    role: "Manajer Operasional, PT Sinar Abadi",
    quote:
      "Sudah dua kali order whiteboard magnetik untuk ruang meeting kantor. Kualitas materialnya awet dan pengirimannya sesuai jadwal yang dijanjikan.",
  },
  {
    name: "Bapak Hendra Kusuma",
    role: "Kontraktor Interior",
    quote:
      "Sebagai reseller, saya senang bekerja sama dengan APM karena harga bersaing dan bisa custom ukuran sesuai request klien saya.",
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {testimonials.map((t, i) => (
        <div key={i} className="flex flex-col rounded-xl border border-line bg-white p-5 shadow-sm sm:p-6">
          <Quote className="h-6 w-6 text-blue/40" strokeWidth={2} />
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
            {t.quote}
          </p>
          <div className="mt-4 border-t border-line pt-3">
            <p className="text-sm font-bold text-navy/70">{t.name}</p>
            <p className="text-xs text-ink/45">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
