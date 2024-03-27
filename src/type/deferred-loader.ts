export interface DeferredLoader {
    isLoader: boolean,
    shutdownLoader: () => void
}