import { FaGithub } from 'react-icons/fa6';

export const icons = {
    github: FaGithub,
} as const;

export type IconName = keyof typeof icons;
