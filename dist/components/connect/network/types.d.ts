export interface ConnectNetworkItem {
    key: string | number;
    name: string;
    previewSrc?: string;
    iconSrc?: string;
    color?: string;
}
export interface ConnectNetworkProps {
    items: ConnectNetworkItem[];
    onSelect: (network?: ConnectNetworkItem) => void;
    selectedKey: ConnectNetworkItem['key'];
}
