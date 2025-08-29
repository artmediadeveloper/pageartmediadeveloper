"use client";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";

// Premium single-file React site for Artmedia Developer
// TailwindCSS styling, Framer Motion micro-animations, responsive, accessible
// Includes: Home, Layanan (Services), Tentang, Kontak, Privacy Policy, Terms & Conditions

type NavLinkProps = {
  label: string;
  route: string;
  current: string;
  onNavigate: (route: string) => void;
};

const NavLink = ({ label, route, current, onNavigate }: NavLinkProps) => (
  <button
    onClick={() => onNavigate(route)}
    className={`px-3 py-2 rounded-xl text-sm md:text-base transition ${current === route
      ? "bg-gray-900 text-white shadow"
      : "text-gray-700 hover:bg-gray-100"
      }`}
    aria-current={current === route ? "page" : undefined}
  >
    {label}
  </button>
);

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm">
    {children}
  </span>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-3xl border bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition p-6 ${className}`}>
    {children}
  </div>
);

const Hero = ({ onNavigate }: { onNavigate: (route: string) => void }) => (
  <Section id="home">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Badge>
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Since 2015 • Malang, Indonesia
        </Badge>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Artmedia Developer
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Agensi konsultan digital yang membantu brand tumbuh melalui
          <span className="font-semibold text-gray-900"> manajemen software</span>,
          <span className="font-semibold text-gray-900"> pengembangan aplikasi</span>, dan
          <span className="font-semibold text-gray-900"> solusi perangkat GPS</span>.
          Kami menggabungkan pendekatan inovatif dengan hasil yang terukur.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => onNavigate("layanan")} className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium shadow hover:shadow-md">
            Lihat Layanan
          </button>
          <button onClick={() => onNavigate("kontak")} className="px-5 py-3 rounded-2xl border font-medium text-gray-900 hover:bg-gray-100">
            Konsultasi Gratis
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">Dipercaya startup hingga brand besar di Indonesia.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-gray-50 to-gray-200 border overflow-hidden shadow-inner">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl bg-white/70 backdrop-blur p-6 md:p-10 border shadow">
              <p className="text-gray-700 text-center max-w-sm">
                &quot;Kami membangun produk digital yang <span className="font-semibold">stabil</span>,
                <span className="font-semibold"> aman</span>, dan <span className="font-semibold">skalabel</span>—
                dari dashboard manajemen hingga aplikasi mobile dan sistem pelacakan berbasis GPS.&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
);

const LogoBar = () => (
  <Section id="logos">
    <div className="flex items-center justify-between gap-6 flex-wrap opacity-70">
      {["Techno", "AeroFleet", "GoRetail", "Finix", "LogiTrack"].map((brand) => (
        <div key={brand} className="text-sm md:text-base font-semibold tracking-wide">{brand}</div>
      ))}
    </div>
  </Section>
);

const Services = () => (
  <Section id="layanan">
    <div className="flex items-center justify-between gap-4 mb-8">
      <div>
        <Badge>Layanan Utama</Badge>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Solusi yang Kami Tawarkan</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Layanan end-to-end untuk mendorong pertumbuhan bisnis Anda.
        </p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <h3 className="text-xl font-semibold">Manajemen Software</h3>
        <p className="mt-2 text-gray-600">Audit, perencanaan roadmap, SLA, SLO, observabilitas, dan optimasi biaya cloud.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Governance & arsitektur</li>
          <li>Automasi CI/CD</li>
          <li>Keamanan & kepatuhan</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">Pengembangan Aplikasi</h3>
        <p className="mt-2 text-gray-600">Web, Android, iOS, dan backend API dengan performa tinggi.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Flutter, React, Node.js</li>
          <li>Desain sistem skalabel</li>
          <li>Pengujian & QA terstruktur</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">Solusi Perangkat GPS</h3>
        <p className="mt-2 text-gray-600">Pelacakan armada, integrasi sensor, dan dashboard real-time.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Instalasi & konfigurasi</li>
          <li>Server & aplikasi monitoring</li>
          <li>Integrasi ke ERP/Logistik</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">UI/UX & Brand Digital</h3>
        <p className="mt-2 text-gray-600">Riset pengguna, prototyping, dan design system yang konsisten.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Wireframe hingga high-fidelity</li>
          <li>Design tokens & komponen</li>
          <li>Audit aksesibilitas</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">Data & Analytics</h3>
        <p className="mt-2 text-gray-600">Pelaporan KPI yang terukur untuk keputusan berbasis data.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Dashboard eksekutif</li>
          <li>Pelacakan event & funnel</li>
          <li>Integrasi sumber data</li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold">Maintenance & Support</h3>
        <p className="mt-2 text-gray-600">Dukungan purna-jual, pemeliharaan berkala, dan peningkatan berkelanjutan.</p>
        <ul className="mt-4 text-gray-700 list-disc pl-5 space-y-1">
          <li>Support 8x5/24x7 sesuai paket</li>
          <li>Patch keamanan rutin</li>
          <li>Monitoring & alerting</li>
        </ul>
      </Card>
    </div>
  </Section>
);

const About = () => (
  <Section id="tentang">
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <Badge>Tentang Kami</Badge>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Mengubah tantangan jadi peluang</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Sejak 2015, tim profesional kreatif Artmedia Developer membantu klien meningkatkan kehadiran online,
          mengefisiensikan operasional, dan meraih hasil terukur. Kami mengedepankan kolaborasi,
          transparansi, dan eksekusi yang presisi.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <Card className="text-center">
            <div className="text-3xl font-extrabold">10+
            </div>
            <div className="text-xs text-gray-600">Tahun pengalaman</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-extrabold">100+
            </div>
            <div className="text-xs text-gray-600">Proyek terselesaikan</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-extrabold">A+</div>
            <div className="text-xs text-gray-600">Kepuasan klien</div>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <h3 className="text-lg font-semibold">Nilai Inti</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><span className="font-medium">Inovasi</span> — solusi kreatif berbasis teknologi.</li>
            <li><span className="font-medium">Keandalan</span> — hasil yang stabil & terukur.</li>
            <li><span className="font-medium">Kolaborasi</span> — komunikasi terbuka dan cepat.</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold">Teknologi Unggulan</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {["Flutter", "React", "Node.js", "NestJS", "PostgreSQL", "GCP/AWS", "Docker", "Kubernetes"].map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-gray-100 border">{t}</span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="kontak">
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <Badge>Kontak</Badge>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Mari diskusikan kebutuhan Anda</h2>
        <p className="mt-3 text-gray-600">Isi formulir atau hubungi kami melalui kontak berikut.
        </p>
        <div className="mt-6 space-y-2 text-gray-700">
          <div>
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:emailnyaartmedia@gmail.com" className="hover:underline">
              emailnyaartmedia@gmail.com
            </a>
          </div>
            <div>
            <span className="font-medium">Whatsapp:</span>{" "}
            <a
              href="https://wa.me/628563656307"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +62 85 6365 6307
            </a>
            </div>
          <div><span className="font-medium">Lokasi:</span> Malang, Indonesia</div>
        </div>
      </div>
      <Card>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const nama = (form.elements.namedItem("nama") as HTMLInputElement)?.value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
            const pesan = (form.elements.namedItem("pesan") as HTMLTextAreaElement)?.value;
            const text = encodeURIComponent(
              `Halo Artmedia Developer,\nSaya ingin konsultasi.\n*Nama:* ${nama}\n*Email:* ${email}\n*Pesan:* ${pesan}`
            );
            window.open(`https://wa.me/628563656307?text=${text}`, "_blank");
          }}
          className="space-y-4"
        >
          <div>
            <label className="text-sm text-gray-600">Nama</label>
            <input
              required
              type="text"
              name="nama"
              className="mt-1 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="email@perusahaan.com"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Pesan</label>
            <textarea
              required
              name="pesan"
              className="mt-1 w-full min-h-[120px] rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Ceritakan tantangan Anda..."
            />
          </div>
          <button className="w-full px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium shadow hover:shadow-md">
            Kirim
          </button>
        </form>
      </Card>
    </div>
  </Section>
);

