import { LitElement, html, css } from "lit";

export class CarouselButton extends LitElement {
    static properties = {
        position: { type: String },
        handleClick: {
            type: Function,
            attribute: "onclick",
            reflect: true,
        },
    };

    constructor() {
        super();
        this.position = "";
    }

    render() {
        return html`<button class=${this.position} @click=${this.handleClick}>
            <slot></slot>
        </button>`;
    }

    static styles = css`
        button {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 45%;
            padding: 0.5rem;
            height: 28px;
            width: 28px;
            background-color: #111;
            border: 0;
            border-radius: 100%;
            color: #f5f6f7;
        }

        button.right {
            right: -3rem;
        }

        button.left {
            left: -3rem;
        }

        button:hover {
            cursor: pointer;
        }

        

        @media screen and (min-width: 401px ) and (max-width: 600px) {
            button.right {
                right: 0.5rem;
            }

            button.left {
                left: 0.5rem;
            }
        }

        @media screen and (max-width: 400px) {
            :host {
                display: none;
        }
    `;
}
customElements.define("carousel-button", CarouselButton);
