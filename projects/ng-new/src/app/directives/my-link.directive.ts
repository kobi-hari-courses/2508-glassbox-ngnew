import { Directive, inject, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MY_LINK_ACTIVE_CLASS } from "../tokens/my-link-active-class.token";

@Directive({
    selector: '[myLink]', 
    hostDirectives: [
        {
            directive: RouterLink, 
            inputs: ['routerLink: myLink']
        }, 
        RouterLinkActive
    ]
})
export class MyLinkDirective {
    readonly myLink = input.required<string>();

    constructor() {
        const className = inject(MY_LINK_ACTIVE_CLASS, {
            optional: true
        }) ?? 'here';

        inject(RouterLinkActive).routerLinkActive = className;
    }

}