const Privacy = () => (
  <Section id="privacy">
    <Badge>Kebijakan Privasi</Badge>
    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h2>
    <p className="mt-2 text-sm text-gray-500">Terakhir diperbarui: 21 Agustus 2025</p>
    <div className="mt-6 prose prose-gray max-w-none">
      <ol className="list-decimal">
        <li className="font-bold">Informasi yang Kami Kumpulkan</li>
        <ul className="list-none">
          <li>Kami dapat mengumpulkan data identitas (nama, email), data penggunaan situs, dan data teknis (IP, jenis perangkat, browser) untuk keperluan layanan dan peningkatan kualitas.</li>
        </ul>
        <li className="font-bold">Cara Kami Menggunakan Data</li>
        <ul className="list-none">
          <li>Menyediakan dan meningkatkan layanan.</li>
          <li>Komunikasi terkait penawaran, pembaruan, dan dukungan.</li>
          <li>Keamanan, pencegahan penipuan, dan kepatuhan hukum.</li>
        </ul>
        <li className="font-bold">Cookie & Pelacakan</li>
        <ul className="list-none">
          <li>Kami dapat menggunakan cookie/teknologi serupa untuk analitik dan personalisasi. Anda dapat mengatur preferensi melalui pengaturan browser.</li>
        </ul>
        <li className="font-bold">Berbagi Data</li>
        <ul className="list-none">
          <li>Kami tidak menjual data pribadi. Data dapat dibagikan dengan penyedia layanan tepercaya sesuai kebutuhan operasional dan peraturan yang berlaku.</li>
        </ul>
        <li className="font-bold">Keamanan</li>
        <ul className="list-none">
          <li>Kami menerapkan kontrol keamanan yang wajar untuk melindungi data, namun tidak ada sistem yang sepenuhnya aman.</li>
        </ul>
        <li className="font-bold">Hak Anda</li>
        <ul className="list-none">
          <li>Anda berhak mengakses, memperbarui, atau menghapus data pribadi Anda. Hubungi kami di contact@artmediadeveloper.com.</li>
        </ul>
        <li className="font-bold">Transfer Internasional</li>
        <ul className="list-none">
          <li>Jika pemrosesan melibatkan transfer lintas negara, kami akan memastikan perlindungan yang memadai sesuai regulasi.</li>
        </ul>
        <li className="font-bold">Perubahan Kebijakan</li>
        <ul className="list-none">
          <li>Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru akan ditampilkan di halaman ini.</li>
        </ul>
        <li className="font-bold">Kontak</li>
        <ul className="list-none">
          <li>Artmedia Developer, Malang, Indonesia — emailnyaartmedia@gmail.com</li>
        </ul>
      </ol>
    </div>
  </Section>
);

