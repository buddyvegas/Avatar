/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AfAvatar {
        "name": string;
        "size": number;
    }
}
declare global {
    interface HTMLAfAvatarElement extends Components.AfAvatar, HTMLStencilElement {
    }
    var HTMLAfAvatarElement: {
        prototype: HTMLAfAvatarElement;
        new (): HTMLAfAvatarElement;
    };
    interface HTMLElementTagNameMap {
        "af-avatar": HTMLAfAvatarElement;
    }
}
declare namespace LocalJSX {
    interface AfAvatar {
        "name"?: string;
        "size"?: number;
    }
    interface IntrinsicElements {
        "af-avatar": AfAvatar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "af-avatar": LocalJSX.AfAvatar & JSXBase.HTMLAttributes<HTMLAfAvatarElement>;
        }
    }
}
