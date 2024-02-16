const fs = require('fs');
const exec = require('child_process').execFile;
const INPUT_PATH = './input';
const OUTPUT_PATH = './output';
const FILES = fs.readdirSync(INPUT_PATH);

if (!fs.existsSync(OUTPUT_PATH)) fs.mkdirSync(OUTPUT_PATH);

FILES.forEach(file => {
	exec('./FileConvert.exe', [`${INPUT_PATH}/${file}`, `${OUTPUT_PATH}/${file}`], (data) => { });
});