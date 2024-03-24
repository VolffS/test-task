import {useState} from "react";
import {IDeferredLoader} from "@/type/i-deferred-loader.ts";

export const useDeferredLoader = (): IDeferredLoader => {
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