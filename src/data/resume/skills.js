const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Frontend Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Frontend Development', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases', 'Backend Development'],
  },
  {
    title: 'Impala',
    competency: 3,
    category: ['Backend Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Backend Development', 'Databases'],
  },
  {
    title: 'RabbitMQ',
    competency: 4,
    category: ['Backend Development', 'Tools'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Backend Development', 'Databases'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Backend Development'],
  },
  {
    title: 'SpringBoot',
    competency: 5,
    category: ['Backend Development', 'Frameworks'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frontend Development', 'Frameworks'],
  },
  {
    title: 'Office365',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Backend Development', 'Languages'],
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
