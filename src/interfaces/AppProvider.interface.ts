export interface AppProviderProps {
    children: React.ReactNode;
}
export interface IAppcontext {
    isMobile: boolean;
    watchLists: any;
    popularList: any;
    language: string;
    setWatchLists: any;
    setPopoularList: any;
    setLanguage: (lang: string) => any;
    setStoredWatchListValue: any;
}
