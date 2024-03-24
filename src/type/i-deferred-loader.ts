export interface IDeferredLoader {
    isLoader: boolean,
    shutdownLoader: () => void
}