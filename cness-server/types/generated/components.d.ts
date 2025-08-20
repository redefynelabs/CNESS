import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.cards': HomeCards;
      'home.hero-section': HomeHeroSection;
      'home.insights': HomeInsights;
      'home.insights-card': HomeInsightsCard;
      'home.investor': HomeInvestor;
      'home.solution': HomeSolution;
      'home.subscribe': HomeSubscribe;
      'home.video-banner': HomeVideoBanner;
      'home.why-us': HomeWhyUs;
      'reusable.button': ReusableButton;
      'reusable.head': ReusableHead;
    }
  }
}
