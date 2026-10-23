/**
 * Estimate calculation logic and lead validation for Home Painters Toronto
 */

export type ServiceType = 
  | 'interior'
  | 'exterior'
  | 'cabinets'
  | 'condo'
  | 'commercial';

export type SurfaceCondition = 'excellent' | 'minor_repairs' | 'heavy_prep';
export type ProjectTimeline = 'asap' | 'two_weeks' | 'one_month' | 'flexible';

export interface EstimateInput {
  serviceType: ServiceType;
  rooms?: number;
  squareFootage?: number;
  surfaceCondition?: SurfaceCondition;
  timeline?: ProjectTimeline;
}

export interface EstimateResult {
  minPrice: number;
  maxPrice: number;
  estimatedDays: number;
  warrantyYears: number;
  includedPerks: string[];
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  postalCode: string;
  propertyType?: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  let baseMin = 500;
  let baseMax = 950;
  let days = 1;
  let warranty = 3;

  switch (input.serviceType) {
    case 'interior': {
      const roomCount = Math.max(1, input.rooms || 1);
      baseMin = roomCount * 450;
      baseMax = roomCount * 750;
      days = Math.max(1, Math.ceil(roomCount * 0.75));
      break;
    }
    case 'exterior': {
      const sqft = Math.max(800, input.squareFootage || 1800);
      baseMin = Math.round(sqft * 2.2);
      baseMax = Math.round(sqft * 3.8);
      days = Math.max(2, Math.ceil(sqft / 500));
      break;
    }
    case 'cabinets': {
      const doors = Math.max(15, input.rooms ? input.rooms * 8 : 25);
      baseMin = Math.round(doors * 110);
      baseMax = Math.round(doors * 165);
      days = 3;
      break;
    }
    case 'condo': {
      const sqft = Math.max(500, input.squareFootage || 750);
      baseMin = Math.round(sqft * 1.8);
      baseMax = Math.round(sqft * 2.8);
      days = Math.max(1, Math.ceil(sqft / 600));
      break;
    }
    case 'commercial': {
      const sqft = Math.max(1000, input.squareFootage || 2000);
      baseMin = Math.round(sqft * 1.9);
      baseMax = Math.round(sqft * 3.2);
      days = Math.max(3, Math.ceil(sqft / 700));
      break;
    }
  }

  // Adjust for condition
  if (input.surfaceCondition === 'minor_repairs') {
    baseMin = Math.round(baseMin * 1.12);
    baseMax = Math.round(baseMax * 1.15);
  } else if (input.surfaceCondition === 'heavy_prep') {
    baseMin = Math.round(baseMin * 1.25);
    baseMax = Math.round(baseMax * 1.30);
    days += 1;
  }

  // Round cleanly to tens
  baseMin = Math.round(baseMin / 50) * 50;
  baseMax = Math.round(baseMax / 50) * 50;

  return {
    minPrice: baseMin,
    maxPrice: baseMax,
    estimatedDays: days,
    warrantyYears: warranty,
    includedPerks: [
      'Benjamin Moore or Sherwin-Williams Premium Paint',
      'Full floor, furniture, and fixture draping',
      'Surface drywall patch & sanding included',
      'Final walkthrough with Project Manager',
      'No deposit options available'
    ]
  };
}

export function validateLeadForm(data: LeadFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  const cleanedPhone = data.phone.replace(/[^0-9]/g, '');
  if (!cleanedPhone || cleanedPhone.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.postalCode || data.postalCode.trim().length < 3) {
    errors.postalCode = 'Please enter your Toronto / GTA postal code or city';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
