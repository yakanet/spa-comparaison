class CustomerFormElement extends HTMLElement {
  #firstNameEl;
  #lastNameEl;
  #outputEl;
  #buttonEl;

  constructor() {
    super();
  }

  connectedCallback() {
    // Elements
    const main = document.createElement("main");
    const h1 = document.createElement("h1");
    h1.textContent = "Hi, please enter your name:";
    main.appendChild(h1);

    const p1 = document.createElement("p");
    const t1 = document.createTextNode("First: ");
    this.#firstNameEl = document.createElement("input");
    p1.appendChild(t1);
    p1.appendChild(this.#firstNameEl);
    main.appendChild(p1);

    const p2 = document.createElement("p");
    const t2 = document.createTextNode("Last: ");
    this.#lastNameEl = document.createElement("input");
    p2.appendChild(t2);
    p2.appendChild(this.#lastNameEl);
    main.appendChild(p2);

    const p3 = document.createElement("p");
    this.#outputEl = document.createTextNode('');
    p3.appendChild(this.#outputEl);
    main.appendChild(p3);

    const p4 = document.createElement("p");
    this.#buttonEl = document.createElement("button");
    this.#buttonEl.textContent = "Reset";
    p4.appendChild(this.#buttonEl);
    main.appendChild(p4);
    this.appendChild(main);

    // Events
    this.#firstNameEl.addEventListener('input', () => this.updateFirstName());
    this.#lastNameEl.addEventListener('input', () => this.updateFirstName());
    this.#buttonEl.addEventListener('click', () => this.reset());
  }

  updateFirstName() {
    this.setAttribute('firstName', this.#firstNameEl.value);
    this.setAttribute('lastName', this.#firstNameEl.value);
    this.#outputEl.textContent = `${this.#firstNameEl.value} ${this.#lastNameEl.value}`;
  }

  reset() {
    this.#firstNameEl.value = '';
    this.#lastNameEl.value = '';
    this.updateFirstName();
  }
}

customElements.define("customer-form", CustomerFormElement);
