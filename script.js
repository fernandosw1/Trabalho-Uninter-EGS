document.addEventListener('DOMContentLoaded', () => {
    const aboutMeSection = document.querySelector('.about-me');

    const button = document.createElement('button');
    button.textContent = 'clique para ver uma mensagem';
    button.style.backgroundColor = 'var(--primary-color)';
    button.style.color = 'var(--text-light)';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.fontSize = '1em';
    button.style.fontWeight = '700';
    button.style.marginTop = '20px';
    button.style.padding = '10px 15px';

   
    const messageParagraph = document.createElement('p');
    messageParagraph.id = 'motivation-message';
    messageParagraph.textContent = ''; 
    messageParagraph.style.marginTop = '15px';
    messageParagraph.style.fontStyle = 'italic';
    messageParagraph.style.color = 'var(--primary-color)';
 

    const lastParagraph = aboutMeSection.querySelector('p:last-of-type');
    if (lastParagraph) {
        lastParagraph.parentNode.insertBefore(button, lastParagraph.nextSibling);
        button.parentNode.insertBefore(messageParagraph, button.nextSibling);
    } else {
        aboutMeSection.appendChild(button);
        aboutMeSection.appendChild(messageParagraph);
    }

    button.addEventListener('click', () => {
        const messages = [
            "A dor que você sente hoje é a força que você sentirá amanhã. Cada gota de suor é um passo a mais em direção ao seu sucesso.",
            "Transforme o cansaço em energia e a dificuldade em superação. Você é mais forte do que pensa.",
            "Disciplina é a ponte entre os objetivos e as realizações. Mantenha-se firme e os resultados aparecerão..",
            "Não espere por uma ocasião especial para começar. O melhor momento para transformar sua vida é agora. Vá em frente!.",
            "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante..",
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageParagraph.textContent = messages[randomIndex];
    });

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'var(--secondary-color)';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'var(--primary-color)';
    });
});


