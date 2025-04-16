import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Garante que a pasta "logs" exista
const logDir = path.join(__dirname, '..', 'logs');
if( !fs.existsSync(logDir) ) {
    fs.mkdirSync(logDir);
}

// Cria o stream para escrever os logs
const accessLogStream = fs.createWriteStream(
    path.join(logDir, 'access.log'),
    { flags: 'a' }
);

const logger = morgan('combined', {stream: accessLogStream})


export { logger }