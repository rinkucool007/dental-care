
import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  Microscope, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  Dna, 
  Activity,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Service, ServiceCategory } from './types';

export const CLINIC_NAME = "The Dental Care Lounge";

export const CONTACT_INFO = {
  address: "123 Elegance Boulevard, Suite 500, Downtown City",
  phone: "+1 (555) 987-6543",
  emergency: "+1 (555) 000-HELP",
  email: "care@dentalcarelounge.com",
  hours: [
    { day: "Mon - Fri", time: "08:00 AM - 07:00 PM" },
    { day: "Saturday", time: "09:00 AM - 04:00 PM" },
    { day: "Sunday", time: "Closed (Emergency Only)" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'laser-surgery',
    title: 'Laser Surgery',
    description: 'Minimally invasive treatment with faster healing times and reduced discomfort.',
    category: ServiceCategory.GENERAL,
    icon: 'Zap'
  },
  {
    id: 'digital-imaging',
    title: 'Digital Imaging',
    description: 'High-precision 3D scanning for accurate diagnosis and treatment planning.',
    category: ServiceCategory.GENERAL,
    icon: 'Monitor'
  },
  {
    id: 'dental-aesthetics',
    title: 'Dental Aesthetics',
    description: 'Comprehensive smile makeovers using the latest in porcelain and composite tech.',
    category: ServiceCategory.AESTHETIC,
    icon: 'Sparkles'
  },
  {
    id: 'implantology',
    title: 'Implantology',
    description: 'Permanent tooth replacement solutions that look and feel completely natural.',
    category: ServiceCategory.IMPLANTOLOGY,
    icon: 'Dna'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Professional grade whitening for a brighter, more confident smile.',
    category: ServiceCategory.AESTHETIC,
    icon: 'Smile'
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    description: 'Regular checkups and cleaning to maintain lifelong oral health.',
    category: ServiceCategory.GENERAL,
    icon: 'ShieldCheck'
  }
];

export const SUGGESTED_QUESTIONS = [
  "What is laser dentistry?",
  "How long do implants last?",
  "Tips for sensitive teeth",
  "How much is whitening?",
  "Do you take insurance?",
  "Emergency pain advice",
  "Difference between veneers and crowns",
  "How often should I clean?",
  "Child's first dental visit",
  "Invisalign vs Braces"
];

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, any> = {
    Stethoscope, Sparkles, Smile, Microscope, ShieldCheck, Zap, Monitor, Dna, Activity, Calendar, Phone, Mail, MapPin, Clock, HelpCircle
  };
  const IconComp = icons[name] || Activity;
  return <IconComp size={size} className={className} />;
};
