// FALCON SENSE - Professional Geospatial Data

import { NavItem, Capability, TechnologyLayer, Industry } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Technology', href: '#technology' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'imaging',
    name: 'Advanced Imaging',
    icon: 'eye',
    biologicalStats: 'High-Resolution Multispectral',
    geomaticsCapability: 'Hyperspectral & RGB Data Capture',
    description: 'We capture high-resolution imagery across multiple spectrums to provide detailed insights into terrain, vegetation, and infrastructure.',
    technicalSpecs: [
      { label: 'Resolution', value: '3cm/pixel' },
      { label: 'Spectral Bands', value: '5-200' },
      { label: 'Accuracy', value: 'Sub-decimeter' },
      { label: 'Coverage', value: 'Up to 500ha/day' },
    ],
    useCases: [
      'Crop health monitoring',
      'Environmental assessments',
      'Infrastructure inspection',
      'Land use classification',
    ],
  },
  {
    id: 'lidar',
    name: 'LiDAR Scanning',
    icon: 'talons',
    biologicalStats: 'Precision 3D Mapping',
    geomaticsCapability: 'High-Density Point Clouds',
    description: 'Our LiDAR systems penetrate dense vegetation to create highly accurate digital elevation models and 3D structural representations.',
    technicalSpecs: [
      { label: 'Point Density', value: '200+ pts/m²' },
      { label: 'Vertical Accuracy', value: '< 3cm' },
      { label: 'Sensor Range', value: '250m' },
      { label: 'Data Format', value: 'LAS/LAZ' },
    ],
    useCases: [
      'Topographic surveys',
      'Forestry management',
      'Powerline inspections',
      'Volumetric analysis',
    ],
  },
  {
    id: 'mapping',
    name: 'Topographic Mapping',
    icon: 'orbit',
    biologicalStats: 'Engineering Grade Accuracy',
    geomaticsCapability: 'RTK/PPK Surveying',
    description: 'Utilizing survey-grade GNSS equipment and drones, we deliver topographic maps and orthomosaics with sub-centimeter precision.',
    technicalSpecs: [
      { label: 'RTK/PPK', value: 'Integrated' },
      { label: 'GCPs', value: 'Survey-grade' },
      { label: 'Orthomosaic Res', value: '1.5cm' },
      { label: 'Format', value: 'GeoTIFF/DWG' },
    ],
    useCases: [
      'Construction site planning',
      'Boundary surveys',
      'Drainage analysis',
      'Urban planning',
    ],
  },
];

export const TECHNOLOGY_LAYERS: TechnologyLayer[] = [
  {
    id: 'platforms',
    name: 'Platform Fleet',
    title: 'Professional Aerial Systems',
    description: 'A diverse range of VTOL, fixed-wing, and multi-rotor platforms.',
    items: [
      { name: 'Fixed-Wing VTOL', description: 'Long-endurance mapping platforms', icon: 'drone' },
      { name: 'Industrial Multirotors', description: 'High-payload sensor carries', icon: 'multirotor' },
      { name: 'Satellite Constellations', description: 'Regional monitoring access', icon: 'satellite' },
    ],
    visualTransform: 'Professional UAV hardware',
  },
  {
    id: 'sensors',
    name: 'Sensor Payloads',
    title: 'Precision Data Collection',
    description: 'Industry-leading LiDAR, multispectral, and thermal sensors.',
    items: [
      { name: 'LiDAR Scanners', description: 'Riegl and Livox integration', icon: 'lidar' },
      { name: 'Multispectral Cameras', description: 'MicaSense RedEdge-P', icon: 'camera' },
      { name: 'Thermal Radiometric', description: 'FLIR high-res sensors', icon: 'thermal' },
    ],
    visualTransform: 'Advanced optical systems',
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'mining',
    name: 'Mining',
    icon: 'pickaxe',
    predatorFocus: 'Stockpile volume, pit mapping',
    visualTreatment: 'Survey-grade site analysis',
    coordinates: { lat: -25.9205, lng: 32.5625 },
    activeHunts: 12,
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'crop',
    predatorFocus: 'Precision farming, yield health',
    visualTreatment: 'Multispectral analysis',
    coordinates: { lat: -18.6687, lng: 35.1580 },
    activeHunts: 25,
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: 'building',
    predatorFocus: 'Asset inspection, road mapping',
    visualTreatment: 'Structural digital twins',
    coordinates: { lat: -25.9656, lng: 32.5832 },
    activeHunts: 18,
  },
  {
    id: 'environment',
    name: 'Environment',
    icon: 'tree',
    predatorFocus: 'Conservation, land monitoring',
    visualTreatment: 'Habitat mapping',
    coordinates: { lat: -21.5833, lng: 35.5833 },
    activeHunts: 8,
  },
];

export const TAGLINE = 'Professional Geospatial Solutions in Mozambique.';
export const KEY_PHRASES = [
  'Precision Data for Complex Projects',
  'Survey-Grade Aerial Mapping',
  'Advanced LiDAR and Imaging Solutions',
  'Mozambique\'s Geospatial Intelligence Partner',
];
