import {AllIcons} from "./all-icons";

export type SvgIconType = () => Promise<typeof import('*.svg')>

export const SvgIcons = {
    ModalClose: () => AllIcons.SVGModalClose,
    EyeOpen: () => AllIcons.SVGEyeOpen,
    EyeClose: () => AllIcons.SVGEyeClose,
    // ... more icons
} as const;

export type IconNames = keyof typeof SvgIcons;