const Terms = () => (
  <Section id="terms">
    <Badge>Syarat & Ketentuan</Badge>
    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h2>
    <p className="mt-2 text-sm text-gray-500">Terakhir diperbarui: 21 Agustus 2025</p>
    <div className="mt-6 prose prose-gray max-w-none">
      <ol className="list-decimal">
        <li className="font-bold">Penerimaan</li>
        <ul className="list-none">
          <li>Dengan mengakses layanan/website Artmedia Developer, Anda setuju dengan Syarat & Ketentuan ini.</li>
        </ul>
        <li className="font-bold">Ruang Lingkup Layanan</li>
        <ul className="list-none">
          <li>Layanan mencakup manajemen software, pengembangan aplikasi, serta solusi perangkat GPS sesuai proposal/kontrak proyek.</li>
        </ul>
        <li className="font-bold">Hak Kekayaan Intelektual</li>
        <ul className="list-none">
          <li>Kode sumber, desain, dan materi lain yang dihasilkan selama proyek tunduk pada ketentuan hak milik sesuai perjanjian.</li>
        </ul>
        <li className="font-bold">Pembayaran & Penagihan</li>
        <ul className="list-none">
          <li>Skema pembayaran, milestone, dan denda keterlambatan diatur pada proposal/kontrak yang disepakati.</li>
        </ul>
        <li className="font-bold">Kerahasiaan</li>
        <ul className="list-none">
          <li>Kedua pihak wajib menjaga kerahasiaan informasi milik pihak lain selama dan setelah proyek berakhir.</li>
        </ul>
        <li className="font-bold">Batasan Tanggung Jawab</li>
        <ul className="list-none">
          <li>Artmedia Developer tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial. Total tanggung jawab dibatasi pada nilai proyek terkait.</li>
        </ul>
        <li className="font-bold">Kepatuhan & Penggunaan yang Dilarang</li>
        <ul className="list-none">
          <li>Pengguna dilarang menyalahgunakan layanan untuk aktivitas ilegal, termasuk namun tidak terbatas pada pelanggaran privasi, keamanan, dan hukum yang berlaku.</li>
        </ul>
        <li className="font-bold">Pengakhiran</li>
        <ul className="list-none">
          <li>Keduapihak dapat mengakhiri kerja sama sesuai syarat pada perjanjian, termasuk kewajiban pembayaran dan pengembalian aset.</li>
        </ul>
        <li className="font-bold">Hukum yang Berlaku</li>
        <ul className="list-none">
          <li>Syarat ini diatur oleh hukum Republik Indonesia. Sengketa akan diselesaikan secara musyawarah atau melalui mekanisme yang disepakati.</li>
        </ul>
        <li className="font-bold">Perubahan</li>
        <ul className="list-none">
          <li>Kami dapat memperbarui S&K dari waktu ke waktu. Versi terbaru berlaku sejak tanggal diperbarui.</li>
        </ul>
        <li className="font-bold">Kontak</li>
        <ul className="list-none">
          <li>Untuk pertanyaan terkait S&K, hubungi emailnyaartmedia@gmail.com.</li>
        </ul>
      </ol>
    </div>
  </Section>
);

