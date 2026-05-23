export type Step = {
    id: number;
    label: string;
};

export type CarFeature = {
    icon: string;
    iconFamily: 'MaterialCommunityIcons' | 'Ionicons';
    label: string;
};

export interface DropdownItem {
    label: string;
    value: string;
}