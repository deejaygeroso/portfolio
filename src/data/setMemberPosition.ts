import { IMember } from '@/interfaces';

function setMemberPosition(member: IMember, position: string): IMember {
  return { ...member, position };
}

export default setMemberPosition;
