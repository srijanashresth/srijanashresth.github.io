import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets from the root directory
app.use(express.static(__dirname));

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Redirect legacy page URLs to their single-page anchor sections
app.get(['/about', '/about.html', '/personal-profile', '/personal-profile.html'], (req, res) => {
  res.redirect(301, '/#about');
});

app.get(['/publications', '/publications.html'], (req, res) => {
  res.redirect(301, '/#publications');
});

app.get(['/resume', '/resume.html', '/cv'], (req, res) => {
  res.redirect(301, '/SrijanaShresthaResume.pdf');
});

app.get(['/experience', '/experience.html'], (req, res) => {
  res.redirect(301, '/#experience');
});

app.get(['/education', '/education.html'], (req, res) => {
  res.redirect(301, '/#education');
});

app.get(['/skills', '/skills.html'], (req, res) => {
  res.redirect(301, '/#skills');
});

app.get(['/projects', '/projects.html'], (req, res) => {
  res.redirect(301, '/#projects');
});

app.get(['/teaching', '/teaching.html'], (req, res) => {
  res.redirect(301, '/#teaching');
});

// Image alias redirects to single canonical files
app.get(['/earth_banner.jpg', '/earth_banner', '/earth-banner'], (req, res) => {
  res.redirect(301, '/earth-banner.jpg');
});

app.get(['/square headshot.jpg', '/square%20headshot.jpg', '/square-headshot.jpg'], (req, res) => {
  res.redirect(301, '/headshot.jpg');
});

// Fallback all other GET routes to index.html for pure single-page experience
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
