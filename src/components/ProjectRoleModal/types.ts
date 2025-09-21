import { IProject } from '@/interfaces';

export interface ProjectRoleModalProps {
  open: boolean;
  onClose: () => void;
  project: IProject;
  responsibilities: string[];
  skills?: string[];
  impact?: string;
}
