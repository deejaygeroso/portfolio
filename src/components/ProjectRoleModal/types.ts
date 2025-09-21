import { IProject } from '@/interfaces';

export interface ProjectRoleModalProps {
  open: boolean;
  onClose: () => void;
  project: IProject;
  responsibilities: string[];
  mission?: string;
  skills?: string[];
  impact?: string;
}
