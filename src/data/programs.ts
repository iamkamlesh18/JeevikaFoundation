import { FiActivity, FiBook, FiHome, FiMapPin, FiTrendingUp, FiUsers } from "react-icons/fi"

export const programs = [
  {
    slug: "digital-learning-centers",
    title: "Digital Learning Centers",
    icon: FiBook,
    summary:
      "Technology-enabled learning spaces that offer academic support, digital literacy, and mentorship for children and youth.",
    outcomes: ["50+ centers supported", "200+ learners reached", "Scholarship and mentoring pathways"],
    location: "Across 5 districts",
  },
  {
    slug: "skills-for-success",
    title: "Skills for Success",
    icon: FiTrendingUp,
    summary:
      "Vocational and entrepreneurship training that improves employability and strengthens local income generation over time.",
    outcomes: ["500+ participants trained", "60% linked to livelihoods", "Enterprise guidance for women and youth"],
    location: "10+ training hubs",
  },
  {
    slug: "women-empowerment",
    title: "Women’s Empowerment Initiative",
    icon: FiUsers,
    summary:
      "Programs focused on financial literacy, self-help groups, confidence building, and leadership opportunities for women.",
    outcomes: ["300+ women engaged", "50+ support groups formed", "Leadership and safety workshops"],
    location: "Rural communities",
  },
  {
    slug: "community-health-outreach",
    title: "Community Health Outreach",
    icon: FiActivity,
    summary:
      "Regular camps and awareness sessions that bring preventive care, basic health guidance, and referrals closer to underserved families.",
    outcomes: ["1000+ monthly beneficiaries", "Health camps and awareness drives", "Local referral coordination"],
    location: "Multi-location outreach",
  },
  {
    slug: "infrastructure-development",
    title: "Rural Infrastructure Development",
    icon: FiHome,
    summary:
      "Improving essential infrastructure such as learning spaces, toilets, water systems, and shared community facilities.",
    outcomes: ["20+ infrastructure projects", "Safer public-use spaces", "Improved daily living conditions"],
    location: "Under-resourced settlements",
  },
  {
    slug: "disaster-relief",
    title: "Disaster Relief & Rehabilitation",
    icon: FiMapPin,
    summary:
      "Emergency assistance and recovery planning that help families stabilize, rebuild, and regain dignity after crises.",
    outcomes: ["5000+ families supported", "Emergency supplies and shelter aid", "Recovery and rehabilitation follow-through"],
    location: "Disaster-affected regions",
  },
] as const
