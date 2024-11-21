import { IconType } from 'react-icons';

type IconProps = {
    className?: string;
    icon: IconType;
};

export default function Icons({ className, icon: Icon }: IconProps) {
    return <Icon className={className} />;
}
