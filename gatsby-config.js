module.exports = {
  siteMetadata: {
    title: 'Walker Technologies, Inc.',
    domain: 'https://new.walker-technologies.net'
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
