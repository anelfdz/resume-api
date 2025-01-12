import { Hono } from 'hono';
import { cors } from 'hono/cors';

type ResumeData = {
  header: {
    name: string;
    email: string;
    linkedIn: string;
    location: string;
    summary: string[];
  };
  profile: string[];
};

const resumeData: ResumeData = {
  header: {
    name: "Anel Fernández",
    email: "anel.a90@gmail.com",
    linkedIn: "https://www.linkedin.com/in/anelfdz",
    location: "Chile/Remote",
    description: [
      "Seeking a challenging senior leadership role where my extensive experiences on software development, computer design and technical innovation skills can synthesize into revolutionary products.",
      "Strong interest in Productivity & Platform Engineering and Cross-Functional collaboration. Open to relocation to the United States for the right opportunity."
    ]
  },
  profile: {
    description: [
      "BS in Computer Science, University of Informatic Sciences, Cuba.",
      "10+ years in software development, with expertise in large-scale distributed systems, cloud computing, and system design.",
      "5+ years in technical leadership, managing cross-functional teams of 100+ engineers across multiple geographies.",
      "7+ years optimizing performance, implementing caching, and developing scalable solutions for high-demand environments.",
      "Proven track record in cloud-native architectures, event-driven systems, and feature delivery acceleration using Agile methodologies."
    ]
  },
  education: {
    degree: "Bachelor of Computer Science",
    university: "University of Informatic Sciences, Cuba",
    duration: "2009 - 2014"
  },
  skills: [
    {
      category: "Software Development & Engineering",
      items: [
        "Java",
        "Go",
        "C++",
        "C#",
        "Python",
        "Kotlin",
        "PHP",
        "HTML",
        "JavaScript",
        "reactive programming",
        "REST APIs",
        "gRPC",
        "GraphQL",
        "Change Data Capture (CDC) patterns",
        "Algorithms & Data Structures"
      ]
    },
    {
      category: "Cloud Computing",
      items: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Kubernetes",
        "Docker",
        "microservices",
        "Large-Scale Systems",
        "Distributed Systems",
        "Event-Driven Architectures",
        "Apache Spark",
        "Apache Beam",
        "Spring Cloud",
        "Pub/Sub",
      ]
    },
    {
      category: "Databases",
      items: [
        "Casandra",
        "Bigtable",
        "DynamoDB",
        "PostgreSQL",
        "MySQL",
        "NoSQL",
        "SQL"
      ]
    },
    {
      category: "CI/CD & SCM",
      items: [
        "Jenkins",
        "GitLab",
        "BitBucket",
        "GitHub",
        "Git",
        "Supply Chain Security",
        "Software Bill of Materials (SBOM)",
        "Software Composition Analysis (SCA)"
      ]
    },
    {
      category: "Optimization & Performance",
      items: [
        "Caching strategies",
        "Data Serialization Optimization",
        "ProtoBuffers",
        "FlatBuffers",
        "Latency Optimization",
        "High-Throughput Data Processing"
      ]
    },
    {
      category: "Leadership & Team Management",
      items: [
        "Mentorship",
        "Leadership Development",
        "Team Growth",
        "Cross-Functional Team Management"
      ]
    },
    {
      category: "Technical Strategy & Innovation",
      items: [
        "Technical Evolution",
        "Large-Scale Refactoring",
        "Tool Adoption",
        "Feature Delivery Acceleration",
        "System Resilience Enhancement",
        "Technical Alignment"
      ]
    },
    {
      category: "Revenue & Cost Management",
      items: [
        "Cost Reduction",
        "Infrastructure Optimization",
        "System Reliability",
        "Revenue Growth",
        "Core APIs",
        "Uptime"
      ]
    },
    {
      category: "Spoken Languages",
      items: [
        "Fluent in English and Spanish"
      ]
    }
  ],
  experiences: [
    {
      title: "Senior Staff Engineer, Mercado Libre",
      duration: "Jan 2023 – Present",
      location: "Las Condes, Chile",
      responsibilities: [
        "Optimized a key attribution process, reducing execution time by 80% (4 hours to 45 minutes) and enabling multiple daily runs. Led improvements using Java 17, Apache Spark, AWS EMR, and Parquet, including halving the conversion event evaluation window (30 to 15 days) and adopting graph-based algorithms for efficient data handling. Enhanced resilience reduced incidents from twice weekly to 1-2 per month, boosting marketing efficiency and increasing GMV by 1.2%.",
        "Redesigned Ads catalog publishing system, cutting operational costs by 40%, improving uptime to 99.99%, saving over 150K USD monthly, and boosting GMV by 2.3%. Led a refactor using Go, Redis, DynamoDB, Pub/Sub, and CDC patterns, implementing an audit system to efficiently sync catalogs and reduce reprocessing times from 4 hours to under 15 minutes during peak events like Black Friday. Enhanced system reliability and reduced redundant operations with an event registry, minimizing errors and optimizing marketing investments.",
        "Designed and implemented a Social Commerce capability, enabling 10+ teams to integrate social media profiles and content with Mercado Libre’s platform. Leveraged Java, DynamoDB, Apache Beam, and the Adapter pattern to build a scalable, event-driven solution that abstracts network-specific complexities. Facilitated cross- functional alignment by coordinating with VPs, Directors, and stakeholders through non-abstract large system design sessions and PRDs, ensuring clarity and buy-in. Delivered a solution adopted by 120+ creators, generating 70K videos with 10M+ views in two months and boosting sales by 6% across platforms.",
        "Engineered a video ad integration system for Meta and TikTok, processing over 1M updates per minute with sub-second latency. Built using Go, DynamoDB, and Pub/Sub, the solution addressed critical latency issues, ensuring real-time synchronization of ads and increasing GMV by 5%. This scalable innovation is now a core capability leveraged by four business units."
      ]
    },
    {
      title: "Staff Engineer, Mercado Libre",
      duration: "Jan 2022 - Jan 2023",
      location: "Las Condes, Chile",
      responsibilities: [
        "Increased team productivity by 20% by conducting performance reviews and leading technical mentorship for 100+ engineers. Focused on growth and leadership development, directly enabling five team members to be promoted to senior engineering roles, and fostering a high-performance culture across multidisciplinary teams.",
        "Drove technical evolution by implementing caching (Redis), disaster recovery tests (AWS DRS, Netflix Chaos Monkey), and refactoring internal service SDKs (Java, Go, Python), reducing build times by 40% and downtime by 10%. Spearheaded the adoption of large-scale refactoring tools, accelerating feature delivery by 15% and enhancing system resilience for high-demand environments.",
        "Implemented a real-time data synchronization system for large-scale distributed systems using Apache Kafka, Apache Beam, and Google Cloud Pub/Sub, reducing data latency by 40% and enhancing system reliability."
      ]
    },
    {
      title: "Technical Leader, Mercado Libre",
      duration: "Jul 2020 - Jan 2022",
      location: "Las Condes, Chile",
      responsibilities: [
        "Led senior teams with a focus on mentorship and growth, resulting in 8% of team members being promoted and an increase in team performance by 17%.",
        "Led transformation of traditional processes into transactional models using Java and Spring Boot, resulting in a 30% increase in monthly profits for large-scale financial systems.",
        "Solved high infrastructure costs issue by redesigning core APIs using Java 17, Spring Boot & Webflux, resulting in 70% cost reduction and enhanced system reliability."
      ]
    },
    {
      title: "Senior Software Engineer, Mercado Libre",
      duration: "Apr 2019 - Jul 2020",
      location: "Las Condes, Chile",
      responsibilities: [
        "Designed server-side rendering architecture for multi-platform versioning using Java for backend side and React for frontend side, addressing scalability issues and reducing maintenance overhead by 30%.",
        "Led data serialization optimization for large-scale map search system for mobile apps, enhancing processing speeds by 50% and reducing memory usage by 50% with FlatBuffers, resulting in improved system efficiency and cost savings.",
        "Developed a high-performance, scalable, and fault-tolerant search system for mobile apps using Java, Apache Lucene, and Redis, resulting in a 20% increase in search accuracy and a 10% boost in sales.",
      ]
    },
    {
      title: "Senior Android Developer, Mercado Libre",
      duration: "Oct 2018 - Apr 2019",
      location: "Las Condes, Chile",
      responsibilities: [
        "Led development and optimization of high-traffic banking app using Java and Kotlin, established rigorous quality standards that reduced bugs by 10%, enhancing user experience and boosting app ratings.",
        "Initiated and led programming contests, enhancing algorithmic and problem-solving capabilities across 5 teams, resulting in a 30% increase in code efficiency and a 20% reduction in bug rates."
      ]
    }
  ],
  awards: [
    {
      title: "Gold Medalist in the National Mathematics Olympiad for University Students (2013)",
      description: "Competed against 500+ participants nationwide, showcasing my strong problem-solving and analytical abilities."
    },
    {
      title: "Silver Medalist in the National Mathematics Olympiad for University Students (2012)",
      description: "Demonstrated exceptional mathematical skills and quick thinking in a highly competitive environment."
    }
  ]
};

const allowedOrigin = 'https://anelfdz.com';

const app = new Hono();

// CORS Middleware
app.use(
    '*',
    cors({
      origin: allowedOrigin,
      allowHeaders: ['Authorization'],
      allowMethods: ['GET', 'OPTIONS'],
    })
);

// Auth Middleware
app.use('*', async (c, next) => {
  const authHeader = c.req.header('Authorization');
  const validToken = c.env.AUTH_TOKEN;

  if (!authHeader || authHeader !== `Bearer ${validToken}`) {
    return c.text('Unauthorized: Invalid Token', 401);
  }

  await next();
});

app.get('/', (c) => {
  return c.json<ResumeData>(resumeData, 200);
});

export default app;
