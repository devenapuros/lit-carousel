import { LitElement, html, css } from "lit";

export class CarouselContainer extends LitElement {
    static styles = css`
        :host {
            position: relative;
            display: flex;
            width: 100%;
            max-width: 450px;
            overflow: hidden;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            gap: 0;
            height: fit-content;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            transition: all 300ms ease;
            transform: translateX(calc(0 * -100%));
            list-style: none;
            overflow: scroll hidden;
            scrollbar-width: none;
        }

        /* Works on Chrome, Edge, and Safari */
        ul::-webkit-scrollbar {
            display: none;
        }
    `;

    render() {
        return html`
            <ul>
                <slot></slot>
            </ul>
        `;
    }
}
customElements.define("carousel-container", CarouselContainer);
