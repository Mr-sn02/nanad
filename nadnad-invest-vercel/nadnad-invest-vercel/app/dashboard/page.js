export default function DashboardPage() {
  return (
    <main className="dashboard-wrapper">
      <header className="dashboard-header">
        <div>
          <div className="dashboard-title">Dashboard simulasi Nadnad Invest</div>
          <div className="dashboard-sub">
            Contoh tampilan ketika pengguna sudah masuk dan mulai bermain dengan simulasi.
          </div>
        </div>
        <div className="dashboard-user">
          Demo user: <strong>Bang Son</strong>
        </div>
      </header>

      <section className="dashboard-grid">
        <div className="card">
          <h2 className="dashboard-card-title">Ringkasan paket simulasi</h2>
          <p className="dashboard-card-sub">
            Pengguna bisa memilih paket dan mencoba berbagai nominal setoran.
          </p>

          <div className="package-grid">
            <article className="card" style={{ boxShadow: 'none' }}>
              <div>
                <div className="chip">Konservatif</div>
                <div className="card-title">Stabil Elegan</div>
                <p className="card-text">
                  Fokus ke kestabilan, cocok untuk dana darurat dan tujuan 1–3 tahun.
                </p>
                <div className="card-meta">
                  Minimal: <strong>Rp 100.000</strong>
                  <br />
                  Tenor: 3 tahun
                </div>
              </div>
              <div className="package-footer">
                <div className="price">Rp 100.000+</div>
                <button className="btn-small">Simulasikan</button>
              </div>
            </article>

            <article className="card" style={{ boxShadow: 'none' }}>
              <div>
                <div className="chip">Moderate</div>
                <div className="card-title">Rencana Pendidikan</div>
                <p className="card-text">
                  Menjaga keseimbangan antara pertumbuhan dan risiko untuk biaya sekolah.
                </p>
                <div className="card-meta">
                  Minimal: <strong>Rp 250.000</strong>
                  <br />
                  Tenor: 8 tahun
                </div>
              </div>
              <div className="package-footer">
                <div className="price">Rp 250.000+</div>
                <button className="btn-small">Simulasikan</button>
              </div>
            </article>
          </div>
        </div>

        <div className="card">
          <h2 className="dashboard-card-title">Riwayat simulasi terakhir</h2>
          <p className="dashboard-card-sub">
            Data di bawah hanya contoh tampilan, belum terhubung database.
          </p>

          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Paket</th>
                  <th>Profil</th>
                  <th>Nominal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>25 Nov 2025, 10:24</td>
                  <td>Stabil Elegan</td>
                  <td>Konservatif</td>
                  <td>Rp 750.000</td>
                </tr>
                <tr>
                  <td>25 Nov 2025, 09:52</td>
                  <td>Rencana Pendidikan</td>
                  <td>Moderate</td>
                  <td>Rp 500.000</td>
                </tr>
                <tr>
                  <td>24 Nov 2025, 20:10</td>
                  <td>Pensiun Mandiri</td>
                  <td>Agresif</td>
                  <td>Rp 1.500.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="dashboard-empty">
            Di versi produksi, bagian ini akan terisi dari data backend (riil).
          </p>
        </div>
      </section>
    </main>
  );
}
