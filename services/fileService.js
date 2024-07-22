const fs = require('fs');
const config = require('config');
const path = require('path');

class FileService {

    createDir(req, file) {
        const filePath = this.getPath(req, file);
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
    deleteFile(req, file) {
        const path = this.getPath(req, file)
        if (file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }
    getPath(req, file) {
        let way = req.filePath + '/' + file.user + '/' + file.name

        return way


    }
}

module.exports = new FileService();
