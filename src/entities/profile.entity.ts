import { LinkedInCompany } from './linkedin-company.entity';
import { LinkedInProfile } from './linkedin-profile.entity';

export interface Profile extends LinkedInProfile {
  company: LinkedInCompany;
  companies: LinkedInCompany[];
  pictureUrls: string[];
}
