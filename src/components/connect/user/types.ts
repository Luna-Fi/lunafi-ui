export interface ConnectUserProps {
    address: string;
    network: string;
    explorerHref: string;
    disconnectCallback(): void;
}
