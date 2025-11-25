export default function HomePage() {
  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-icon">Ni</div>
            <div>
              <div className="brand-text">Nadnad Invest</div>
              <div className="brand-sub">Grow with confidence</div>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#paket">Paket</a>
            <a href="#cara-kerja">Cara Kerja</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#testimoni">Testimoni</a>
          </nav>
          <div>
            <button
              className="btn-nav"
              onClick={() => (window.location.href = '/dashboard')}
            >
              Demo Dashboard
            </button>
            <button className="btn-nav btn-nav-primary">Daftar</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-badge">
              ⭐ Platform simulasi investasi elegan untuk pemula
            </div>
            <h1 className="hero-title">
              Kelola rencana keuanganmu
              <span> dengan gaya yang elegan.</span>
            </h1>
            <p className="hero-sub">
              Nadnad Invest membantu kamu merancang alokasi investasi secara rapi,
              tanpa harus paham istilah rumit. Fokus ke tujuan, bukan kebingungan.
            </p>
            <div className="hero-actions">
              <button className="btn-main">Mulai di Nadnad Invest</button>
              <button
                className="btn-ghost"
                onClick={() => {
                  const el = document.getElementById('paket');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat paket simulasi
              </button>
            </div>
            <div className="hero-meta">
              <span>
                <strong>Rapi:</strong> Paket disusun sesuai tujuan
              </span>
              <span>
                <strong>Elegan:</strong> Tampilan bersih dan tenang
              </span>
              <span>
                <strong>Simulasi:</strong> Aman untuk belajar dulu
              </span>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-title">Simulasi paket “Stabil Elegan”</div>
              <span className="pill-safe">Profil konservatif</span>
            </div>
            <div className="hero-card-amount">Rp 185.000.000</div>
            <p className="hero-card-caption">
              Ilustrasi nilai portofolio setelah 8 tahun, dengan setoran rutin dan
              asumsi pertumbuhan stabil.
              <br />
              Ini bukan jaminan hasil, hanya contoh simulasi.
            </p>
            <div className="hero-card-grid">
              <div className="mini-stat">
                <div className="mini-label">Setoran bulanan</div>
                <div className="mini-value">Rp 750.000</div>
              </div>
              <div className="mini-stat">
                <div className="mini-label">Durasi rencana</div>
                <div className="mini-value">8 tahun</div>
              </div>
              <div className="mini-stat">
                <div className="mini-label">Profil risiko</div>
                <div className="mini-value">Konservatif</div>
                <div className="risk-bar">
                  <div className="risk-fill" />
                </div>
              </div>
              <div className="mini-stat">
                <div className="mini-label">Komposisi</div>
                <div className="mini-value">
                  Pasar uang &amp; pendapatan tetap
                </div>
              </div>
            </div>
            <div className="hero-card-footer">
              Gunakan simulasi ini untuk memahami pola, bukan untuk mengejar angka pasti.
            </div>
          </aside>
        </div>
      </section>

      <section id="paket">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Paket simulasi</div>
            <h2 className="section-title">Pilih gaya investasimu</h2>
            <p className="section-subtitle">
              Nadnad Invest menyusun paket simulasi agar kamu bisa belajar menyusun rencana
              sebelum benar-benar menempatkan dana.
            </p>
          </div>

          <div className="package-grid">
            <article className="card">
              <div>
                <div className="chip">Konservatif</div>
                <h3 className="card-title">Stabil Elegan</h3>
                <p className="card-text">
                  Cocok untuk dana darurat dan tujuan jangka pendek. Lebih tenang,
                  fluktuasi relatif kecil.
                </p>
                <div className="card-meta">
                  Minimal simulasi: <strong>Rp 100.000</strong>
                  <br />
                  Tenor rencana: 1 – 3 tahun
                </div>
              </div>
              <div className="package-footer">
                <div className="price">Rp 100.000+</div>
                <button className="btn-small">Lihat detail</button>
              </div>
            </article>

            <article className="card">
              <div>
                <div className="chip">Moderate</div>
                <h3 className="card-title">Rencana Pendidikan</h3>
                <p className="card-text">
                  Dirancang untuk biaya pendidikan anak / diri sendiri. Risiko seimbang,
                  horizon menengah.
                </p>
                <div className="card-meta">
                  Minimal simulasi: <strong>Rp 250.000</strong>
                  <br />
                  Tenor rencana: 5 – 10 tahun
                </div>
              </div>
              <div className="package-footer">
                <div className="price">Rp 250.000+</div>
                <button className="btn-small">Lihat detail</button>
              </div>
            </article>

            <article className="card">
              <div>
                <div className="chip">Agresif elegan</div>
                <h3 className="card-title">Pensiun Mandiri</h3>
                <p className="card-text">
                  Untuk kamu yang siap bermain jangka panjang, dengan toleransi fluktuasi
                  lebih besar.
                </p>
                <div className="card-meta">
                  Minimal simulasi: <strong>Rp 500.000</strong>
                  <br />
                  Tenor rencana: 10+ tahun
                </div>
              </div>
              <div className="package-footer">
                <div className="price">Rp 500.000+</div>
                <button className="btn-small">Lihat detail</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="cara-kerja">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Alur sederhana</div>
            <h2 className="section-title">Cara kerja Nadnad Invest</h2>
            <p className="section-subtitle">
              Dibuat simpel supaya kamu bisa fokus ke kebiasaan, bukan pusing teknis.
            </p>
          </div>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-title">Buat akun &amp; pilih tujuan</div>
              <p className="step-text">
                Tentukan fokusmu: dana darurat, pendidikan, atau pensiun. Tujuan akan
                mempengaruhi gaya simulasi.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-title">Pilih paket simulasi</div>
              <p className="step-text">
                Bandingkan profil risiko &amp; tenor. Lihat gambaran skenario tanpa perlu setor
                dana sungguhan dulu.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-title">Rancang kebiasaan setoran</div>
              <p className="step-text">
                Atur berapa yang ideal kamu sisihkan per bulan. Lihat dampaknya terhadap
                nilai rencana ke depan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="keunggulan">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Kenapa Nadnad</div>
            <h2 className="section-title">Elegan, terstruktur, dan manusiawi</h2>
            <p className="section-subtitle">
              Nadnad Invest tidak mengejar sensasi profit, tapi membantu kamu membangun
              pola pikir dan struktur yang sehat.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-title">Fokus ke rencana, bukan hype</div>
              <p>
                Alih-alih memajang angka cuan berlebihan, Nadnad Invest menekankan
                perencanaan yang rasional dan berkelanjutan.
              </p>
            </div>
            <div className="why-card">
              <div className="why-title">Tampilan tenang &amp; minimalis</div>
              <p>
                Desain yang bersih dan elegan membuat proses mengelola rencana keuangan
                terasa lebih tertata, tidak bising.
              </p>
            </div>
            <div className="why-card">
              <div className="why-title">Ramah pemula maupun berpengalaman</div>
              <p>
                Baik yang baru mulai belajar maupun yang ingin merapikan portofolio, bisa
                menggunakan simulasi yang sama.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Testimoni</div>
            <h2 className="section-title">Apa kata para pengguna awal</h2>
            <p className="section-subtitle">
              Pengalaman mereka hanyalah contoh, bukan janji hasil. Yang paling penting
              adalah proses dan konsistensi.
            </p>
          </div>

          <div className="testimonials">
            <article className="testimonial-card">
              <p>
                “Awalnya aku takut duluan setiap dengar kata investasi. Di Nadnad Invest,
                semuanya dijelaskan pelan-pelan, pakai bahasa yang enak dipahami.”
              </p>
              <div className="testimonial-name">Dita, 28 tahun</div>
              <div className="testimonial-role">Karyawan swasta</div>
            </article>
            <article className="testimonial-card">
              <p>
                “Yang aku suka, tampilannya nggak heboh. Aku jadi bisa mikir jernih tentang
                tujuan keuangan, bukan cuma ngejar angka besar dalam semalam.”
              </p>
              <div className="testimonial-name">Rendy, 32 tahun</div>
              <div className="testimonial-role">Freelancer</div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta">
            <div>
              <div className="cta-title">
                Siap mulai merapikan rencana investasimu?
              </div>
              <div className="cta-sub">
                Buat akun di Nadnad Invest, pilih paket simulasi yang paling pas, lalu
                lihat bagaimana kebiasaan kecil membentuk hasil besar.
              </div>
            </div>
            <div className="cta-actions">
              <button className="btn-cta-main">Daftar Sekarang</button>
              <button
                className="btn-cta-outline"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Lihat Demo Tampilan
              </button>
            </div>
          </div>

          <div className="disclaimer">
            <strong>Disclaimer penting:</strong> Halaman ini menggambarkan konsep
            platform &amp; simulasi investasi. Bukan ajakan menempatkan dana atau janji
            keuntungan. Selalu sesuaikan keputusan keuangan dengan kondisi pribadimu.
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Nadnad Invest. All rights reserved.</div>
          <div className="footer-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat &amp; Ketentuan</a>
            <a href="#">Kontak</a>
          </div>
        </div>
      </footer>
    </>
  );
}
