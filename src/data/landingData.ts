export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  duration: string;
  tag: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'cabinets';
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  neighborhood: string;
  service: string;
  rating: number;
  date: string;
  source: 'Google' | 'HomeStars' | 'Houzz';
  comment: string;
  verified: boolean;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Estimates' | 'Paint & Process' | 'Warranty & Insurance' | 'Payment';
}

export const COMPANY_PHONE = "(416) 494-9095";
export const COMPANY_EMAIL = "Sales@HomePaintersToronto.com";
export const FOUNDED_YEAR = 1991;

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior',
    title: 'Interior House Painting',
    subtitle: 'Living rooms, bedrooms, ceilings & trim',
    description: 'Transform your daily living spaces with crisp lines, dustless prep, and odor-free zero-VOC paints from Benjamin Moore and Sherwin-Williams.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Dustless drywall sanding & repairs', 'Furniture wrapping & floor drop cloths', 'Zero-VOC eco-safe paints'],
    duration: '1 - 3 Days',
    tag: 'Most Popular'
  },
  {
    id: 'exterior',
    title: 'Exterior House Painting',
    subtitle: 'Brick, stucco, siding, decks & trim',
    description: 'Protect your home against harsh Ontario winters and summer UV rays with industrial-grade weatherproofing and masonry paint.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    features: ['High-pressure surface wash', 'Caulking, scrape & primer seal', '3-year weather protection warranty'],
    duration: '2 - 5 Days',
    tag: 'High Protection'
  },
  {
    id: 'cabinets',
    title: 'Kitchen Cabinet Refinishing',
    subtitle: 'Factory-spray finish for modern kitchens',
    description: 'Save 75% compared to full cabinet replacement. We remove doors for factory spray painting and brush-and-roll all frames on-site.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    features: ['Catalyzed industrial polyurethane finish', 'Smooth brushmark-free factory look', 'Hardware installation included'],
    duration: '3 - 4 Days',
    tag: 'Save 75%'
  },
  {
    id: 'carpentry',
    title: 'Carpentry, Repairs & Staining',
    subtitle: 'Baseboards, crown moulding & brick staining',
    description: 'Complete all your finish carpentry, trim installation, wood rot replacement, and modern brick stain transformations in a single contract.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    features: ['Wood rot restoration', 'Crown moulding & wainscoting', 'Translucent brick masonry staining'],
    duration: '1 - 2 Days',
    tag: 'Full Service'
  }
];

export const FLAGSHIP_PROJECT: TransformationItem = {
  id: 'flagship',
  title: 'Luxury Heritage Home Revival',
  category: 'interior',
  location: 'Interior Painting — Toronto (The Annex)',
  description: 'Complete high-ceiling interior makeover replacing peeling, discolored walls with warm matte neutrals, sharp accent archways, and restored heritage wood trim.',
  beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  duration: '3 days total'
};

