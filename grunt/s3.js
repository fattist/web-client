module.exports = {
  options: {
    accessKeyId: "<%= aws.AWS_ACCESSKEYID %>",
    secretAccessKey: "<%= aws.AWS_SECRETACCESSKEY %>",
    bucket: "fatt-env-assets-web",
    region: "us-west-2"
  },
  dist: {
    cwd: "application/dist",
    src: "**",
    dest: "<%= uuid %>/"
  }
}
