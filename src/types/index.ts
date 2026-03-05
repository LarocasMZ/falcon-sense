// FALCON SENSE Type Definitions

export interface NavItem {
  label: string;
  href: string;
  code: string;
}

export interface Capability {
  id: string;
  name: string;
  icon: string;
  biologicalStats: string;
  geomaticsCapability: string;
  description: string;
  technicalSpecs: TechnicalSpec[];
  useCases: string[];
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface TechnologyLayer {
  id: string;
  name: string;
  title: string;
  description: string;
  items: TechnologyItem[];
  visualTransform: string;
}

export interface TechnologyItem {
  name: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  predatorFocus: string;
  visualTreatment: string;
  coordinates: { lat: number; lng: number };
  activeHunts: number;
}

export interface CaseStudy {
  id: string;
  mission: string;
  date: string;
  territory: string;
  prey: string;
  tactics: string[];
  duration: string;
  strikeAccuracy: string;
  outcome: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  falconEquivalent: string;
  flightHours: string;
  specializedPrey: string[];
  territoryKnowledge: string;
  strikeAccuracy: string;
  imageUrl: string;
}

export interface Insight {
  id: string;
  title: string;
  category: 'Thermal Signatures' | 'Wind Patterns' | 'Prey Movements' | 'Territory Mapping';
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface ContactForm {
  clientDesignation: string;
  contactFrequency: string;
  territoryCoordinates: string;
  preySpecification: string;
  requiredPrecision: string;
  timeToStrike: string;
  intelligenceBriefing: string;
}

export interface HUDTelemetry {
  altitude: number;
  speed: number;
  targets: number;
  resolution: number;
}
