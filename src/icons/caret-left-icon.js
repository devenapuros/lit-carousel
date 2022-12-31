import { LitElement, html, css } from "lit";

export class CaretLeftIcon extends LitElement {
    static properties = {
        size: { type: Number },
    };

    static styles = css`
        :host {
            display: flex;
        }
    `;

    constructor() {
        super();
        this.size = 24;
    }

    render() {
        return html`<svg
            xmlns="http://www.w3.org/2000/svg"
            width=${this.size}
            height=${this.size}
            fill="currentColor"
            viewBox="0 0 256 256"
        >
            <rect width="256" height="256" fill="none"></rect>
            <polyline
                points="160 208 80 128 160 48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
            ></polyline>
        </svg>`;
    }
}
customElements.define("caret-left-icon", CaretLeftIcon);
