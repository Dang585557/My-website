import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/getVideo', (req, res) => {
  const videoURL = req.query.url;
  if (!videoURL || !videoURL.startsWith('http')) {
    return res.status(400).json({ error: 'URL ไม่ถูกต้อง' });
  }

  const cmd = `yt-dlp -J "${videoURL}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('เกิดข้อผิดพลาด:', stderr);
      return res.status(500).json({ error: 'ไม่สามารถดึงวิดีโอได้' });
    }

    try {
      const data = JSON.parse(stdout);
      const formats = data.formats
        .filter(f => f.ext === 'mp4' && f.url)
        .map(f => ({
          url: f.url,
          height: f.height,
          format_note: f.format_note
        }));

      res.json({ formats });
    } catch (err) {
      res.status(500).json({ error: 'แปลงข้อมูลไม่ได้' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
