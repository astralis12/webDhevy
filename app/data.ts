type Project = {
  title: string
  authors: string[]
  year: number
  image?: string
  award?: string
  selected?: boolean
  links?: Record<string, string>
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  icon: string
}

export const SITE_URL = 'https://vidhantyka.my.id'

export const PERSONAL_INFO = {
  name: {
    english: 'K.H. Mahadhevy Ryrathna Vidhantyka',
  },
  title: 'Fresh Graduate in Biology | Ecology & Conservation Researcher',
}

export const HIGHLIGHTED_AUTHORS = ['Mahadhevy', 'Vidhantyka']

export const PROJECTS: Project[] = [
  {
    title:
      'Ethnopharmacological Study of Medicinal Plants in Kedungpoh Village, Gunungkidul',
    authors: [
      'K.H. Mahadhevy Ryrathna Vidhantyka',
      'Supervisor Name',
      'Co-author Name',
    ], // Update with actual names
    year: 2025,
    image: '/img/projects/placeholder.jpg', // Placeholder - add your image later
    selected: true,
    links: {
      Journal: 'https://doi.org/10.12928/jbns.v5i1.12972',
      pdf: '/pdf/placeholder.pdf', // Placeholder - upload your PDF later
    },
    id: 'ethnobotany-kedungpoh',
  },
  {
    title:
      'Existence of Lithocarpus elegans and Engelhardia spicata in Dieng Plateau',
    authors: ['K.H. Mahadhevy Ryrathna Vidhantyka'],
    year: 2026,
    image: '/img/projects/placeholder.jpg',
    selected: true,
    links: {
      pdf: '/pdf/placeholder.pdf',
    },
    id: 'dieng-thesis',
  },
  {
    title: 'Inventory and Carbon Stock Analysis at Wanagama Forest',
    authors: [
      'K.H. Mahadhevy Ryrathna Vidhantyka',
      'Rumah Karbon Indonesia Team',
    ],
    year: 2026,
    image: '/img/projects/placeholder.jpg',
    selected: false,
    links: {
      // Add report link if available later
    },
    id: 'wanagama-carbon',
  },
  {
    title:
      'Spatial Analysis and Ethnobotany of Transmigrant Communities in Kapuas Hulu',
    authors: [
      'K.H. Mahadhevy Ryrathna Vidhantyka',
      'Tim Ekspedisi Patriot 2025',
    ],
    year: 2025,
    image: '/img/projects/placeholder.jpg',
    selected: false,
    links: {
      // Add report or map gallery link later
    },
    id: 'kapuas-hulu',
  },
  {
    title: 'Inventory of Endemic Orchids in Mount Merapi National Park',
    authors: ['K.H. Mahadhevy Ryrathna Vidhantyka'],
    year: 2025,
    image: '/img/projects/placeholder.jpg',
    selected: false,
    links: {
      // Add poster or report link later
    },
    id: 'merapi-orchids',
  },
  {
    title: 'Monitoring of Cyornis banyumas (Sikatan Cacing) Nesting Behavior',
    authors: [
      'K.H. Mahadhevy Ryrathna Vidhantyka',
      'Endemic Indonesia Society',
    ],
    year: 2026,
    image: '/img/projects/placeholder.jpg',
    selected: false,
    links: {
      // Add report link later
    },
    id: 'bird-monitoring',
  },
  {
    title: 'Vegetation and Soil Insect Inventory at Paliyan Wildlife Reserve',
    authors: ['K.H. Mahadhevy Ryrathna Vidhantyka', 'BKSDA DIY'],
    year: 2024,
    image: '/img/projects/placeholder.jpg',
    selected: false,
    links: {
      // Add report link later
    },
    id: 'paliyan-inventory',
  },
]

// Blog is disabled - no posts for now
export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'CV',
    link: '/pdf/placeholder.pdf', // Upload your CV as CV_Mahadhevy_Manka.pdf
    icon: 'FileText',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mahadhevy', // Update with your actual LinkedIn URL
    icon: 'Linkedin',
  },
  {
    label: 'Email',
    link: 'mailto:vidhantyka@gmail.com',
    icon: 'Mail',
  },
]

export const EMAIL = 'vidhantyka@gmail.com'

// Gallery placeholders - add your image filenames here when ready
// Place actual images in public/img/photos/
export const PHOTO_GALLERY = [
  // Add your filenames here, e.g. 'fieldwork1.jpg', 'conference.png'
  // For now, leave empty or add a placeholder
]
