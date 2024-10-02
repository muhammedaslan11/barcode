import { DynamicIcon } from "../global/icons";

type IconName = 
    | "copyright"
    | "code"
    | "naturel"
    | "powerful"
    | "stars"
    | "usercircle"
    | "mail"
    | "arrowupborder"
    | "link"
    | "gallery"
    | "customers"
    | "process"
    | "location"
    | "map"
    | "phone"
    | "appgallery"
    | "product"
    | "pdf"
    | "male"
    | "female"
    | "filter"
    | "category"

interface Props {
    title: string;
    iconName?: IconName;
}

export const SectionBadge = ({ title, iconName }: Props) => {
    return (
        <div className="relative inline-flex min-w-48 h-12 overflow-hidden border rounded-md p-[1.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-4 py-1 text-xl font-bold text-white backdrop-blur-3xl">
                {title}
                {iconName && <DynamicIcon className="mx-1" iconName={iconName} size={21} color="#fff" />}
            </span>
        </div>
    );
};
