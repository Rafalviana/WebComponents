class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement('span');
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

        const LinkTitle = document.createElement('a');
        LinkTitle.textContent = this.getAttribute('title');
        LinkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(LinkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card_right");

        const image = document.createElement('img');
        image.setAttribute("class","image_right");
        image.src = this.getAttribute('img-link');

        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
        
        .card{
            width: 900px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 1px 4px 6px 3px rgba(0,0,0,0.68); 
            box-shadow: 1px 4px 6px 3px rgba(0,0,0,0.68);
        }

        

        .card .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left > a {
            margin-top: 10px;
            font-weight: bold
        }


        .card_left > p {
            color: rgb(70,70,70);
        }

        .image_right{
            max-width: 300px;
        }
        `

        return style
    }

}

customElements.define("card-news", CardNews);