# Audit keamanan: skill Pascal Editor (NVIDIA SkillSpector)

- **Sumber**: https://github.com/pascalorg/editor, commit `8d30333a0cdff47a9e7109237fef44db8f27fc70` (MIT)
- **Pemindai**: NVIDIA SkillSpector (dipasang dari https://github.com/NVIDIA/SkillSpector), mode `--no-llm`, yaitu analisis statis saja
- **Tanggal**: 2026-11-22
- **Laporan mentah**: `architect.json`, `furniture-fit.json`, `pascal-3d.json`, `dev-skills.json` di folder ini

## Hasil per skill

| Skill | Skor risiko | Rekomendasi pemindai | Temuan |
|---|---|---|---|
| `architect` | 0 / LOW | SAFE | tidak ada |
| `furniture-fit` | 24 / MEDIUM | CAUTION | PE3 (HIGH), RP1 (MEDIUM) |
| `pascal-3d` | 36 / MEDIUM | CAUTION | PE3 (HIGH), RP1 (MEDIUM), EA2 ×2 (MEDIUM) |
| `.agents/skills` (open-pr, review-architecture, khusus developer repo; **tidak dipasang**) | 0 / LOW | SAFE | tidak ada |

## Verifikasi manual tiap temuan

| ID | Lokasi | Yang ditandai | Hasil pemeriksaan | Status |
|---|---|---|---|---|
| PE3 Credential Access | `references/setup.md` (kedua skill) | teks `~/.claude/.credentials.json` | Hanya kalimat dokumentasi yang menyebutkan bahwa Claude Code menyimpan API key Pascal di keychain OS, dengan file itu sebagai cadangan. Tidak ada instruksi untuk membaca, menyalin, atau mengirim file tersebut. | False positive |
| RP1 MCP rug pull | `references/setup.md` (kedua skill) | `npx ENOENT` | Yang cocok adalah pesan error `spawn npx ENOENT`. Perintah yang sebenarnya dipakai sudah dipin ke versi tertentu: `npx --yes --package=@pascal-app/cli@1.1.6 pascal mcp connect`. | False positive |
| EA2 Autonomous decision | `pascal-3d/SKILL.md:86`, `references/tool-workflows.md:56` | "do not ask the user" / "without asking" | Konteksnya: jika tab editor sedang sibuk (`editor_tab_busy`), tunggu beberapa detik lalu ulangi panggilan. Ini bukan aksi destruktif, finansial, atau berdampak besar. Skill yang sama justru melarang publish, memakai kredit, atau membuat akun tanpa izin pengguna. | Tidak berisiko |

**Kesimpulan**: tidak ditemukan pola berbahaya yang nyata. Skill `pascal-3d`, `furniture-fit`, dan `architect` dipasang ke `.claude/skills/`.

## Batasan audit

1. Hanya tahap statis yang dijalankan. Tahap semantik berbasis LLM (`skillspector scan` tanpa `--no-llm`) memerlukan kredensial provider dan **belum dijalankan**.
2. Pemindaian hanya mencakup isi skill (markdown, evals, contoh). Paket npm `@pascal-app/cli@1.1.6`, yang dijalankan oleh MCP dan mengunduh runtime editor web ke `~/.pascal/runtime`, **tidak** diaudit oleh SkillSpector. Paket ini dipin ke versi 1.1.6 di `.mcp.json` (integritas npm `sha512-tEFcoIpWEUPOLidzRoUrbHG2+ohF8H5/3JvbgQ7P1i59EKnyN4TF9OIRaX7L2xrDPy7luJqDhJHFQCdD1R2DjA==`).
3. Mode lokal Pascal tidak mengunggah data. Endpoint hosted (`editor.pascal.app`) tidak dikonfigurasi.
