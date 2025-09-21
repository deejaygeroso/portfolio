import { IconButtonProps } from '@mui/material';

import { IProject } from '@/interfaces';

export interface ProjectProps {
  project: IProject;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
