import {useState} from "react";
import {DeferredLoader} from "@/type/deferred-loader.ts";

export const useDeferredLoader = (): DeferredLoader => {
    const [isLoader, setIsLoader] = useState<boolean>(true);

    const shutdownLoader = (): void => {
        setTimeout((): void => {
            setIsLoader(false)
        }, 500)
    }

    return {
        isLoader,
        shutdownLoader
    }
}