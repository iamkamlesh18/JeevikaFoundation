export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "empowering-rural-education",
    title: "Learning Closer to Home",
    excerpt: "How community-rooted learning support is widening access for rural students.",
    date: "March 15, 2024",
    author: "Jeevika Team",
    category: "Education",
    image: "🎓",
    content: `Quality education becomes more achievable when learning support is available close to where children live.

Through our digital learning centers, students receive academic support, digital exposure, and steady mentoring that complements what they are already trying to build in school.

One of those students is Priya, a 12-year-old from a remote village. With scholarship support, regular guidance, and a place to continue learning, she has stayed engaged in school and now talks confidently about becoming a teacher.

This is the kind of progress we work toward: not only stronger academic outcomes, but stronger confidence about what a future can hold.`,
  },
  {
    slug: "women-livelihood-programs",
    title: "Women Building Steady Incomes",
    excerpt: "Creating sustainable income opportunities through skills, support, and confidence.",
    date: "March 10, 2024",
    author: "Jeevika Team",
    category: "Livelihood",
    image: "💼",
    content: `Skills training matters most when it is paired with confidence, market awareness, and the support needed to keep going.

Our livelihoods work with women combines practical training with guidance on planning, pricing, and enterprise development so that income generation can become more stable over time.

Rekha, one of our participants, began with a basic tailoring course and now runs her own stitching business. Her work now contributes meaningfully to household income and has also opened work for other women in her community.

The larger goal is not only employment. It is agency: the ability to earn, decide, contribute, and lead with greater confidence.`,
  },
  {
    slug: "healthcare-awareness-camps",
    title: "Health Access Through Local Outreach",
    excerpt: "Bringing preventive healthcare and trusted information closer to underserved communities.",
    date: "March 5, 2024",
    author: "Jeevika Team",
    category: "Healthcare",
    image: "🏥",
    content: `Regular health outreach can make the difference between delayed care and timely support.

In areas where access to medical facilities is limited, our camps and awareness efforts bring preventive guidance, basic screening, referrals, and trusted information closer to families.

The work also extends beyond one-day camps. We support local health workers and community outreach so that awareness, follow-up, and referrals do not end when the event does.

The impact shows up in earlier detection, stronger awareness, and more confidence in seeking care when it is needed.`,
  },
  {
    slug: "community-infrastructure-projects",
    title: "Infrastructure That Supports Everyday Life",
    excerpt: "Building the practical foundations communities need for safer, healthier daily life.",
    date: "February 25, 2024",
    author: "Jeevika Team",
    category: "Development",
    image: "🏗️",
    content: `Infrastructure often shapes whether people can learn, stay healthy, and move through daily life with dignity.

Our infrastructure work focuses on practical essentials such as water systems, sanitation, learning spaces, and shared facilities that improve everyday conditions in under-resourced areas.

These interventions may appear simple on paper, but they often influence multiple outcomes at once: school attendance, health, safety, and the usability of shared community spaces.

When infrastructure improves, communities are better positioned to build on that progress in lasting ways.`,
  },
  {
    slug: "volunteer-success-stories",
    title: "What Sustained Volunteering Makes Possible",
    excerpt: "How volunteers strengthen programs through steady, practical contributions.",
    date: "February 20, 2024",
    author: "Jeevika Team",
    category: "Community",
    image: "🤝",
    content: `Volunteers strengthen our work not only by showing up once, but by contributing with consistency and care.

From students tutoring children to professionals offering technical advice, volunteers extend the reach of our programs in ways that are practical and deeply human.

Arun, a software engineer, gives two hours every weekend to support digital literacy sessions for rural youth. Over time, his contribution has helped learners gain basic computer confidence and imagine new education and employment pathways.

This is what meaningful volunteering looks like for us: steady involvement, respectful collaboration, and support that communities can rely on.`,
  },
  {
    slug: "disaster-relief-response",
    title: "Relief That Continues Into Recovery",
    excerpt: "How emergency support and rehabilitation come together after a crisis.",
    date: "February 15, 2024",
    author: "Jeevika Team",
    category: "Relief",
    image: "🆘",
    content: `Relief matters most when emergency response is paired with a path toward recovery.

Our disaster response work focuses on both immediate needs and the slower process that follows: restoring stability, supporting families, and helping communities rebuild with dignity.

That can include emergency supplies, temporary shelter, medical support, rehabilitation assistance, and follow-up that extends beyond the first days of crisis.

Recovery is never only about material aid. It is also about restoring confidence, continuity, and the conditions needed for families to move forward again.`,
  },
]
