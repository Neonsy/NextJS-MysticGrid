import { icons, type IconName } from '@/lib/icons';

type IconProps = {
    name: IconName;
    className?: string;
};

export default function Icon({ name, className }: IconProps) {
    const IconComponent = icons[name];
    return <IconComponent className={className} />;
}
