import { AiFillInstagram } from 'react-icons/ai';
import { FaBrain, FaCheckCircle, FaMagic, FaPlay } from 'react-icons/fa';
import { FaDiscord, FaGithub } from 'react-icons/fa6';

export const icons = {
    github: FaGithub,
    discord: FaDiscord,
    instagram: AiFillInstagram,
    play: FaPlay,
    generate: FaMagic,
    verify: FaCheckCircle,
    solve: FaBrain,
} as const;

export type IconName = keyof typeof icons;
