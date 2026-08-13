import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Handle lead generation form submissions
  app.post('/api/leads', (req, res) => {
    try {
      const { fullName, gymName, city, location, phone, footfall, space } = req.body;
      const csvFilePath = path.join(process.cwd(), 'leads.csv');
      
      const fileExists = fs.existsSync(csvFilePath);
      
      const escapeCSV = (field: string) => {
        if (!field) return '';
        const stringField = String(field);
        if (stringField.includes(',') || stringField.includes('"') || stringField.includes('\n')) {
          return `"${stringField.replace(/"/g, '""')}"`;
        }
        return stringField;
      };

      const row = [fullName, gymName, city, location, phone, footfall, space]
        .map(escapeCSV)
        .join(',');

      if (!fileExists) {
        const header = 'Full Name,Gym Name,City,Location/Area,Phone Number,Average Daily Footfall,Has 3x3 Space\n';
        fs.writeFileSync(csvFilePath, header + row + '\n', 'utf8');
      } else {
        fs.appendFileSync(csvFilePath, row + '\n', 'utf8');
      }

      res.status(200).json({ success: true, message: 'Lead saved successfully.' });
    } catch (error) {
      console.error('Error saving lead:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Important: User has "base: '/the-protein-crate/'" in vite.config.ts
    // We should serve static files from that base path in production.
    app.use('/the-protein-crate', express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
