import { LitElement, html, css } from 'lit-element';



export class StickyNote extends LitElement {
    static get styles() {
        return css`
      div {
        position: relative;
        background: #ffdb58;
        border: 0;
        border-radius: 5px;
        color: white;
        padding: 0.5rem;
        height: 300px;
        width: 300px;
        margin: auto;
        text-align: justify;
        -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.5);
      }

      h1, p, span{
        color: black;
      }
        
      h1, span{
        font-family: arial;
      }

      #description-paragraph{
         font-size: 1.6rem;
         text-indent: 20px;
         font-family:"Reenie Beanie"
       }
       
      #date-span{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    `;
    }

    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            date: { type: Date },
        };
    }

    constructor() {
        super();
        this.title = 'Default title';
        console.log('Sticky note has been constructed');
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('Sticky note has been connected');
    }

    render() {
        return html`
      <div>
        <h1>${this.title}</h1>
        <p id="description-paragraph">${this.description}</p>
        <span id="date-span">${this.date}</span>
      </div>
    `;
    }
}