export const GALLERY_PROJECTS: TransformationItem[] = [
  {
    id: 'proj-1',
    title: 'Modern Living Room & Trim',
    category: 'interior',
    location: 'Interior Painting — Toronto',
    description: 'Replaced dark, outdated 90s yellow with Benjamin Moore Chantilly Lace and matte black staircase spindles.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    duration: '2 Days'
  },
  {
    id: 'proj-2',
    title: 'Classic Craftsman Stucco & Siding',
    category: 'exterior',
    location: 'Exterior House Painting — North York',
    description: 'Power-washed, primed, and sprayed weatherproof architectural coatings on exterior cedar and brick facade.',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    duration: '4 Days'
  },
  {
    id: 'proj-3',
    title: 'Oak to Custom Matte White Cabinets',
    category: 'cabinets',
    location: 'Cabinet Refinishing — Etobicoke',
    description: 'Transformed heavy honey oak cabinets into sleek, contemporary shaker style with brass hardware.',
    beforeImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    duration: '3 Days'
  },
  {
    id: 'proj-4',
    title: 'Open Concept Great Room & Archway',
    category: 'interior',
    location: 'Modern Living Room & Trim — Markham',
    description: 'Smooth ceiling popcorn removal followed by Level 5 skim coating and two coats of Sherwin-Williams Emerald.',
    beforeImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    duration: '3 Days'
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David & Karen M.',
    neighborhood: 'The Beaches, Toronto',
    service: 'Full Interior & Staircase Refinishing',
    rating: 5,
    date: 'March 2026',
    source: 'HomeStars',
    comment: 'Brian and his painting crew were outstanding from the quote to final cleanup. They protected every hardwood floor and finished a 2,400 sq.ft home in just three days. Absolutely meticulous cut-ins and no mess left behind!',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Michael Chen',
    neighborhood: 'North York',
    service: 'Exterior Brick Staining & Siding',
    rating: 5,
    date: 'February 2026',
    source: 'Google',
    comment: 'I called three painting contractors in Toronto. Home Painters Toronto was the only one that provided a detailed, itemized quote in 24 hours with exact paint specifications. The house looks brand new from the curb.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    neighborhood: 'Rosedale',
    service: 'Kitchen Cabinet Spray Painting',
    rating: 5,
    date: 'January 2026',
    source: 'Houzz',
    comment: 'Saved over $18,000 avoiding a kitchen demolition. The spray finish on our cabinet doors looks like it came straight out of a designer showroom. The painters were polite, on time every morning, and very courteous.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-4',
    name: 'Robert V.',
    neighborhood: 'High Park / Bloor West',
    service: 'Condo Painting & Popcorn Ceiling Removal',
    rating: 5,
    date: 'April 2026',
    source: 'Google',
    comment: 'Exceptional work in our 1,200 sq ft condo. The ceilings are now perfectly flat and the color consultation was a huge help in picking the right warm gray tone for our natural light. Highly recommend!',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Estimates',
    question: 'How quickly can I get a quote and start my painting project?',
    answer: 'We provide free estimates within 24 hours of your initial inquiry. In many cases, we can complete a virtual or photo-based estimate the same day. Once approved, our Toronto teams can typically begin work within 3 to 7 business days.'
  },
  {
    id: 'faq-2',
    category: 'Paint & Process',
    question: 'What paint brands do you use, and do you supply the paint?',
    answer: 'We use premier trade-grade coatings primarily from Benjamin Moore (Regal Select, Aura, Advance) and Sherwin-Williams (Emerald, Duration). All high-grade primers, topcoats, and materials are included in your quote with zero hidden surcharges.'
  },
  {
    id: 'faq-3',
    category: 'Warranty & Insurance',
    question: 'What warranty and insurance protection do you provide?',
    answer: 'Every residential project is backed by our dedicated 2-to-3 Year Workmanship Warranty covering peeling, blistering, and flaking. We carry $5,000,000 in Commercial General Liability Insurance and full WSIB coverage for every team member.'
  },
  {
    id: 'faq-4',
    category: 'Paint & Process',
    question: 'Do I need to move all my furniture and prep the rooms beforehand?',
    answer: 'No. Our team handles the heavy lifting! We move furniture away from walls, wrap large items in protective clean plastic film, cover all floors with clean canvas drop cloths, and tape all baseboards and fixtures. When done, we put everything back in place.'
  },
  {
    id: 'faq-5',
    category: 'Payment',
    question: 'What payment options and deposit terms do you offer?',
    answer: 'We offer flexible payment options with no large surprise deposits. You can pay via credit card, e-Transfer, or select flexible low-interest monthly payment plans through our financing partners.'
  },
  {
    id: 'faq-6',
    category: 'Paint & Process',
    question: 'Can you handle drywall repairs, carpentry, or trim at the same time?',
    answer: 'Yes! That is one of our biggest advantages. Our in-house carpenters and drywall pros fix holes, cracks, water stains, replace baseboards, install crown moulding, and address wood rot before painting, saving you the hassle of hiring multiple contractors.'
  }
];

export const SERVICE_AREAS = [
  'Downtown Toronto',
  'North York',
  'Etobicoke',
  'Scarborough',
  'The Beaches',
  'Rosedale & Yorkville',
  'High Park',
  'Mississauga',
  'Oakville',
  'Markham',
  'Vaughan',
  'Richmond Hill',
  'Burlington'
];
