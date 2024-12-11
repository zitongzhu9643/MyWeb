/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Shenzhen XGIMI Technology Co., Ltd',
    position: 'Operation Specialist',
    url: 'https://xgimi.co.nz/',
    startDate: '2021-11-01',
    endDate: '2022-04-20',
    summary: 'Managed daily operations and content for overseas market websites, including campaign planning. Produced user guide videos for key products to enhance user experience.',
    highlights: [
      'Created and directed instructional videos for the Horizon product series, leveraging PR and PS tools; published content on XGIMI Tech YouTube channel, achieving 13k views and improving in a 80% satisfaction from overseas customer.',
      'Designed and Executed Site navigation UI and FAQ content using Shopify and HTML, achieving a 60% reduction in post-sale inquiries.',
      'Optimized designs for site of Australia, New Zealand, Japan, Europe, the USA, the UK, such as product content management, marketing campaign support, promotion setup, digital asset management, etc.',
    ],
  },
  {
    name: 'Roblox (Shenzhen) Digital Science and Technology Co., Ltd',
    position: 'Operation Specialist Intern',
    url: 'https://www.roblox.com/',
    startDate: '2021-07-20',
    endDate: '2021-11-28',
    summary: 'Created engaging instructional videos and managed official Bilibili and TikTok accounts. Assisted in organizing live streaming events and developing content strategies to enhance user engagement.',
    highlights: [
      'Independently operated the official Bilibili and TikTok accounts, creating 20+ instructional videos, increasing 50k views.',
      'Organized online live streaming of on-site activities for the 2021 Roblox China Joy. By increasing interviews and prize activities, audience engagement surpassed expected viewership by 30%.',
    ],
  },
  {
    name: 'Technical Consulting & Research, Inc.',
    position: 'Video Editor',
    url: 'https://www.tcrinc.com/',
    startDate: '2020-05-01',
    endDate: '2020-11-01',
    summary: 'Designed brand logos and created promotional video content, including scriptwriting, editing, and production.',
    highlights: [
      'Responsible for scriptwriting and producing promotional videos, utilizing Agile methods to coordinate workflow. Integrated animation (AN) and film (PR), increasing website traffic by 40%.',
      'Designed website UI logos using illustration (AI), now featured on the company website',
    ],
  },
  {
    name: 'MICA Team Film Crew for “Who Knows”',
    position: 'Producer',
    url: '',
    startDate: '2019-10-01',
    endDate: '2020-01-01',
    summary: 'Oversaw film production, managing budgets, resources, and on-site supervision. Planned promotional strategies and supported outreach for film festival submissions.',
    highlights: [
      'Managed film production budget and scheduled resources for shooting, supervised the filming process. Developed promotion plan, obtaining $1000 in sponsorship.',
      'Showcased the film successfully at international film Festivals and earning multiple awards.',
    ],
  },
  {
    name: 'Hangzhou Ergeng Network Technology Co., Ltd.',
    position: 'Director & Video Editor',
    url: '',
    startDate: '2019-10-01',
    endDate: '2020-01-01',
    summary: 'Oversaw the creation and editing of promotional video content, leading production and coordinating with teams to deliver impactful video assets.',
    highlights: [
      'Directed and led editing the promotional video, "ZiDongWoXi", resulting in a 95% satisfaction rating.',
      'Promoted Across Platforms effectively and garnering approximately 100k views on platforms Weibo and TikTok.',
    ],
  },
  {
    name: 'Studio East',
    position: 'Shop Assistant',
    url: '',
    startDate: '2014-06-01',
    endDate: '2014-09-01',
    summary: 'Worked at a renowned Disney gift shop in the U.S., delivering excellent customer service in a fast-paced, tourist-heavy environment during peak seasons, resulting in a significant increase in repeat customers.',
    highlights: [
      'Assisted with product displays and inventory management, ensuring gift areas were clean and well-organized, contributing to positive customer experiences reflected in 10 individual Google reviews within one month.',
      'Collaborated efficiently with team members to provide top-level customer service, achieving a 90% customer satisfaction rate through effective communication and teamwork.',
      'Handled customer inquiries, complaints, and refunds with professionalism, ensuring customer needs were met and contributing to consistently high satisfaction ratings.',
    ],
  },
  {
    name: 'Salt Fork Lodge & Conference Center',
    position: 'Housekeeper',
    url: '',
    startDate: '2013-05-01',
    endDate: '2013-09-01',
    summary: 'Worked at a large local resort. Experienced summer season of the hotel\'s peak season, mainly responsible for cleaning rooms and providing customer service.',
    highlights: [],
  },
];

export default work;
