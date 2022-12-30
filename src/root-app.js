/* eslint-disable indent */
import { LitElement, html, css } from "lit";
import { CarouselContainer } from "./carousel-container";
import { CarouselItem } from "./carousel-item";

const myAlbums = [
    {
        name: "Porfiado",
        artist: "El Cuarteto de Nos",
        thumbnail: "porfiado.jpg",
    },
    {
        name: "Currents",
        artist: "Tame Impala",
        thumbnail: "currents.webp",
    },
    {
        name: "Comedown Machine",
        artist: "The Strokes",
        thumbnail: "comedown-machine.jpg",
    },

    {
        name: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        thumbnail: "the-dark-side-of-the-moon.jpg",
    },
    {
        name: "The 2nd Law",
        artist: "Muse",
        thumbnail: "the-2nd-law.jpg",
    },
];

export class RootApp extends LitElement {
    static properties = {
        albums: { type: Array },
        currentSlide: { type: Number },
    };

    static styles = css`
        :host {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.4rem;
            width: 100%;
            max-width: 450px;
            min-height: 100vh;
            font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        }

        h1 {
            font-size: 1.7rem;
            color: #111;
            margin: 0;
            padding: 0;
        }

        small {
            color: #666;
            font-size: 0.9rem;
        }
    `;

    constructor() {
        super();
        this.albums = myAlbums;
        this.currentSlide = 0;
    }

    render() {
        return html` <header>
                <h1>My favorite albums</h1>
                <small>${this.albums.length} total albums</small>
            </header>
            <carousel-container>
                ${this.albums.map(
                    (album) =>
                        html`<carousel-item
                            name=${album.name}
                            artist=${album.artist}
                            thumbnail=${album.thumbnail}
                        ></carousel-item>`
                )}
            </carousel-container>`;
    }
}

window.customElements.define("root-app", RootApp);
