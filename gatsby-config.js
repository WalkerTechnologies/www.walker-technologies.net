module.exports = {
  siteMetadata: {
    title: 'Walker Technologies, Inc.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121406556-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    }
  ],
}
