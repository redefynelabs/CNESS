import type { Schema, Struct } from '@strapi/strapi';

export interface CareerBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_career_benefit_cards';
  info: {
    displayName: 'BenefitCard';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CareerBenefits extends Struct.ComponentSchema {
  collectionName: 'components_career_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    BenfitsSection: Schema.Attribute.Component<'career.benefit-card', true>;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CareerOpenPositions extends Struct.ComponentSchema {
  collectionName: 'components_career_open_positions';
  info: {
    displayName: 'OpenPositions';
    icon: 'collapse';
  };
  attributes: {
    AvailableRoles: Schema.Attribute.Component<'career.roles', true>;
    badgeText: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CareerRoles extends Struct.ComponentSchema {
  collectionName: 'components_career_roles';
  info: {
    displayName: 'Roles';
    icon: 'connector';
  };
  attributes: {
    applyLink: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface CompanyContentWmdCard extends Struct.ComponentSchema {
  collectionName: 'components_company_content_wmd_cards';
  info: {
    displayName: 'Content_WMDCard';
  };
  attributes: {
    overlayImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface CompanyImageWmdCard extends Struct.ComponentSchema {
  collectionName: 'components_company_image_wmd_cards';
  info: {
    displayName: 'Image_WMDCard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface CompanyMilestone extends Struct.ComponentSchema {
  collectionName: 'components_company_milestones';
  info: {
    displayName: 'Milestone';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    MilestoneCards: Schema.Attribute.Component<'company.milestone-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CompanyMilestoneCard extends Struct.ComponentSchema {
  collectionName: 'components_company_milestone_cards';
  info: {
    displayName: 'MilestoneCard';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    badgeText: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CompanyReviewWmdCard extends Struct.ComponentSchema {
  collectionName: 'components_company_review_wmd_cards';
  info: {
    displayName: 'Review_WMDCard';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    comment: Schema.Attribute.String;
    profession: Schema.Attribute.String;
  };
}

export interface CompanyStats extends Struct.ComponentSchema {
  collectionName: 'components_company_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    stats: Schema.Attribute.String;
  };
}

export interface CompanyVisionMissionCard extends Struct.ComponentSchema {
  collectionName: 'components_company_vision_mission_cards';
  info: {
    displayName: 'VisionMissionCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_details';
  info: {
    displayName: 'ContactDetails';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ContactContactHead extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_heads';
  info: {
    displayName: 'ContactHead';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    ContactDetails: Schema.Attribute.Component<'contact.contact-details', true>;
    desc: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ContactOfficeLocation extends Struct.ComponentSchema {
  collectionName: 'components_contact_office_locations';
  info: {
    displayName: 'OfficeLocation';
  };
  attributes: {
    OfficeLocationCards: Schema.Attribute.Component<
      'contact.office-location-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContactOfficeLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_office_location_cards';
  info: {
    displayName: 'OfficeLocationCard';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    badgeText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HomeCards extends Struct.ComponentSchema {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBackgroundImage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    statText: Schema.Attribute.String;
    statValue: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Button: Schema.Attribute.Component<'reusable.button', true>;
    cards: Schema.Attribute.Component<'home.cards', true>;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeInsights extends Struct.ComponentSchema {
  collectionName: 'components_home_insights';
  info: {
    displayName: 'Insights';
  };
  attributes: {
    card: Schema.Attribute.Component<'home.insights-card', true>;
    InsightsHead: Schema.Attribute.Component<'reusable.head', false>;
  };
}

export interface HomeInsightsCard extends Struct.ComponentSchema {
  collectionName: 'components_home_insights_cards';
  info: {
    displayName: 'InsightsCard';
  };
  attributes: {
    cardId: Schema.Attribute.Integer;
    category: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeInvestor extends Struct.ComponentSchema {
  collectionName: 'components_home_investors';
  info: {
    displayName: 'Investor';
  };
  attributes: {
    Content: Schema.Attribute.Component<'reusable.head', false>;
  };
}

export interface HomeSolution extends Struct.ComponentSchema {
  collectionName: 'components_home_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.cards', true>;
    SolutionHead: Schema.Attribute.Component<'reusable.head', false>;
  };
}

export interface HomeSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_home_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeVideoBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_video_banners';
  info: {
    displayName: 'VideoBanner';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos' | 'images'>;
  };
}

export interface HomeWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_home_whyuses';
  info: {
    displayName: 'WhyUs';
  };
  attributes: {
    WhyUsContent: Schema.Attribute.Component<'reusable.head', false>;
  };
}

export interface InsightsVideo extends Struct.ComponentSchema {
  collectionName: 'components_insights_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoLink: Schema.Attribute.String;
  };
}

export interface InvestorFundingRContentCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_funding_r_content_cards';
  info: {
    displayName: 'FundingR_ContentCard';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface InvestorIfaqQAs extends Struct.ComponentSchema {
  collectionName: 'components_investor_ifaq_q_as';
  info: {
    displayName: 'IFAQ_QAs';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface InvestorInvestorFaq extends Struct.ComponentSchema {
  collectionName: 'components_investor_investor_faqs';
  info: {
    displayName: 'InvestorFAQ';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    QAs: Schema.Attribute.Component<'investor.ifaq-q-as', true>;
    title: Schema.Attribute.String;
  };
}

export interface InvestorPitchDeck extends Struct.ComponentSchema {
  collectionName: 'components_investor_pitch_decks';
  info: {
    displayName: 'PitchDeck';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ReusableButton extends Struct.ComponentSchema {
  collectionName: 'components_reusable_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    isPrimary: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ReusableHead extends Struct.ComponentSchema {
  collectionName: 'components_reusable_heads';
  info: {
    displayName: 'Head';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    buttonPosition: Schema.Attribute.Enumeration<['left', 'right']>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    descriptionPosition: Schema.Attribute.Enumeration<['left', 'right']>;
    highlight: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionModules extends Struct.ComponentSchema {
  collectionName: 'components_solution_modules';
  info: {
    displayName: 'Modules';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    ModulesCard: Schema.Attribute.Component<'solution.modules-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionModulesCard extends Struct.ComponentSchema {
  collectionName: 'components_solution_modules_cards';
  info: {
    displayName: 'ModulesCard';
  };
  attributes: {
    title: Schema.Attribute.String;
    Values: Schema.Attribute.RichText;
  };
}

export interface SolutionSolutionStats extends Struct.ComponentSchema {
  collectionName: 'components_solution_solution_stats';
  info: {
    displayName: 'SolutionStats';
  };
  attributes: {
    desc: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SolutionTechnoBottomCard extends Struct.ComponentSchema {
  collectionName: 'components_solution_techno_bottom_cards';
  info: {
    displayName: 'TechnoBottomCard';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stat: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionTechnoCard extends Struct.ComponentSchema {
  collectionName: 'components_solution_techno_cards';
  info: {
    displayName: 'TechnoCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionTechnoSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_techno_sections';
  info: {
    displayName: 'TechnoSection';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    TechnoCards: Schema.Attribute.Component<'solution.techno-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface TeamCommentCard extends Struct.ComponentSchema {
  collectionName: 'components_team_comment_cards';
  info: {
    displayName: 'CommentCard';
    icon: 'command';
  };
  attributes: {
    Button: Schema.Attribute.Component<'reusable.button', false>;
    comment: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface TeamCommentSection extends Struct.ComponentSchema {
  collectionName: 'components_team_comment_sections';
  info: {
    displayName: 'CommentSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Card: Schema.Attribute.Component<'team.comment-card', false>;
  };
}

export interface TeamTeamMemberCard extends Struct.ComponentSchema {
  collectionName: 'components_team_team_member_cards';
  info: {
    displayName: 'TeamMember_Card';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    department: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profileLink: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'career.benefit-card': CareerBenefitCard;
      'career.benefits': CareerBenefits;
      'career.open-positions': CareerOpenPositions;
      'career.roles': CareerRoles;
      'company.content-wmd-card': CompanyContentWmdCard;
      'company.image-wmd-card': CompanyImageWmdCard;
      'company.milestone': CompanyMilestone;
      'company.milestone-card': CompanyMilestoneCard;
      'company.review-wmd-card': CompanyReviewWmdCard;
      'company.stats': CompanyStats;
      'company.vision-mission-card': CompanyVisionMissionCard;
      'contact.contact-details': ContactContactDetails;
      'contact.contact-head': ContactContactHead;
      'contact.contact-us': ContactContactUs;
      'contact.office-location': ContactOfficeLocation;
      'contact.office-location-card': ContactOfficeLocationCard;
      'home.cards': HomeCards;
      'home.hero-section': HomeHeroSection;
      'home.insights': HomeInsights;
      'home.insights-card': HomeInsightsCard;
      'home.investor': HomeInvestor;
      'home.solution': HomeSolution;
      'home.subscribe': HomeSubscribe;
      'home.video-banner': HomeVideoBanner;
      'home.why-us': HomeWhyUs;
      'insights.video': InsightsVideo;
      'investor.funding-r-content-card': InvestorFundingRContentCard;
      'investor.ifaq-q-as': InvestorIfaqQAs;
      'investor.investor-faq': InvestorInvestorFaq;
      'investor.pitch-deck': InvestorPitchDeck;
      'reusable.button': ReusableButton;
      'reusable.head': ReusableHead;
      'solution.modules': SolutionModules;
      'solution.modules-card': SolutionModulesCard;
      'solution.solution-stats': SolutionSolutionStats;
      'solution.techno-bottom-card': SolutionTechnoBottomCard;
      'solution.techno-card': SolutionTechnoCard;
      'solution.techno-section': SolutionTechnoSection;
      'team.comment-card': TeamCommentCard;
      'team.comment-section': TeamCommentSection;
      'team.team-member-card': TeamTeamMemberCard;
    }
  }
}
