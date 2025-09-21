import { IMember } from '@/interfaces';

export interface TeamMembersModalProps {
  open: boolean;
  onClose: () => void;
  teamMembers: IMember[];
}
