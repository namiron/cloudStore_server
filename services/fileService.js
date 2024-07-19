const fs = require('fs');
const config = require('config');
const path = require('path');

class FileService {

    createDir(file) {
        const filePath = path.join(config.get('filePath'), file.user.toString(), file.path);
        return new Promise((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true });
                    return resolve({ message: 'File was created' });
                } else {
                    return reject({ message: 'File already exists' });
                }
            } catch (error) {
                return reject({ message: 'File error', error });
            }
        });
    }
}

module.exports = new FileService();
