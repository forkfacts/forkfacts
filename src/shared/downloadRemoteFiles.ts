const { execSync } = require("child_process");

const DOWNLOAD_DIRECTORY = "src/data";
const downloadRemoteFiles = () => {
  const remoteURL = process.env.API_URL;
  if (!remoteURL) throw "No API_URL configured to download project files";
  console.log(`downloading files from ${remoteURL}`);
  const command = `
  cd ${DOWNLOAD_DIRECTORY} &&\
  wget --no-check-certificate "${remoteURL}" -r -A 'uc*' -e robots=off -nd -O files.zip &&\
  unzip -o files.zip
  `;
  execSync(command, (error, stdout, stderror) => {
    if (error) console.error(error);
    if (stdout) console.log(stdout);
    if (stderror) console.error(stderror);
  });
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

downloadRemoteFiles();
