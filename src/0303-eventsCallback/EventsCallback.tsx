import Exercise from "./Exercise";

export default function EventsCallback() {

    // Eventos
    // Passamos o evento como uma sting e uma função de callback no método addEventListener. A função de callback possui um parâmetro que faz referência ao evento executado.

    const button = document.querySelector('button');

    function handleClick(event: MouseEvent) {
        console.log(event.pageX);
    }

    // button?.addEventListener('click', handleClick);

    // Event não tem todas as propriedades que o MouseEvent, PointEvent possuem
    function handleScroll(event: Event) {
        console.log(event);
    }

    // Também é possível adicionar em objetos que não são pertencentes ao HTML, por exemplo o objeto window, que faz referência a tela
    // window.addEventListener("scroll", handleScroll);

    // Event e instanceof
    // Uma função quando criada, pode ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event

    // Neste caso, será melhor utilizar o event: Event, pois é comum a todos e não: event: MouseEvent | TouchEvent | KeyboardEvent
    function ativarMenu(event: Event) {
        console.log(event.type);
        // Precisa-se verificar a instancia para ter acesso aos métodos
        if(event instanceof MouseEvent) {
            console.log(event.pageX);
        }
        // if(event instanceof TouchEvent) {
        //     console.log(event.touches[0].pageX);
        // }
        if(event instanceof KeyboardEvent) {
            console.log(event.key)
        }
    }

    // document.documentElement.addEventListener('mousedown', ativarMenu);
    // document.documentElement.addEventListener('touchstart', ativarMenu);
    // document.documentElement.addEventListener('keydown', ativarMenu);

    // This
    // Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.

    function activeMenu(this: HTMLButtonElement, event: MouseEvent) {
        console.log(this);
        const element = event.currentTarget;

        if(element instanceof HTMLElement) {
            console.log(element.innerText);
        }
    }

    const buttonMenu = document.querySelector('button');
    // buttonMenu?.addEventListener('click', activeMenu);

    return (
        <div>
            <h1>Events and Callback</h1>
            <Exercise/>
        </div>
    )
}