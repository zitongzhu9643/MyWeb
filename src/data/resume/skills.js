const skills = [
  {
    title: 'Adobe Premiere',
    competency: 5,
    category: ['Video Editing and Post-Production', 'Adobe Creative Suite'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 4,
    category: ['Graphic Design and Animation', 'Adobe Creative Suite'],
  },
  {
    title: 'Adobe Animate',
    competency: 4,
    category: ['Graphic Design and Animation', 'Adobe Creative Suite'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 4,
    category: ['Graphic Design and Animation', 'Adobe Creative Suite'],
  },
  {
    title: 'Adobe After Effects',
    competency: 4,
    category: ['Video Editing and Post-Production', 'Adobe Creative Suite'],
  },
  {
    title: 'Final Cut Pro',
    competency: 4,
    category: ['Video Editing and Post-Production'],
  },
  {
    title: 'DaVinci Resolve',
    competency: 4,
    category: ['Video Editing and Post-Production', 'Backend Development'],
  },
  {
    title: 'Wacom',
    competency: 4,
    category: ['Graphic Design and Animation'],
  },
  {
    title: 'Pro Tools',
    competency: 4,
    category: ['Audio Production'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Office and Collaboration Tools'],
  },
  {
    title: 'Google Drive',
    competency: 4,
    category: ['Office and Collaboration Tools'],
  },
  {
    title: 'WordPress',
    competency: 3,
    category: ['Website Development and Management'],
  },
  {
    title: 'Shopify',
    competency: 3,
    category: ['Website Development and Management'],
  },
  {
    title: 'SpringBoot',
    competency: 5,
    category: ['Backend Development', 'Frameworks'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
