module.exports = {
  options: {
    accessKeyId: "<%= aws.AWS_ACCESSKEYID %>",
    secretAccessKey: "<%= aws.AWS_SECRETACCESSKEY %>",
    distributionId: "<%= aws.AWS_DISTRIBUTIONID %>"
  },
  dist: {
    options: {
      originPath: "/<%= uuid %>",
      invalidations: [
        '/index.html',
        '/images/*',
      ]
    }
  }
}
