import { DestroyRef, inject } from "@angular/core";

export function startTimeouts() {
    const destroy = inject(DestroyRef);

    const intervalID = setInterval(() => {
        console.log('Ping')
    }, 2000);

    destroy.onDestroy(() => {
        clearInterval(intervalID);
    })
}