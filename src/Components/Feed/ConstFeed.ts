
  const PageInfo = {
    totalResults: 0,
    resultsPerPage: 0,
  };
  
  const Kind = {
    YoutubeVideo: "youtube#video",
  };
  
  const Definition = {
    HD: "hd",
  };
  
  const Dimension = {
    The2D: "2d",
  };
  
  const Projection = {
    Rectangular: "rectangular",
  };
  
  const LiveBroadcastContent = {
    None: "none",
  };
  
  const DefaultLanguage = {
    En: "en",
    EnGB: "en-GB",
    EnUS: "en-US",
    Es: "es",
    Ko: "ko",
  };
  const Item = {
    kind: Kind.YoutubeVideo,
    etag: "",
    id: "",
    snippet: {
      publishedAt: "",
      channelId: "",
      title: "",
      description: "",
      thumbnails: {
        default: { url: "", width: 0, height: 0 },
        medium: { url: "", width: 0, height: 0 },
        high: { url: "", width: 0, height: 0 },
        standard: { url: "", width: 0, height: 0 },
        maxres: { url: "", width: 0, height: 0 },
      },
      channelTitle: "",
      categoryId: "",
      liveBroadcastContent: LiveBroadcastContent.None,
      localized: { title: "", description: "" },
    },
    contentDetails: {
      duration: "",
      dimension: Dimension.The2D,
      definition: Definition.HD,
      caption: "",
      licensedContent: false,
      contentRating: {},
      projection: Projection.Rectangular,
      regionRestriction: { blocked: [], allowed: [] },
    },
    statistics: {
      viewCount: "",
      likeCount: "",
      favoriteCount: "",
      commentCount: "",
    },
  };
  
  export {
    Item,
    PageInfo,
    Kind,
    Definition,
    Dimension,
    Projection,
    LiveBroadcastContent,
    DefaultLanguage,
  };