const Footer = ({ onNavigate }: { onNavigate: (route: string) => void }) => (
  <footer className="border-t bg-white/70 backdrop-blur">
    <Section id="footer">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="text-lg font-bold">Artmedia Developer</div>
          <p className="mt-2 text-gray-600 text-sm">Agensi konsultan digital — Malang, Indonesia.</p>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="font-semibold">Perusahaan</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><button onClick={() => onNavigate("tentang")} className="hover:underline">Tentang</button></li>
              <li><button onClick={() => onNavigate("layanan")} className="hover:underline">Layanan</button></li>
              <li><button onClick={() => onNavigate("kontak")} className="hover:underline">Kontak</button></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><button onClick={() => onNavigate("privacy")} className="hover:underline">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate("terms")} className="hover:underline">Terms & Conditions</button></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Artmedia Developer. All rights reserved.</div>
        </div>
      </div>
    </Section>
  </footer>
);

export default function ArtmediaDeveloperSite() {
  const [route, setRoute] = useState("home");
  const onNavigate = (r: SetStateAction<string>) => setRoute(r);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(17,24,39,0.04),transparent_40%),linear-gradient(to_bottom,white,rgba(249,250,251,0.8))] text-gray-900">
      {/* Top Bar */}
      <div className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-bold">A</div>
            <div>
              <div className="font-extrabold tracking-tight text-lg">Artmedia Developer</div>
              <div className="text-xs text-gray-500">Digital Consulting • Malang</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink label="Beranda" route="home" current={route} onNavigate={onNavigate} />
            <NavLink label="Layanan" route="layanan" current={route} onNavigate={onNavigate} />
            <NavLink label="Tentang" route="tentang" current={route} onNavigate={onNavigate} />
            <NavLink label="Kontak" route="kontak" current={route} onNavigate={onNavigate} />
            <NavLink label="Privacy" route="privacy" current={route} onNavigate={onNavigate} />
            <NavLink label="Terms" route="terms" current={route} onNavigate={onNavigate} />
          </nav>
          <div className="md:hidden">
            <select
              className="border rounded-xl px-3 py-2"
              value={route}
              onChange={(e) => onNavigate(e.target.value)}
            >
              {["home", "layanan", "tentang", "kontak", "privacy", "terms"].map(r => (
                <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Route Switch */}
      {route === "home" && (
        <>
          <Hero onNavigate={onNavigate} />
          <LogoBar />
          <Services />
          <About />
          <Contact />
        </>
      )}
      {route === "layanan" && (
        <>
          <Services />
          <Contact />
        </>
      )}
      {route === "tentang" && <About />}
      {route === "kontak" && <Contact />}
      {route === "privacy" && <Privacy />}
      {route === "terms" && <Terms />}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
