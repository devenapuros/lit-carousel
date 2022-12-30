import { LitElement, html, css } from "lit";

export class CarouselItem extends LitElement {
    static properties = {
        name: { type: String },
        artist: { type: String },
        thumbnail: { type: String },
    };

    constructor() {
        super();
        this.name = "No name";
        this.artist = "No artist";
        this.thumbnail = "";
    }
    render() {
        return html`<li>
            <figure>
                <img src=${`/albums/${this.thumbnail}`} alt="" />
                <figcaption>
                    <span class="album-name">${this.name}</span>
                    <span class="divider">●</span>
                    <span class="album-artist">${this.artist}</span>
                </figcaption>
            </figure>
        </li>`;
    }

    static styles = css`
        :host {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            list-style: none;
            flex: 0 0 100%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            gap: 0;
            width: 100%;
        }

        li {
            margin: 0;
            padding: 0;
        }

        figure {
            margin: 0;
            width: 100%;
        }

        figure img {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
        }

        figcaption {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
        }

        figcaption .album-name {
            font-weight: 600;
        }

        figcaption .album-artist {
            color: #666;
        }
    `;
}
customElements.define("carousel-item", CarouselItem);
