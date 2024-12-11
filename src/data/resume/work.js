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
    name: 'Tencent Technology (Shenzhen) Co., Ltd.',
    position: 'Software Developer',
    url: 'https://www.tencent.com/en-us/',
    startDate: '2021-07-08',
    endDate: '2024-06-20',
    summary: 'Experienced in designing, developing, and managing high-performance financial systems for large-scale internal platforms at Tencent, supporting over **100,000 users** with a focus on **scalability** and **reliability**.',
    highlights: [
      'Led the architecture and development of core service components using **Java** and **Spring Boot**, with **MySQL** and **Oracle** databases.',
      'Developed a Gateway Service handling **5000 QPS** and **40 million requests per day** for protocol translation, request routing, and role-based authorization.',
      'Built a Message Service processing over **200,000 messages daily**, using **RabbitMQ** and **Redis** for rate limiting across 100+ systems.',
      'Designed and managed department portal platforms used by **300+ users** and **100+ systems**, achieving front-end and back-end separation.',
      'Enhanced operations with tools like **Quartz**, **Impala**, **Redis**, and Python scripts for **APM trace tracking** and **AI-driven analysis**.',
    ],
  },
  {
    name: 'Tencent Technology (Shenzhen) Co., Ltd.',
    position: 'Software Developer Intern',
    url: 'https://www.tencent.com/en-us/',
    startDate: '2020-07-20',
    endDate: '2020-11-28',
    summary: 'Developed and managed core message service components at Tencent using **Java SpringBoot** and **MySQL**, supporting over **100,000 users**.',
    highlights: [
      'Implemented **window current limiting** for half-hour intervals and **token bucket limiting** for daily rate limiting across **100+ systems** using **Redis**.',
      'Enabled message delivery via **SMTP proxy** for emails and integrated **WeChat API** for direct WeChat messaging.',
    ],
  },
  {
    name: 'Yellow River Hydro Power Development General Company',
    position: 'Software Developer Intern',
    url: 'https://www.xiaolangdi.com.cn/',
    startDate: '2018-06-01',
    endDate: '2018-08-01',
    summary: 'Assisted in coding the in-house **Monitor Data Fusion Applications** for **Yellow River Hydro Power Development**, developing a scheduled feature to process and deliver large-scale monitoring data to a WeChat group.',
    highlights: [
      'Processed **1.5 million monitoring data points** annually, generating over **200GB** of multimedia and textual monitoring data.',
      'Decomposed XML trees and executed **keyword-based queries** using **XPath** for data extraction from XML and HTML sources.',
      'Utilized **regular expressions** and **web crawlers** to search and filter data, compiling structured reports for delivery.',
    ],
  },
  {
    name: 'Muhlenberg College Academic Resource Center',
    position: 'Academic Tutor',
    url: 'https://muhlenberg.edu',
    startDate: '2017-02-01',
    endDate: '2019-05-01',
    summary: 'Served as a **Computer Science and Mathematics Tutor** at **Muhlenberg College Academic Resource Center**, helping students enhance study skills and prepare for exams through personalized guidance and interactive learning sessions.',
    highlights: [
      'Guided students in developing effective study techniques and provided support for exam preparation.',
      'Led interactive sessions to address academic challenges, fostering a supportive learning environment.',
    ],
  },
];

export default work;
