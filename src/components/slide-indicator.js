import { LitElement, html, css } from "lit";

export class SlideIndicator extends LitElement {
    static properties = {
        currentSlide: {
            type: Number,
            attribute: "current-slide",
            reflect: true,
        },
        totalSlides: {
            type: Number,
            attribute: "total-slides",
            reflect: true,
        },
    };

    constructor() {
        super();
        this.currentSlide = 0;
        this.totalSlides = 0;
    }

    render() {
        return html`<small
            >${this.currentSlide + 1} / ${this.totalSlides + 1}</small
        >`;
    }

    static styles = css`
        small {
            position: absolute;
            display: flex;
            top: 0.5rem;
            right: 0.5rem;
            width: fit-content;
            padding: 0.2rem 0.4rem;
            border-radius: 6px;
            background-color: #111b;
            color: white;
        }
    `;
}
customElements.define("slide-indicator", SlideIndicator);
