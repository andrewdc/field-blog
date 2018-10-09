const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Fieldblog - A Blog With a Purpose", // <title>
  shortSiteTitle: "Your Trusty Fieldblog", // <title> ending for posts and pages
  siteDescription: "A scouting blog of illustrations and resources",
  siteUrl: "tbd",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Andrew Colclough",
  authorTwitterAccount: "wtc",
  // info
  infoTitle: "Andrew Colclough",
  infoTitleNote: "Once a Scout, Always a Scout",
  // manifest.json
  manifestName: "Fieldblog - A Blog with a Purpose",
  manifestShortName: "Fieldblog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "andrew.design@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/andrewdc" },
    { name: "twitter", url: "https://twitter.com/wtc" },
    { name: "facebook", url: "https://www.facebook.com/bulletandwhiskey/" }
  ]
};
