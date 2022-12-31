import { LitElement, html, css } from "lit";
import { CarouselButton } from "./carousel-button";
import { CaretRightIcon } from "../icons/caret-right-icon";
import { CaretLeftIcon } from "../icons/caret-left-icon";
import { SlideIndicator } from "./slide-indicator";

export class CarouselContainer extends LitElement {
    static properties = {
        currentSlide: {
            type: Number,
            attribute: "current-slide",
        },
        totalSlides: { type: Number, attribute: "total-slides" },
    };

    get $carouselViewport() {
        return this.shadowRoot.getElementById("carousel-viewport");
    }

    changeSlide(slide) {
        this.currentSlide = slide;
        const scrolling = this.$carouselViewport.getBoundingClientRect().width;
        this.$carouselViewport.scroll(this.currentSlide * scrolling, 0);
    }

    renderRightButton() {
        if (this.currentSlide < this.totalSlides)
            return html`<carousel-button
                position="right"
                .onclick=${() => this.changeSlide(this.currentSlide + 1)}
            >
                <caret-right-icon size="16"></caret-right-icon>
            </carousel-button>`;
    }

    renderLeftButton() {
        if (this.currentSlide > 0)
            return html`<carousel-button
                position="left"
                .onclick=${() => this.changeSlide(this.currentSlide - 1)}
            >
                <caret-left-icon size="16"></caret-left-icon>
            </carousel-button>`;
    }

    constructor() {
        super();
        this.currentSlide = 0;
        this.totalSlides = 1;
    }

    render() {
        return html`
            <ul id="carousel-viewport">
                <slot></slot>
            </ul>
            ${this.renderLeftButton()} ${this.renderRightButton()}
        `;
    }

    static styles = css`
        :host {
            position: relative;
            display: flex;
            width: 100%;
            max-width: 450px;
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

        /* Chromium based browsers and Safari */
        ul::-webkit-scrollbar {
            display: none;
        }
    `;
}
customElements.define("carousel-container", CarouselContainer);
