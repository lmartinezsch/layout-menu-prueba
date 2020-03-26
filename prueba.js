import { html, render } from './node_modules/lit-html';

const header = () => html`
<aside class="mdc-drawer">
        <div class="mdc-drawer__content">
            <nav class="mdc-list">
                <a class="mdc-list-item mdc-list-item--selected" href="#" aria-selected="true" tabindex="0">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
                    <span class="mdc-list-item__text">Inbox</span>
                </a>
                <a class="mdc-list-item" href="#">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
                    <span class="mdc-list-item__text">Outgoing</span>
                </a>
                <a class="mdc-list-item" href="#">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                    <span class="mdc-list-item__text">Drafts</span>
                </a>
            </nav>
        </div>
    </aside>

    <div class="mdc-drawer-scrim"></div>
    <div class="mdc-drawer-app-content">
        <header class="mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <a href="#" class="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
                    <span class="mdc-top-app-bar__title">App Bar</span>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Search"
                        alt="Search">search</a>
                </section>
            </div>
        </header>

        <main class="main-content">
            <div class="mdc-top-app-bar--fixed-adjust">
                <h2>
                    An example using Material Components for the Web that changes the navigation drawer layout based on
                    screen width
                </h2>
                <p>
                    This simple website template uses Material Components to implement a permanent navigation drawer for
                    screen widths larger
                    than 900px, and a modal drawer for screen widths smaller than 900px. Check it out by resizing the
                    width of your browser window!
                </p>
                <p>Read more about the Material Design <a
                        href="https://material.io/design/layout/responsive-layout-grid.html">responsive layout grid</a>.
                </p>
            </div>
        </main>
    </div>
    `;

render(header(), document.getElementById("prueba"));