import React from "react";
import { type IconName, iconMap } from "@/shared/ui/icons/icons";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    name: IconName;
    size?: number | string | [number | string, number | string];
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, style, alt, ...rest }) => {
    const src = iconMap[name];
    console.log(src);
    if(!src) {
        console.warn(`#ICON_NOT_FOUND - ${name}`);
        return null;
    }

    const [width, height] = Array.isArray(size) ? size : [size, size];

    return (
        <img
            src={src}
            alt={alt ?? name}
            width={width}
            height={height}
            style={style}
            {...rest}
        />
    );
};
