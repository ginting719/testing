# Goods Receiving Training Hub

Sebuah dasbor web interaktif yang menyediakan tutorial untuk proses penerimaan barang melalui video, slide, presentasi, dan bagian Tanya Jawab.

---

## 🚀 Deployment ke GitHub Pages

Proyek ini dikonfigurasi untuk deployment otomatis yang mudah ke GitHub Pages.

### **PENTING: Konfigurasi Satu Kali**

Agar situs Anda dapat tayang, Anda **wajib** mengkonfigurasi repository Anda. **Langkah ini hanya perlu dilakukan sekali.**

1.  **Tunggu Workflow Selesai:**
    *   Setelah Anda melakukan push ke branch `main`, tunggu beberapa menit hingga workflow "Deploy static content to Pages" selesai. Anda bisa memeriksanya di tab **Actions**.
    *   Workflow ini akan membuat branch baru bernama `gh-pages` yang berisi file-file website yang sudah jadi.

2.  **Buka Pengaturan Pages:**
    *   Buka repository Anda di GitHub.
    *   Klik tab **Settings** (Pengaturan).
    *   Di menu sebelah kiri, klik **Pages**.

3.  **Atur Sumber Deployment:**
    *   Di bawah bagian "Build and deployment", pada menu dropdown "Source", pilih **Deploy from a branch**.
    *   Di bawah "Branch", pilih branch `gh-pages` dan biarkan folder diatur ke `/ (root)`.
    *   Klik **Save**.

    

Setelah Anda menyimpan, tunggu beberapa saat, dan situs Anda akan tersedia di URL yang ditampilkan di halaman pengaturan Pages.

### Akses Situs Anda

URL situs Anda akan menjadi:
`https://ginting719.github.io/receiving-journey/`

---

### 🚨 Troubleshooting

**Situs menampilkan halaman kosong (blank page) atau error 404:**

Ini biasanya berarti pengaturan Pages Anda belum benar.
1.  Pastikan Anda telah menunggu workflow di tab **Actions** selesai dan branch `gh-pages` sudah ada.
2.  Periksa kembali pengaturan Pages Anda dan pastikan branch yang dipilih adalah `gh-pages` (bukan `main`).
