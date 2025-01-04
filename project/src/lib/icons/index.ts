import { FaGithub } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

export const icons = {
    github: FaGithub,
    discord: FaDiscord,
    instagram: AiFillInstagram,
} as const;

export type IconName = keyof typeof icons;
