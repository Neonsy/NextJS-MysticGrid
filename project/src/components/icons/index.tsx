import { icons, type IconName } from '@/lib/icons';

type Props = {
    name: IconName;
    className?: string;
};

export default function Icon({ name, className }: Props) {
    const IconComponent = icons[name];
    return <IconComponent className={className} />;
}
