export const heroData = {
  name: 'POLURI VENKATA NAGA ANJANEYULU',
  headline: 'Turning Data into Insights & Building Scalable Data Solutions',
  roles: ['Data Analyst', 'Data Engineer', 'AI & ML Enthusiast'],
  actions: [
    { label: 'View Projects', href: '#projects' },
    { label: 'Resume.pdf', href: '/resume.pdf', download: true },
    { label: 'Contact Me', href: '#contact' }
  ]
};

export const aboutTimeline = [
  {
    title: 'Final-year B.Tech Computer Science (AI & ML)',
    subtitle: 'Focus on AI, Machine Learning, and scalable data systems.',
    period: '2023 - 2025'
  },
  {
    title: 'Passionate about Data Engineering',
    subtitle: 'Designing ETL workflows, building data models, and optimizing analytics.',
    period: '2024'
  },
  {
    title: 'Power BI & Analytics Specialist',
    subtitle: 'Turning business questions into actionable dashboards and insights.',
    period: '2024'
  }
];

export const skillGroups = [
  {
    category: 'Data Analytics',
    items: ['Power BI', 'SQL', 'Data Visualization', 'Dashboard Development']
  },
  {
    category: 'Data Engineering',
    items: ['ETL', 'PostgreSQL', 'MySQL', 'Airflow']
  },
  {
    category: 'Programming',
    items: ['Python', 'C++', 'Git', 'GitHub']
  },
  {
    category: 'AI & ML',
    items: ['Machine Learning', 'Pandas', 'NumPy']
  }
];

export const experienceItems = [
  {
    role: 'Data Engineering Intern',
    company: 'Glynac / Acumen Strategy · Remote',
    period: '2024 – Present',
    bullets: [
      'Built production-quality data pipelines using Apache Airflow, Docker, and PostgreSQL',
      'Designed and delivered a containerized ETL pipeline (Project DHAP-34)',
      'Ingested CSV data, validated schema, transformed records, and loaded clean data into PostgreSQL',
      'Orchestrated workflow using Airflow DAGs and Docker Compose',
      'Authored schema validation logic, SQL creation scripts, and a full project runbook'
    ],
    techStack: ['Python', 'Apache Airflow', 'Docker', 'PostgreSQL', 'Git', 'GitHub']
  }
];

export const projects = [
  {
    title: 'Water Quantity Prediction System',
    description: 'Developed a machine learning-based prediction system to estimate future water demand and resource availability using historical environmental and consumption data. Applied data preprocessing, feature engineering, and predictive modeling techniques to support efficient water resource planning.',
    badge: 'AI & Forecasting',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'GitHub'],
    github: 'https://github.com/The-Nagaa/Waterquantitypred'
  },
  {
    title: 'Data Engineering Pipeline',
    description: 'Automated CSV ingestion, validation, transformation and PostgreSQL loading.',
    badge: 'ETL & DataOps',
    technologies: ['Python', 'PostgreSQL', 'Airflow', 'ETL'],
    github: 'https://github.com/The-Nagaa/data-engineering-pipeline'
  },
  {
    title: 'Power BI Dashboard',
    description: 'Interactive dashboard providing actionable business insights.',
    badge: 'Business Intelligence',
    technologies: ['Power BI', 'SQL', 'Data Visualization'],
    github: 'https://github.com/The-Nagaa/power-bi-dashboard'
  },
  {
    title: 'Billing Software System',
    description: 'Desktop billing application with database integration.',
    badge: 'Systems & Integration',
    technologies: ['C++', 'Database', 'Desktop App'],
    github: 'https://github.com/The-Nagaa/billing-software-system'
  }
];

export const achievements = [
  { metric: 'Projects', value: 6, suffix: '+', label: 'Projects' },
  { metric: 'Certifications', value: 12, suffix: '+', label: 'Certifications' },
  { metric: 'Hours', value: 100, suffix: '+', label: 'Practical Hours' },
  { metric: 'Internships', value: 1, suffix: '', label: 'Internship' }
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'pvnagapoluri@gmail.com',
    href: 'mailto:pvnagapoluri@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nagapoluri09',
    href: 'https://www.linkedin.com/in/nagapoluri09'
  },
  {
    label: 'GitHub',
    value: 'github.com/The-Nagaa',
    href: 'https://github.com/The-Nagaa'
  }
];
