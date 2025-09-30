export type Department = 
  | "judiciary" 
  | "crime" 
  | "politics" 
  | "science" 
  | "sports" 
  | "health" 
  | "entertainment" 
  | "economy" 
  | "defence" 
  | "foreign-affairs";

export type Sentiment = "positive" | "negative" | "neutral";

export interface NewsItem {
  id: string;
  department: Department;
  headline: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl: string;
  sentiment: Sentiment;
  publishedAt: string;
  imageUrl?: string;
}

export const departmentNames: Record<Department, string> = {
  judiciary: "Judiciary",
  crime: "Crime",
  politics: "Politics",
  science: "Science",
  sports: "Sports",
  health: "Health",
  entertainment: "Entertainment",
  economy: "Economy",
  defence: "Defence",
  "foreign-affairs": "Foreign Affairs",
};

export const mockNews: NewsItem[] = [
  // Judiciary
  {
    id: "jud-1",
    department: "judiciary",
    headline: "Supreme Court upholds digital privacy rights in landmark ruling",
    summary: "The Supreme Court ruled that digital data requires the same constitutional protections as physical documents.",
    content: "In a groundbreaking decision, the Supreme Court has affirmed that digital privacy deserves robust constitutional protection. The ruling establishes clear guidelines for law enforcement access to digital records and strengthens individual privacy rights in the digital age. Legal experts view this as a watershed moment for digital rights jurisprudence.",
    source: "Legal Times India",
    sourceUrl: "https://example.com/news/judiciary-1",
    sentiment: "positive",
    publishedAt: "2025-09-28",
  },
  {
    id: "jud-2",
    department: "judiciary",
    headline: "High Court raises concerns over delayed justice in lower courts",
    summary: "Judicial backlog continues to plague the system with over 4 million pending cases.",
    content: "The High Court expressed serious concerns about the mounting backlog in lower courts, with over 4 million cases still pending. Chief Justice emphasized the need for judicial reforms, better infrastructure, and more judges to ensure timely justice delivery. The government has been asked to submit a detailed action plan.",
    source: "Judiciary Watch",
    sourceUrl: "https://example.com/news/judiciary-2",
    sentiment: "negative",
    publishedAt: "2025-09-27",
  },
  {
    id: "jud-3",
    department: "judiciary",
    headline: "New e-courts initiative streamlines filing process",
    summary: "Digital transformation in courts reduces filing time by 60%.",
    content: "The nationwide e-courts initiative has significantly improved accessibility and efficiency. Citizens can now file cases, track progress, and access documents online. The system has reduced filing time by 60% and made the judicial process more transparent and user-friendly.",
    source: "Tech Law Journal",
    sourceUrl: "https://example.com/news/judiciary-3",
    sentiment: "positive",
    publishedAt: "2025-09-26",
  },

  // Crime
  {
    id: "crime-1",
    department: "crime",
    headline: "Cybercrime rates drop 35% following new digital task force",
    summary: "Government's new cybercrime unit shows promising results in first quarter.",
    content: "The newly formed National Cybercrime Task Force has reported a 35% reduction in online fraud and cyber attacks. The specialized unit combines expertise from multiple agencies and uses AI-powered tools for real-time threat detection. Citizens have praised the quick response mechanism.",
    source: "Crime Analytics",
    sourceUrl: "https://example.com/news/crime-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "crime-2",
    department: "crime",
    headline: "Rising concerns over organized crime in metropolitan areas",
    summary: "Police report 20% increase in organized criminal activities.",
    content: "Law enforcement agencies express concern about the surge in organized crime networks operating in major cities. Despite increased surveillance and stricter laws, criminal syndicates have adapted to evade detection. Citizens demand stronger action and better protection.",
    source: "Metropolitan Crime Report",
    sourceUrl: "https://example.com/news/crime-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },

  // Politics
  {
    id: "pol-1",
    department: "politics",
    headline: "New transparency bill receives bipartisan support",
    summary: "Historic political cooperation on anti-corruption measures.",
    content: "In a rare display of political unity, major parties have come together to support the comprehensive transparency and accountability bill. The legislation mandates real-time disclosure of political funding and strengthens anti-corruption mechanisms. Public opinion polls show overwhelming support.",
    source: "Political Observer",
    sourceUrl: "https://example.com/news/politics-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "pol-2",
    department: "politics",
    headline: "Parliament session disrupted over controversial policy",
    summary: "Opposition walkout delays key legislation discussion.",
    content: "Parliament proceedings were disrupted for the third consecutive day as opposition parties staged a walkout over controversial policy amendments. The deadlock has stalled important legislation and drawn criticism from both public and media about political dysfunction.",
    source: "Parliament Daily",
    sourceUrl: "https://example.com/news/politics-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },
  {
    id: "pol-3",
    department: "politics",
    headline: "Youth engagement in politics reaches all-time high",
    summary: "Record voter registration among 18-25 age group.",
    content: "Electoral commission reports unprecedented youth participation with a 45% increase in voter registration among young adults. Digital campaigns and civic education programs are credited with driving this positive trend toward democratic engagement.",
    source: "Democratic Voice",
    sourceUrl: "https://example.com/news/politics-3",
    sentiment: "positive",
    publishedAt: "2025-09-27",
  },

  // Science
  {
    id: "sci-1",
    department: "science",
    headline: "Breakthrough in renewable energy storage technology",
    summary: "Scientists develop battery with 5x capacity at lower cost.",
    content: "Researchers at the National Science Institute have achieved a major breakthrough in battery technology, developing a storage system with five times the capacity of current solutions at 40% lower cost. This innovation could revolutionize renewable energy adoption and electric vehicle infrastructure.",
    source: "Science Today",
    sourceUrl: "https://example.com/news/science-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "sci-2",
    department: "science",
    headline: "Climate research funding cut by 30% in budget allocation",
    summary: "Scientists express concerns over reduced environmental research support.",
    content: "The scientific community reacts with dismay to significant cuts in climate research funding. Leading researchers warn that this could hamper critical environmental studies and the country's ability to meet climate commitments. Protests planned by scientific organizations.",
    source: "Environmental Science Review",
    sourceUrl: "https://example.com/news/science-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },

  // Sports
  {
    id: "sport-1",
    department: "sports",
    headline: "National team clinches championship in historic victory",
    summary: "First international title in two decades sparks celebrations.",
    content: "The national cricket team secured a stunning victory in the World Championship, ending a 20-year title drought. The win sparked nationwide celebrations and has been hailed as a new golden era for the sport. Government announces cash rewards and infrastructure investments.",
    source: "Sports Nation",
    sourceUrl: "https://example.com/news/sports-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "sport-2",
    department: "sports",
    headline: "Doping scandal rocks athletics federation",
    summary: "Multiple athletes test positive for banned substances.",
    content: "The athletics federation faces its worst crisis as eight prominent athletes failed drug tests. The scandal has raised questions about oversight and training practices. International bodies threaten sanctions if reforms aren't implemented immediately.",
    source: "Athletics Weekly",
    sourceUrl: "https://example.com/news/sports-2",
    sentiment: "negative",
    publishedAt: "2025-09-27",
  },

  // Health
  {
    id: "health-1",
    department: "health",
    headline: "Universal healthcare coverage reaches 95% of population",
    summary: "Government's health initiative achieves milestone ahead of schedule.",
    content: "The national healthcare program has successfully extended coverage to 95% of the population, surpassing initial targets. The initiative provides free primary care, subsidized medications, and emergency services. Patient satisfaction ratings have improved significantly.",
    source: "Health Monitor",
    sourceUrl: "https://example.com/news/health-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "health-2",
    department: "health",
    headline: "Hospital infrastructure struggles to meet growing demand",
    summary: "Emergency departments report 40% overcapacity.",
    content: "Public hospitals across major cities are struggling with severe overcrowding, with emergency departments operating at 140% capacity. Healthcare workers warn of burnout and compromised patient care. Medical associations call for urgent infrastructure expansion and staff recruitment.",
    source: "Medical Times",
    sourceUrl: "https://example.com/news/health-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },

  // Entertainment
  {
    id: "ent-1",
    department: "entertainment",
    headline: "Local film wins prestigious international award",
    summary: "Independent filmmaker brings glory at Cannes Film Festival.",
    content: "A locally produced film has won the Grand Prix at the Cannes Film Festival, marking a historic achievement for the country's cinema. The win has sparked renewed interest in independent filmmaking and cultural storytelling. Government announces increased funding for arts.",
    source: "Cinema Review",
    sourceUrl: "https://example.com/news/entertainment-1",
    sentiment: "positive",
    publishedAt: "2025-09-28",
  },
  {
    id: "ent-2",
    department: "entertainment",
    headline: "Controversy over new censorship regulations",
    summary: "Artists and creators protest against restrictive content guidelines.",
    content: "The entertainment industry is in uproar over new censorship guidelines that many argue stifle creative freedom. Artists, filmmakers, and musicians have organized protests demanding revision of the regulations. Critics call it a setback for artistic expression.",
    source: "Arts & Culture Daily",
    sourceUrl: "https://example.com/news/entertainment-2",
    sentiment: "negative",
    publishedAt: "2025-09-27",
  },

  // Economy
  {
    id: "econ-1",
    department: "economy",
    headline: "GDP growth exceeds projections for third consecutive quarter",
    summary: "Economic expansion driven by manufacturing and services sectors.",
    content: "The economy has grown 7.2% in the latest quarter, surpassing analyst expectations. Strong performance in manufacturing and services, along with increased exports, have driven the growth. Economists predict sustained expansion with controlled inflation.",
    source: "Economic Times",
    sourceUrl: "https://example.com/news/economy-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "econ-2",
    department: "economy",
    headline: "Unemployment rates rise amid layoffs in tech sector",
    summary: "Job market faces challenges as major companies downsize.",
    content: "Unemployment has increased to 6.8% as the technology sector undergoes significant restructuring. Major companies have announced layoffs affecting thousands of workers. Labor unions demand government intervention and support programs for displaced workers.",
    source: "Labor Economics Journal",
    sourceUrl: "https://example.com/news/economy-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },

  // Defence
  {
    id: "def-1",
    department: "defence",
    headline: "Indigenous defense technology achieves export milestone",
    summary: "Domestically developed systems gain international recognition.",
    content: "The country's defense manufacturing has secured its largest export order, showcasing indigenous technology capabilities. Advanced radar systems and unmanned vehicles developed locally will be supplied to friendly nations. This marks a significant achievement in defense self-reliance.",
    source: "Defense Review",
    sourceUrl: "https://example.com/news/defence-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "def-2",
    department: "defence",
    headline: "Border security concerns raised after infiltration incidents",
    summary: "Multiple breach attempts highlight infrastructure gaps.",
    content: "Recent infiltration incidents along the border have exposed vulnerabilities in surveillance systems. Defense analysts call for urgent modernization of border infrastructure and increased deployment of advanced monitoring technology. Opposition demands accountability.",
    source: "Strategic Affairs",
    sourceUrl: "https://example.com/news/defence-2",
    sentiment: "negative",
    publishedAt: "2025-09-27",
  },

  // Foreign Affairs
  {
    id: "for-1",
    department: "foreign-affairs",
    headline: "Historic trade agreement signed with regional partners",
    summary: "New pact expected to boost regional economic cooperation.",
    content: "A landmark trade agreement has been signed with neighboring countries, reducing tariffs and facilitating cross-border commerce. The deal is expected to increase regional trade by 40% and strengthen diplomatic ties. Business communities welcome the development.",
    source: "Diplomatic Digest",
    sourceUrl: "https://example.com/news/foreign-1",
    sentiment: "positive",
    publishedAt: "2025-09-29",
  },
  {
    id: "for-2",
    department: "foreign-affairs",
    headline: "Diplomatic tensions escalate over territorial dispute",
    summary: "Bilateral relations strained following border disagreement.",
    content: "Relations with a neighboring country have deteriorated following renewed territorial claims. Both nations have recalled ambassadors for consultations. International community calls for dialogue and peaceful resolution of the dispute.",
    source: "Global Affairs Today",
    sourceUrl: "https://example.com/news/foreign-2",
    sentiment: "negative",
    publishedAt: "2025-09-28",
  },
];

export const getNewsByDepartment = (department: Department): NewsItem[] => {
  return mockNews.filter((news) => news.department === department);
};

export const getNewsBySentiment = (
  department: Department,
  sentiment: Sentiment | "all"
): NewsItem[] => {
  const departmentNews = getNewsByDepartment(department);
  if (sentiment === "all") return departmentNews;
  return departmentNews.filter((news) => news.sentiment === sentiment);
};
