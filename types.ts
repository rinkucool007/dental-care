
export enum ServiceCategory {
  GENERAL = 'General Dental Care',
  AESTHETIC = 'Aesthetic Dentistry',
  ORTHODONTICS = 'Orthodontics',
  IMPLANTOLOGY = 'Implantology'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredTime: string;
  message: string;
}
