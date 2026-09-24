import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the parent notion page containing your entire site
  rootNotionPageId: '2fbf9952d39f83e78840013ed7add27a',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ashikul Islam Khan',
  domain: 'ashikulislamkhan.github.io',
  author: 'Ashikul Islam Khan',

  // open graph metadata (optional, shows up on social previews & Google)
  description: 'Portfolio of Ashikul Islam Khan | Economics Undergraduate at University of Dhaka | Policy Research & Data Analytics',

  // social usernames
  twitter: 'AshikPlays19',
  github: 'ashikulislamkhan',
  linkedin: 'ashikplays19',
  newsletter: null,
  youtube: null,

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  isRedisEnabled: false,

  // map of notion page IDs to their desired URL slugs (optional)
  pageUrlOverrides: null
})
